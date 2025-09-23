/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from "@/app/providers/UserProviders";
import { Hotspots, UpdateDraft } from '@/app/components/helpersAndInputs';
import SnackbarComponent, {SnackbarSettings} from '@/app/components/Snackbar';

type Props = {
  /** Optional: pass hotspot if you already have it */
  initial?: UpdateDraft;
  /** Optional: pass id if you want to skip reading from search params */
  hotspotId?: string;
  /** Optional callbacks */
  onSaved?: (h: Hotspots) => void;
  onCancel?: () => void;
  onChange?: (h: UpdateDraft) => void;
};

export default function UpdateHotspotPage({ initial, hotspotId, onSaved, onCancel, onChange }: Props) {
  const router = useRouter();
  const search = useSearchParams();
  const idFromQuery = search.get('id') || undefined;
  const id = hotspotId ?? initial?.id ?? idFromQuery;

  const { profile } = useUser();

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [snackbarSettings, setSnackbarSettings] = useState<SnackbarSettings>({
        open: false,
        message: '',
        severity: '',
      });

  const [draft, setDraft] = useState<UpdateDraft>(
    initial ?? {
      id: '',
      name: '',
      description: null,
      scene: '',
      ath: null,
      atv: null,
      image_url: null,
    }
  );

  const [file, setFile] = useState<File | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(initial?.image_url ?? null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (initial) setDraft(initial);
  }, [initial]);

  function updateField<K extends keyof UpdateDraft>(key: K, value: UpdateDraft[K]) {
    const updated = { ...draft, [key]: value };
    setDraft(updated);
    onChange?.(updated);
  }

  // fetch if no initial but have id
  useEffect(() => {
    if (initial || !id) return;
    (async () => {
      try {
        setBusy(true);
        setError(null);
        const res = await fetch('/api/hotspots?limit=1000', { cache: 'no-store' });
        const data: unknown = await res.json();
        if (!res.ok) throw new Error((data as { error?: string })?.error || 'Failed to load hotspot');
        const items = (data as { items?: Hotspots[] })?.items ?? [];
        const one = items.find(h => h.id === id);
        if (!one) throw new Error('Hotspot not found');

        const fetched: UpdateDraft = {
          id: one.id,
          name: one.name ?? '',
          description: one.description ?? null,
          scene: one.scene ?? '',
          ath: one.ath ?? null,
          atv: one.atv ?? null,
          image_url: one.image_url ?? null,
        };
        setDraft(fetched);
        setCurrentImageUrl(one.image_url ?? null);
        onChange?.(fetched);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : 'Failed to load hotspot');
      } finally {
        setBusy(false);
      }
    })();
  }, [id, initial, onChange]);

  const previewUrl = useMemo(() => {
    if (file) return URL.createObjectURL(file);
    return currentImageUrl;
  }, [file, currentImageUrl]);

  useEffect(() => {
    return () => {
      if (file && previewUrl && previewUrl.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
    };
  }, [file, previewUrl]);

  function onPickFile() {
    fileInputRef.current?.click();
  }

  function onFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }
    setError(null);
    setFile(f);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    if (!f.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }
    setError(null);
    setFile(f);
  }

  async function handleUpdate() {
    if (!id) {
      setError('Missing hotspot id.');
      return;
    }
    if (!draft.name.trim()) {
      setError('Name is required.');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append('name', draft.name.trim());
      if (draft.scene?.trim()) fd.append('scene', draft.scene.trim());
      if (draft.description?.trim()) fd.append('description', draft.description.trim());
      if (draft.ath != null) fd.append('ath', String(draft.ath));
      if (draft.atv != null) fd.append('atv', String(draft.atv));
      if (file) fd.append('file', file);

      const res = await fetch(`/api/admin/hotspots/${id}`, { method: 'PATCH', body: fd });
      const data: unknown = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSnackbarSettings((prev) => ({...prev,
                open: true,
                message: 'Update Failed',
                severity: 'error'
            }))
        throw new Error((data as { error?: string })?.error || 'Update failed')
      }

      const updated = (data as { item?: Hotspots })?.item;
      if (updated) {
        setSnackbarSettings((prev) => ({...prev,
              open: true,
              message: 'Update Successful',
              severity: 'success'
          }))
        setCurrentImageUrl(updated.image_url ?? currentImageUrl);
      }

      try { router.refresh(); } catch { /* noop */ }
    } catch (e: unknown) {
      setSnackbarSettings((prev) => ({...prev,
                open: true,
                message: 'Update Failed',
                severity: 'error'
            }))
      setError(e instanceof Error ? e.message : 'Update failed');
    } finally {
      setBusy(false);
    }
  }

  function handleCancel() {
    if (onCancel) onCancel();
    else router.back();
  }

  return (
    <div className="mt-4 space-y-4 text-white">
      <div className={`grid grid-cols-1 gap-3 ${profile?.role === 'super-admin' && 'md:grid-cols-2'}`}>
        <label className="block">
          <div className="mb-1 text-sm text-white/80">Name</div>
          <input
            type="text"
            value={draft.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            placeholder="e.g., Lobby"
            disabled={busy}
          />
        </label>

        {profile?.role === 'super-admin' && (
          <>
            <label className="block">
              <div className="mb-1 text-sm text-white/80">Scene (optional)</div>
              <input
                type="text"
                value={draft.scene}
                onChange={(e) => updateField("scene", e.target.value)}
                className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                placeholder="e.g., scene_lobby"
                disabled={busy}
              />
            </label>

            <label className="block">
              <div className="mb-1 text-sm text-white/80">ath (°)</div>
              <input
                type="number"
                value={draft.ath ?? 0}
                onChange={(e) => updateField("ath", parseFloat(e.target.value))}
                step="0.1"
                min={-180}
                max={180}
                className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                placeholder="e.g., 0"
                disabled={busy}
              />
            </label>

            <label className="block">
              <div className="mb-1 text-sm text-white/80">atv (°)</div>
              <input
                type="number"
                value={draft.atv ?? 0}
                onChange={(e) => updateField("atv", parseFloat(e.target.value))}
                step="0.1"
                min={-90}
                max={90}
                className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                placeholder="e.g., 0"
                disabled={busy}
              />
            </label>
          </>
        )}
      </div>

      <label className="block">
        <div className="mb-1 text-sm text-white/80">Description</div>
        <textarea
          value={draft.description ?? ''}
          onChange={(e) => updateField("description", e.target.value)}
          rows={3}
          className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
          placeholder="Optional details…"
          disabled={busy}
        />
      </label>

      <div
        className="rounded-xl border border-dashed border-white/15 bg-[#131a2a] p-3"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm text-white/80">Hotspot image (optional)</div>
            <div className="text-xs text-white/50">PNG / JPG / WEBP / GIF</div>
          </div>
        </div>

        <div className="mt-3 flex gap-3">
          <button
            type="button"
            onClick={onPickFile}
            disabled={busy}
            className="rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 disabled:opacity-50"
          >
            Browse…
          </button>
          {currentImageUrl && !file ? (
            <span className="text-xs text-white/60 truncate">Current: {currentImageUrl}</span>
          ) : null}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onFileSelect}
          className="hidden"
        />

        {previewUrl ? (
          <div className="mt-3 relative aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={previewUrl}
              alt="Preview"
              className="h-full w-full object-contain bg-black/20"
            />
          </div>
        ) : (
          <div className="mt-3 flex h-28 items-center justify-center rounded-lg bg-black/20 text-xs text-white/50">
            No image selected
          </div>
        )}
      </div>

      {error && <div className="text-xs text-red-300">{error}</div>}

      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={handleCancel}
          disabled={busy}
          className="rounded-lg px-3 py-2 text-sm bg-white/10 hover:bg-white/20 disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleUpdate}
          disabled={busy || !draft.name.trim() || !id}
          className="rounded-lg px-3 py-2 text-sm font-medium text-black bg-green-400 hover:bg-green-500 disabled:opacity-50"
        >
          {busy ? 'Saving…' : 'Update'}
        </button>
      </div>
      <SnackbarComponent snackbarSettings={snackbarSettings} setSnackbarSettings={setSnackbarSettings}/>
    </div>
  );
}
