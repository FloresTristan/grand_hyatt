/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef, useState } from 'react';
import EventModalOverlay from '@/app/components/EventModalOverlay';

export default function CMSPage() {
  // Base content
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Schedule/time
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState(''); // "HH:mm"

  // Modal controls (preview/editor only)
  const [publishModal, setPublishModal] = useState(true);
  const [forceOpen, setForceOpen] = useState(true);
  const [ctaLabel, setCtaLabel] = useState('LEARN MORE');
  const [ctaHref, setCtaHref] = useState('');

  const DRAFT_KEY = 'cmsDraft_v1';
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previewRef = useRef<HTMLIFrameElement | null>(null);

  /** Load once from localStorage */
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
      setCtaLabel(s.ctaLabel || 'LEARN MORE');
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
    setCtaLabel('LEARN MORE'); setCtaHref('');
    setImageFile(null); setImageUrl(null);
    localStorage.removeItem(DRAFT_KEY);
  }

  async function onSave() {
    alert('no api yet');
  }

  const dateError =
    startDate && endDate && new Date(endDate) < new Date(startDate)
      ? 'End date cannot be before start date.'
      : '';

  const modalOpen = shouldShowModal({ publishModal, forceOpen, startDate, endDate });

  return (
    <div className="font-sans flex flex-col gap-4 md:flex-row min-h-screen p-8 pb-20 md:gap-8 sm:px-20 bg-[#151c2f]">
      {/* LEFT: editor */}
      <div className="md:w-[30%] text-white h-[50%] overflow-scroll md:overflow-auto shadow-xl rounded-xl bg-[#212e3f] p-3 md:p-5 space-y-4">
        {/* Image upload */}
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

        {/* Text fields */}
        <LabeledInput label="Title" value={title} onChange={setTitle} placeholder="Enter title" />
        <LabeledInput label="Subheading" value={subheading} onChange={setSubheading} placeholder="Optional subheading" />
        <LabeledTextarea label="Description" value={description} onChange={setDescription} placeholder="Write a short description..." rows={6} />

        {/* Dates/time */}
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


        {/* CTA */}
        <div className="grid grid-cols-2 gap-2">
          <LabeledInput label="CTA label" value={ctaLabel} onChange={setCtaLabel} placeholder="LEARN MORE" />
          <LabeledInput label="CTA link" value={ctaHref} onChange={setCtaHref} placeholder="https://example.com" />
        </div>

        {/* footer */}
        <div className="text-xs text-white/60"><div className="mt-1">{description.length} chars</div></div>
        <div className="flex gap-2 pt-2">
          <button onClick={onSave} className="px-3 py-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black font-medium">Save</button>
          <button onClick={resetAll} className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">Reset</button>
        </div>
      </div>

      {/* RIGHT: website preview + overlay */}
      <div className="md:w-[70%] h-[50%] overflow-scroll md:overflow-auto text-white shadow-xl rounded-xl bg-[#212e3f] gap-4 p-3 md:p-5">
        <div className="mb-2 text-sm text-white/60">Live preview from website</div>

        <div className="relative w-full h-[720px] rounded-xl border border-white/10 bg-white">
          {/* Actual site */}
          <iframe ref={previewRef} src="/" title="Website Live Preview" className="absolute inset-0 w-full h-full rounded-xl" />
          <EventModalOverlay
            container="contained"
            open={modalOpen}
            onClose={() => setForceOpen(false)}
            imageUrl={imageUrl || undefined}
            title={title || 'Event Title'}
            description={description}
            dateRange={formatDateRange(startDate, endDate)}
            timeText={to12h(startTime)}
            ctaLabel={ctaLabel}
            ctaHref={ctaHref}
          />
        </div>
      {/* Toggles */}
        <div className="mt-3 flex justify-around space-y-2 border-t border-white/10 pt-3">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={publishModal} onChange={(e) => setPublishModal(e.target.checked)} />
            <span>Publish event popup (preview)</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={forceOpen} onChange={(e) => setForceOpen(e.target.checked)} />
            <span>Force open in preview (ignore dates)</span>
          </label>
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
