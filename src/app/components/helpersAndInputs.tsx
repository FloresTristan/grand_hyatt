export function LabeledInput({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30" />
    </label>
  );
}
export function LabeledTextarea({ label, value, onChange, placeholder, rows = 5 }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30 resize-y" />
    </label>
  );
}
export function LabeledDate({ label, value, onChange, min, max }: { label: string; value: string; onChange: (v: string) => void; min?: string; max?: string }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 text-white/80">{label}</div>
      <input style={{ colorScheme: 'dark' }} type="date" value={value} min={min} max={max} onChange={(e) => onChange(e.target.value)} className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30" />
    </label>
  );
}
export function shouldShowModal({
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

export function startOfDay(d: Date) { const x = new Date(d); x.setHours(0,0,0,0); return x; }
export function endOfDay(d: Date)   { const x = new Date(d); x.setHours(23,59,59,999); return x; }
export function formatDateRange(start?: string, end?: string) {
  if (!start && !end) return '';
  if (start && !end) return pretty(start);
  if (!start && end) return pretty(end);
  const sd = new Date(start!); 
  const ed = new Date(end!);
  if (isNaN(sd.getTime()) || isNaN(ed.getTime())) return '';
  const sameMonth = sd.getFullYear() === ed.getFullYear() && sd.getMonth() === ed.getMonth();
  if (sameMonth) {
    const m = sd.toLocaleString(undefined, { month: 'short' });
    return `${m} ${sd.getDate()}–${ed.getDate()}, ${sd.getFullYear()}`;
  }
  return `${pretty(start!)} – ${pretty(end!)}`;
}

export function pretty(s: string) {
  const d = new Date(s); 
  if (isNaN(d.getTime())) return '';

  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

export function to12h(t?: string) {
  if (!t) return '';
  const [h, m] = t.split(':').map(Number);
  const d = new Date(); d.setHours(h ?? 0, m ?? 0, 0, 0);
  return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
