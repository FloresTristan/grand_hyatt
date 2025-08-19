/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useRef, useState } from 'react';

export default function CMSPage() {
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(''); // YYYY-MM-DD
  const [endDate, setEndDate] = useState('');     // YYYY-MM-DD
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const DRAFT_KEY = 'cmsDraft_v1';
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previewRef = useRef<HTMLIFrameElement | null>(null);

  // Load once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        setTitle(saved.title || '');
        setSubheading(saved.subheading || '');
        setDescription(saved.description || '');
        setStartDate(saved.startDate || '');
        setEndDate(saved.endDate || '');
        if (saved.imageDataUrl) setImageUrl(saved.imageDataUrl);
      }
    } catch {}
  }, []);

  // Autosave to localStorage (and normalize image to dataURL)
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
          JSON.stringify({ title, subheading, description, startDate, endDate, imageDataUrl })
        );
      } catch {}
    }, 300);
    return () => clearTimeout(id);
  }, [title, subheading, description, startDate, endDate, imageFile, imageUrl]);

  // Live update → postMessage to preview iframe
  useEffect(() => {
    const id = setTimeout(() => {
      // Prefer data URL for cross-frame reliability
      let imageDataUrl: string | null = imageUrl && imageUrl.startsWith('data:') ? imageUrl : null;
      if (!imageDataUrl) {
        try {
          const raw = localStorage.getItem(DRAFT_KEY);
          imageDataUrl = raw ? JSON.parse(raw).imageDataUrl ?? null : null;
        } catch {}
      }

      const payload = { title, subheading, description, startDate, endDate, imageDataUrl };
      previewRef.current?.contentWindow?.postMessage(
        { type: 'cms:update', payload },
        window.location.origin
      );
    }, 120);
    return () => clearTimeout(id);
  }, [title, subheading, description, startDate, endDate, imageUrl]);

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
      const item = Array.from(e.clipboardData.items).find(i => i.type.startsWith('image/'));
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
    setStartDate(''); setEndDate('');
    setImageFile(null); setImageUrl(null);
    localStorage.removeItem(DRAFT_KEY);
  }

  async function onSave() {
    alert('no api yet');
    // Example later:
    // await fetch('/api/cms', { method: 'POST', body: JSON.stringify({ title, subheading, description, startDate, endDate, imageDataUrl }) })
  }

  const dateError =
    startDate && endDate && new Date(endDate) < new Date(startDate)
      ? 'End date cannot be before start date.'
      : '';

  return (
    <div className="font-sans grid gap-4 md:flex min-h-screen p-8 pb-20 md:gap-8 sm:p-20 bg-[#151c2f]">
      {/* editor */}
      <div className="md:w-[30%] text-white shadow-xl rounded-xl bg-[#212e3f] p-3 md:p-5 space-y-4">
        {/* image upload */}
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
            <img
              src={imageUrl}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          )}
          <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-white/10 pointer-events-none" />
          <input ref={inputRef} type="file" accept="image/*" onChange={onFileSelect} className="hidden" />
        </div>

        {/* text  */}
        <LabeledInput label="Title" value={title} onChange={setTitle} placeholder="Enter title" />
        <LabeledInput label="Subheading" value={subheading} onChange={setSubheading} placeholder="Optional subheading" />
        <LabeledTextarea label="Description" value={description} onChange={setDescription} placeholder="Write a short description..." rows={6} />

        {/* dates */}
        <div className="grid grid-cols-2 gap-2">
          <LabeledDate label="Start date" value={startDate} onChange={setStartDate} />
          <LabeledDate label="End date" value={endDate} onChange={setEndDate} min={startDate || undefined} />
        </div>
        {dateError && <div className="text-xs text-red-300">{dateError}</div>}

        <div className="text-xs text-white/60">
          <div className="mt-1">{description.length} chars</div>
        </div>

        <div className="flex gap-2 pt-2">
          <button onClick={onSave} className="px-3 py-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black font-medium">
            Save
          </button>
          <button onClick={resetAll} className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">
            Reset
          </button>
        </div>
      </div>

      <div className="md:w-[70%] text-white shadow-xl rounded-xl bg-[#212e3f] gap-4 p-3 md:p-5">
        <div className="mb-2 text-sm text-white/60">Live preview from website</div>
        <iframe
          ref={previewRef}
          src="/"
          title="Website Live Preview"
          className="w-full h-[720px] rounded-xl border border-white/10 bg-white"
        />
      </div>
    </div>
  );
}


function LabeledInput({
  label, value, onChange, placeholder
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
      />
    </label>
  );
}

function LabeledTextarea({
  label, value, onChange, placeholder, rows = 5
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30 resize-y"
      />
    </label>
  );
}

function LabeledDate({
  label, value, onChange, min, max
}: { label: string; value: string; onChange: (v: string) => void; min?: string; max?: string }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <input
        type="date"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
      />
    </label>
  );
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
