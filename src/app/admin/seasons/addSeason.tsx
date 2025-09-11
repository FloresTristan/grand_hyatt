'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

type AddSeasonModalProps = {
  open: boolean;
  onClose: () => void;
  onCreate: (payload: { name: string; file: File | null }) => Promise<void> | void;
};

export default function AddSeasonModal({ open, onClose, onCreate }: AddSeasonModalProps) {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) {
      // reset when closing
      setName('');
      setFile(null);
      setBusy(false);
      setError(null);
    }
  }, [open]);

  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  function onPick() {
    inputRef.current?.click();
  }

  function onFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) {
      if (!f.type.startsWith('image/')) {
        setError('Please select an image file.');
        return;
      }
      setError(null);
      setFile(f);
    }
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith('image/')) {
      setError(null);
      setFile(f);
    }
  }

  async function handleCreate() {
    try {
      setError(null);
      if (!name.trim()) {
        setError('Please enter a season name.');
        return;
      }
      setBusy(true);
      await onCreate({ name: name.trim(), file });
      onClose();
    } catch (e: unknown) {
      setError(e instanceof Error? e?.message: 'Failed to create season.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <Dialog open={open} onClose={busy ? () => {} : onClose} className="relative z-[2000]">
      <DialogBackdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-2xl bg-[#212e3f] p-5 text-white shadow-xl ring-1 ring-white/10">
            <DialogTitle className="text-lg font-semibold">Add Season</DialogTitle>

            <div className="mt-4 space-y-4">
              <label className="block">
                <div className="mb-1 text-sm text-white/80">Season name</div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                  placeholder="e.g., Summer 2025"
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
                    <div className="text-sm text-white/80">Season image</div>
                    <div className="text-xs text-white/50">Drag & drop or pick a file (PNG/JPG)</div>
                  </div>
                  <button
                    type="button"
                    onClick={onPick}
                    disabled={busy}
                    className="rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20 disabled:opacity-50"
                  >
                    Browse…
                  </button>
                </div>

                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  onChange={onFileSelect}
                  className="hidden"
                />

                {previewUrl ? (
                  <div className="mt-3 relative aspect-video w-full overflow-hidden rounded-lg">
                    {/* preview keeps aspect without stretch */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
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
                  onClick={onClose}
                  disabled={busy}
                  className="rounded-lg px-3 py-2 text-sm bg-white/10 hover:bg-white/20 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreate}
                  disabled={busy || !name.trim()}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-black bg-green-400 hover:bg-green-500 disabled:opacity-50"
                >
                  {busy ? 'Saving…' : 'Create'}
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
