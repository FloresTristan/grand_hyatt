/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef, useState } from 'react';
import EventModalOverlay from '@/app/components/EventModalOverlay';

// MUI
import {
  Tabs, Tab, Box, Select, MenuItem, List, ListItem, ListItemText,
  IconButton, CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function CMSPage() {
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Schedule/time
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState(''); 
  
  // Modal controls (preview/editor only)
  const [publishModal, setPublishModal] = useState(true);
  const [forceOpen, setForceOpen] = useState(true);
  const [ctaLabel, setCtaLabel] = useState('');
  const [ctaHref, setCtaHref] = useState('');
  
  const [eventId, setEventId] = useState<string | null>(null);
  const [tab, setTab] = useState(0); // 0=create, 1=update, 2=delete
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [selectedUpdateId, setSelectedUpdateId] = useState<string>('');
  const [selectedEvent, setSelectedEvent] = useState({});
  const [hasOrderChanges, setHasOrderChanges] = useState(false);

  const DRAFT_KEY = 'cmsDraft_v1';
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previewRef = useRef<HTMLIFrameElement | null>(null);

  /**  from localStorage */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      setTitle(s.title || '');
      setSubheading(s.subheading || '');
      setDescription(s.description || '');
      setStartDate(s.startDate || '');
      setEndDate(s.endDate || '');
      setStartTime(s.startTime || '');
      setPublishModal(s.publishModal ?? true);
      setForceOpen(s.forceOpen ?? true);
      setCtaLabel(s.ctaLabel || '');
      setCtaHref(s.ctaHref || '');
      if (s.imageDataUrl) setImageUrl(s.imageDataUrl);
    } catch {}
  }, []);

  /** Autosave */
  useEffect(() => {
    const id = setTimeout(async () => {
      try {
        let imageDataUrl = imageUrl;
        if (!imageDataUrl && imageFile) {
          imageDataUrl = await fileToDataUrl(imageFile);
          setImageUrl(imageDataUrl);
        }
        localStorage.setItem(
          DRAFT_KEY,
          JSON.stringify({
            title,
            subheading,
            description,
            startDate,
            endDate,
            startTime,
            publishModal,
            forceOpen,
            ctaLabel,
            ctaHref,
            imageDataUrl,
          }),
        );
      } catch {}
    }, 300);
    return () => clearTimeout(id);
  }, [title, subheading, description, startDate, endDate, startTime, publishModal, forceOpen, ctaLabel, ctaHref, imageFile, imageUrl]);

  /** Optional: postMessage → website runtime */
  useEffect(() => {
    const id = setTimeout(() => {
      let imageDataUrl: string | null =
        imageUrl && imageUrl.startsWith('data:') ? imageUrl : null;
      if (!imageDataUrl) {
        try {
          const raw = localStorage.getItem(DRAFT_KEY);
          imageDataUrl = raw ? JSON.parse(raw).imageDataUrl ?? null : null;
        } catch {}
      }
      const payload = {
        title, subheading, description, startDate, endDate, startTime,
        publishModal, forceOpen, ctaLabel, ctaHref, imageDataUrl,
      };
      previewRef.current?.contentWindow?.postMessage(
        { type: 'cms:update', payload },
        window.location.origin,
      );
    }, 120);
    return () => clearTimeout(id);
  }, [title, subheading, description, startDate, endDate, startTime, publishModal, forceOpen, ctaLabel, ctaHref, imageUrl]);

  function onPickClick() { inputRef.current?.click(); }

  function onFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (f) handleNewImageFile(f);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault(); const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith('image/')) handleNewImageFile(f);
  }

  function onDragOver(e: React.DragEvent<HTMLDivElement>) { e.preventDefault(); }
  useEffect(() => {
    function onPaste(e: ClipboardEvent) {
      if (!e.clipboardData) return;
      const item = Array.from(e.clipboardData.items).find((i) => i.type.startsWith('image/'));
      if (!item) return;
      const f = item.getAsFile();
      if (f) handleNewImageFile(f);
    }
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, []);
  function handleNewImageFile(f: File) {
    setImageFile(f);
    const url = URL.createObjectURL(f);
    setImageUrl(url);
  }

  function resetAll() {
    setTitle(''); setSubheading(''); setDescription('');
    setStartDate(''); setEndDate(''); setStartTime('');
    setPublishModal(true); setForceOpen(true);
    setCtaLabel(''); setCtaHref('');
    setImageFile(null); setImageUrl(null);
    localStorage.removeItem(DRAFT_KEY);
    setSelectedUpdateId('');
    setSelectedEvent({});
  }
  
  async function fetchEvents() {
    setLoadingEvents(true);
    try {
      const res = await fetch('/api/events', { cache: 'no-store' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to load events');
      const items = (data.items || []).sort(
      (a: unknown, b: unknown) => (a.order ?? 0) - (b.order ?? 0)
    );
      setEvents(items);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingEvents(false);
    }
  }

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;
    const src = result.source.index;
    const dst = result.destination.index;
    if (src === dst) return;

    setEvents(prev => {
      const next = [...prev];
      const [moved] = next.splice(src, 1);
      next.splice(dst, 0, moved);
      return next;
    });
    setHasOrderChanges(true);
  }

// Save new order to Firestore
  async function saveOrder() {
    try {
      const ids = events.map(e => e.id);
      const res = await fetch('/api/events/reorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Reorder failed');
      setHasOrderChanges(false);
      alert('Order saved');
    } catch (e: unknown) {
      alert(e.message || 'Save failed');
    }
  }
  useEffect(() => { if (tab !== 0) fetchEvents(); }, [tab]);
  // fetchEvents()
  console.log(events)

  // function comparePayloadToSelectedEvent(payload, selectedEvent){
  //   // delete selectedEvent.id
  //   // delete selectedEvent.createdAt
  //   // delete selectedEvent.createdBy
  //   // delete selectedEvent.updatedAt
  //   // delete selectedEvent.updatedBy
  //   // if (payload !== selectedEvent) {
  //   //   console.log('over here', payload)
  //   //   console.log(selectedEvent)
  //   // }
  //   console.log(payload, 'payload here')
  //   const differingKeys = [];
  //   const payLoadKeys = Object.keys(payload)
  //   const eventKeys = Object.keys(selectedEvent)

  //   for (const key of eventKeys) {
  //     // Check if the key exists in the second object
  //     if (Object.prototype.hasOwnProperty.call(payload, key)) {
  //       // Compare values
  //       if (selectedEvent[key] !== payload[key]) {
  //         // Special handling for NaN
  //         if (Number.isNaN(payload[key]) && Number.isNaN(selectedEvent[key])) {
  //           // Both are NaN, consider them equal for this comparison
  //           continue;
  //         }
  //         differingKeys.push(key);
  //       }
  //     } else {
  //       console.warn(`Key '${key}' exists in payload but not in selectedEvent.`);
  //     }
  //   }

  //   for (const key of payLoadKeys) {
  //     if (!Object.prototype.hasOwnProperty.call(selectedEvent, key)) {
  //       console.warn(`Key '${key}' exists in payload but not in selectedEvent.`);
  //     }
  //   }

  //   if (differingKeys.length > 0) {
  //     return `Values differ for keys: ${differingKeys.join(', ')}`;
  //   } else {
  //     return "All common key values are identical.";
  //   }

  // }

  async function onSave() {
    try {
      const payload = {
        title, subheading, description,
        startDate, endDate, startTime,
        ctaLabel, ctaHref,
        imageDataUrl: imageUrl?.startsWith('data:') ? imageUrl : null,
        status: 'draft',
      };

      if (title=='' || title == null){
        alert("Title needed")
        return
      }
      let res, data;
      if (!eventId || tab === 0) {
        // CREATE
        res = await fetch('/api/events', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Create failed');
        // setEventId(data.id);
        // keep draft id
        const raw = localStorage.getItem(DRAFT_KEY);
        const s = raw ? JSON.parse(raw) : {};
        localStorage.setItem(DRAFT_KEY, JSON.stringify({ ...s, eventId: data.id }));
        if (tab === 0) alert('Created!');
      } else {
        // UPDATE
        // comparePayloadToSelectedEvent(payload, selectedEvent)
        res = await fetch(`/api/events/${eventId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Update failed');
        alert('Updated!');
      }
      if (tab !== 0) fetchEvents();
    } catch (e: unknown) {
      alert(e.message || 'Save failed');
    }
    resetAll();
  }
  console.log(selectedEvent)

  async function onDelete(id: string) {
    if (!confirm('Delete this event?')) return;
    try {
      const res = await fetch(`/api/events/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Delete failed');
      setEvents(prev => prev.filter(e => e.id !== id));
      if (eventId === id) { setEventId(null); }
    } catch (e: unknown) {
      alert(e.message || 'Delete failed');
    }
  }

  console.log('id', eventId)

  const dateError =
    startDate && endDate && new Date(endDate) < new Date(startDate)
      ? 'End date cannot be before start date.'
      : '';

  const modalOpen = shouldShowModal({ publishModal, forceOpen, startDate, endDate });

  const canShowForm = tab === 0 || (tab === 1 && !!selectedUpdateId);
  return (
    <div className="font-sans flex flex-col gap-4 md:flex-row min-h-screen md:h-screen p-8 pb-20 md:gap-8 sm:px-20 bg-[#151c2f]">
      {/* editor side ni */}
      <div className="md:w-[30%] text-white h-[90%] md:overflow-scroll custom-scrollbar md:overflow-auto shadow-xl rounded-xl bg-[#212e3f] p-3 md:p-5 space-y-4">
        {/* tabs header */}
        <Box sx={{ borderBottom: 1, borderColor: 'rgba(255,255,255,0.1)' }}>
          <Tabs
            value={tab}
            onChange={(_, v) => {
              setTab(v);
              resetAll();
              setSelectedUpdateId('')
              if (v === 0) setEventId(null);
            }}
            variant="fullWidth"
            sx={{
              '& .MuiTab-root': { color: 'rgba(255,255,255,0.7)' },
              '& .Mui-selected': { color: '#fff' },
              '& .MuiTabs-indicator': { backgroundColor: '#60a5fa' },
            }}
          >
            <Tab label="Create" />
            <Tab label="Update" />
            <Tab label="Order"/>
            <Tab label="Delete" />
          </Tabs>
        </Box>

        {/* Update tab controls */}
        {tab === 1 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Select
                fullWidth
                displayEmpty
                size="small"
                value={selectedUpdateId}
                onChange={(e) => {
                  const id = String(e.target.value);
                  setSelectedUpdateId(id);
                  const ev = events.find(x => x.id === id);
                  if (ev) {
                    setSelectedEvent(ev);
                    setEventId(ev.id);
                    setTitle(ev.title || '');
                    setSubheading(ev.subheading || '');
                    setDescription(ev.description || '');
                    setStartDate(ev.startDate || '');
                    setEndDate(ev.endDate || '');
                    setStartTime(ev.startTime || '');
                    setCtaLabel(ev.ctaLabel || '');
                    setCtaHref(ev.ctaHref || '');
                    setImageUrl(ev.imageDataUrl || null);
                  }
                }}
                sx={{
                  color: '#fff',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.15)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                }}
                renderValue={(val) =>
                  val ? (events.find(e => e.id === val)?.title + ' hi' || '---') : 'Select event…'
                }
              >
                {loadingEvents && (
                  <MenuItem disabled>
                    <CircularProgress size={16} sx={{ mr: 1 }} /> Loading…
                  </MenuItem>
                )}
                {!loadingEvents && events.length === 0 && (
                  <MenuItem disabled>No events yet</MenuItem>
                )}
                {events.map(e => (
                  <MenuItem key={e.id} value={e.id}>
                    {e.title || '(untitled)'}
                  </MenuItem>
                ))}
              </Select>
              <IconButton size="small" 
                onClick={()=>{
                  setSelectedUpdateId('')
                  resetAll()
                  fetchEvents()
                  }}>
                <RefreshIcon htmlColor="#9ca3af" fontSize="small" />
              </IconButton>
            </div>
            <div className="text-xs text-white/60">
              {selectedUpdateId ? `Editing: ${selectedUpdateId}` : 'Pick an event to edit'}
            </div>
          </div>
        )}

        {tab === 2 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/80">Reorder events (drag rows)</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={saveOrder}
                  disabled={!hasOrderChanges}
                  className="rounded-md bg-blue-500/90 hover:bg-blue-500 px-3 py-1.5 text-sm disabled:opacity-50"
                >
                  Save
                </button>
                <IconButton size="small" onClick={fetchEvents}>
                  <RefreshIcon htmlColor="#9ca3af" fontSize="small" />
                </IconButton>
              </div>
            </div>

            {loadingEvents ? (
              <div className="flex justify-center py-4"><CircularProgress size={20} /></div>
            ) : (
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="events-order">
                  {(provided) => (
                    <ul
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="divide-y divide-white/10 rounded-lg h-[150px] md:h-[550px] overflow-scroll custom-scrollbar"
                    >
                      {events.map((e, index) => (
                        <Draggable key={e.id} draggableId={e.id} index={index}>
                          {(prov) => (
                            <li
                              ref={prov.innerRef}
                              {...prov.draggableProps}
                              className="flex items-center justify-between even:bg-[#151c2f] p-2  hover:bg-white/10"
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  {...prov.dragHandleProps}
                                  className="text-white/60 cursor-grab active:cursor-grabbing"
                                  title="Drag to reorder"
                                >
                                  <DragIndicatorIcon fontSize="small" />
                                </span>
                                <span className="w-6 text-white/60 text-xs tabular-nums">{index + 1}</span>
                                <span className="text-white">{e.title || '(untitled)'}</span>
                              </div>
                              <span className="text-xs text-white/40">{e.id}</span>
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                      {events.length === 0 && (
                        <li className="p-3 text-sm text-white/60">No events yet.</li>
                      )}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            )}
          </div>
        )}

        {/* Delete tab content */}
        {tab === 3 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/80">Delete events</div>
              <IconButton size="small" onClick={()=>{
                fetchEvents()
                resetAll()
              }}>
                <RefreshIcon htmlColor="#9ca3af" fontSize="small" />
              </IconButton>
            </div>
            {loadingEvents ? (
              <div className="flex justify-center py-4"><CircularProgress size={20} /></div>
            ) : (
              <List dense 
                className="h-[150px] md:h-[600px] overflow-scroll custom-scrollbar"
              >
                {events.map(e => (
                  <ListItem
                    className=''
                    key={e.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete" onClick={() => {
                        onDelete(e.id)
                      }
                      }>
                        <DeleteIcon htmlColor="#fca5a5" />
                      </IconButton>
                    }
                    onClick={()=>{
                      const id = e.id
                      setSelectedUpdateId(id);
                      const ev = events.find(x => x.id === id);
                      if (ev) {
                        setEventId(ev.id);
                        setTitle(ev.title || '');
                        setSubheading(ev.subheading || '');
                        setDescription(ev.description || '');
                        setStartDate(ev.startDate || '');
                        setEndDate(ev.endDate || '');
                        setStartTime(ev.startTime || '');
                        setCtaLabel(ev.ctaLabel || '');
                        setCtaHref(ev.ctaHref || '');
                        setImageUrl(ev.imageDataUrl || null);
                      }
                      console.log(e.id)
                    }}
                  >
                    <ListItemText
                      primary={e.title || '(untitled)'}
                      secondary={e.id}
                      primaryTypographyProps={{ color: '#fff' }}
                      secondaryTypographyProps={{ color: 'rgba(255,255,255,0.5)' }}
                    />
                  </ListItem>
                ))}
                {events.length === 0 && (
                  <div className="text-white/60 text-sm px-2 py-4">No events yet.</div>
                )}
              </List>
            )}
          </div>
        )}

        {canShowForm && (
          <>
            <div
              className="border border-dashed rounded-xl h-48 flex items-center justify-center relative hover:border-white/60 transition-colors cursor-pointer group"
              onClick={onPickClick}
              onDrop={onDrop}
              onDragOver={onDragOver}
              title="Click, drag & drop, or paste an image"
            >
              {!imageUrl ? (
                <div className="text-center text-white/70 px-4">
                  <div className="text-sm">Image Upload</div>
                  <div className="text-xs mt-1 opacity-80">Click, drag & drop, or paste</div>
                </div>
              ) : (
                <img src={imageUrl} alt="Preview" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
              )}
              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-white/10 pointer-events-none" />
              <input ref={inputRef} type="file" accept="image/*" onChange={onFileSelect} className="hidden" />
            </div>

            <LabeledInput label="Title" value={title} onChange={setTitle} placeholder="Enter title" />
            <LabeledInput label="Subheading" value={subheading} onChange={setSubheading} placeholder="Optional subheading" />
            <LabeledTextarea label="Description" value={description} onChange={setDescription} placeholder="Write a short description..." rows={3} />

            <div className="grid grid-cols-2 gap-2">
              <LabeledDate label="Start date" value={startDate} onChange={setStartDate} />
              <LabeledDate label="End date" value={endDate} onChange={setEndDate} min={startDate || undefined} />
            </div>
            <label className="block">
              <div className="text-sm mb-1 text-white/80">Start time</div>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
              />
            </label>
            {dateError && <div className="text-xs text-red-300">{dateError}</div>}

            <div className="grid grid-cols-2 gap-2">
              <LabeledInput label="CTA label" value={ctaLabel} onChange={setCtaLabel} placeholder="Learn More" />
              <LabeledInput label="CTA link" value={ctaHref} onChange={setCtaHref} placeholder="https://example.com" />
            </div>

            <div className="text-xs text-white/60"><div className="mt-1">{description.length} chars</div></div>

            <div className="flex gap-2 pt-2">
              <button onClick={onSave} className="px-3 py-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black font-medium">
                {tab === 0 || !eventId ? 'Create' : 'Update'}
              </button>
              <button onClick={resetAll} className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">
                Clear
              </button>
            </div>
          </>
        )}
      </div>

      {/* RIGHT: live website preview + modal overlay */}
      <div className="md:w-[70%] h-[90%] md:overflow-scroll custom-scrollbar md:overflow-auto text-white shadow-xl rounded-xl bg-[#212e3f] gap-4 p-3 md:p-5">
        <div className="mb-2 text-sm text-white/60">Live preview from website</div>
        <div className="relative w-full h-[720px] md:h-full border border-white/10 bg-white rounded-xl overflow-hidden">
          <iframe ref={previewRef} src="/" title="Website Live Preview" className="absolute inset-0 w-full h-full" />
          <EventModalOverlay
            container="contained"
            open={modalOpen}
            onClose={() => setDismissed(true)}
            imageUrl={imageUrl || undefined}
            title={title || ''}
            subheading={subheading}
            description={description}
            dateRange={formatDateRange(startDate, endDate)}
            timeText={to12h(startTime)}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
          />
        </div>

        <div className="mt-3 flex justify-between items-center border-t border-white/10 pt-3">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={publishModal} onChange={(e) => setPublishModal(e.target.checked)} />
            <span>Publish event popup (preview)</span>
          </label>
          {/* <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={forceOpen} onChange={(e) => setForceOpen(e.target.checked)} />
            <span>Force open in preview (ignore dates)</span>
          </label> */}
        </div>
      </div>
    </div>
  );
}

/* ---------------- helpers & small inputs ---------------- */

function LabeledInput({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30" />
    </label>
  );
}
function LabeledTextarea({ label, value, onChange, placeholder, rows = 5 }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30 resize-y" />
    </label>
  );
}
function LabeledDate({ label, value, onChange, min, max }: { label: string; value: string; onChange: (v: string) => void; min?: string; max?: string }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <input type="date" value={value} min={min} max={max} onChange={(e) => onChange(e.target.value)} className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30" />
    </label>
  );
}
function shouldShowModal({
  publishModal,
  forceOpen,
  startDate,
  endDate,
}: {
  publishModal: boolean;
  forceOpen: boolean;
  startDate?: string;
  endDate?: string;
}) {
  if (!publishModal) return false;
  if (forceOpen) return true;
  const now = new Date();
  const s = startDate ? startOfDay(new Date(startDate)) : new Date(0);
  const e = endDate ? endOfDay(new Date(endDate)) : new Date(8640000000000000);
  return now >= s && now <= e;
}

/* date/time utilities */
function startOfDay(d: Date) { const x = new Date(d); x.setHours(0,0,0,0); return x; }
function endOfDay(d: Date)   { const x = new Date(d); x.setHours(23,59,59,999); return x; }
function formatDateRange(start?: string, end?: string) {
  if (!start && !end) return '';
  if (start && !end) return pretty(start);
  if (!start && end) return pretty(end);
  const sd = new Date(start!); const ed = new Date(end!);
  if (isNaN(sd.getTime()) || isNaN(ed.getTime())) return '';
  const sameMonth = sd.getFullYear() === ed.getFullYear() && sd.getMonth() === ed.getMonth();
  if (sameMonth) {
    const m = sd.toLocaleString(undefined, { month: 'short' });
    return `${m} ${sd.getDate()}–${ed.getDate()}, ${sd.getFullYear()}`;
  }
  return `${pretty(start!)} – ${pretty(end!)}`;
}
function pretty(s: string) {
  const d = new Date(s); if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}
function to12h(t?: string) {
  if (!t) return '';
  const [h, m] = t.split(':').map(Number);
  const d = new Date(); d.setHours(h ?? 0, m ?? 0, 0, 0);
  return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
