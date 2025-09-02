
interface ImageDropzoneProps {
  imageUrl?: string | null;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onPickClick: () => void;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export type EventType = {
  id: string;
  title?: string;
  subheading?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
  start_time?: string;
  cta_label?: string;
  cta_href?: string;
  image_url?: string;
  image_path?: string;
  order?: number;
  [key: string]: unknown;
};

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  imageUrl,
  onFileSelect,
  onDrop,
  onDragOver,
  onPickClick,
  inputRef
}) => {
  return (
    <div
      className="border border-dashed rounded-xl h-32 flex items-center justify-center relative hover:border-white/60 transition-colors cursor-pointer group"
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
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt="Preview"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      )}
      <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-white/10 pointer-events-none" />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onFileSelect}
        className="hidden"
      />
    </div>
  );
};

export async function fetchEvents({ setEvents, setLoadingEvents }: { setEvents: (events: EventType[]) => void; setLoadingEvents: (loading: boolean) => void; }) {
  setLoadingEvents(true);
  try {
    const res = await fetch('/api/events', { cache: 'no-store' });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error || 'Failed to load events');
    const items = (data.items || []).sort(
    (a: EventType, b: EventType) => (a.order ?? 0) - (b.order ?? 0)
  );
    setEvents(items);
  } catch (e) {
    console.error(e);
  } finally {
    setLoadingEvents(false);
  }
}


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
