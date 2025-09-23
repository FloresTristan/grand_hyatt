"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Hotspots } from "@/app/components/helpersAndInputs";
import { ImageLightbox } from "@/app/components/Lightbox";

type HotspotModalOverlayProps = {
  open: boolean;
  onClose: () => void;
  hotspot: Hotspots | null;
  container: string
};

export default function HotspotModalOverlay({
  open,
  onClose,
  hotspot,
  container = 'contained'
}: HotspotModalOverlayProps) {
  const [busy, setBusy] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!open) {
      setBusy(false);
    }
  }, [open]);

  if (!hotspot) return null;
  if (!open) return null;

  console.log({hotspot})


  const pos = container === 'contained' ? 'absolute' : 'fixed';
  const z   = container === 'contained' ? 'z-10' : 'z-[50]';

  return (
    <div id="hotspotModal" className={`${pos} inset-0 ${z} flex items-center justify-center`} role="dialog" aria-modal="true">
      <div className={`${pos} inset-0 bg-black/60 backdrop-blur-[1px]`} onClick={onClose} />

      <div className="relative z-10 w-full max-w-[290px] md:max-w-[560px] rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg cursor-pointer ring-4 ring-white"
        >
          ×
        </button>

        <div className="px-5 pb-5 pt-6">
          {hotspot?.image_url && (
            <div className={`relative mx-auto mb-4 h-32 w-full overflow-hidden rounded-xl  ${container === 'fullscreen'? 'md:h-60' : 'md:h-32' }`}>
              <Image
                src={hotspot.image_url}
                alt={hotspot.name || ''}
                fill
                unoptimized
                className="object-contain object-center bg-black/50 cursor-zoom-in
                  hover:scale-[1.02] transition-transform duration-300 hover:opacity-70 hover:duration-500"
                sizes="(max-width: 640px) 100vw, 560px"
                priority
                onClick={() => setLightboxOpen(true)}
              />
              <ImageLightbox
                open={lightboxOpen}
                src={hotspot.image_url || ''}
                alt={hotspot.name || ''}
                imageRef={imageRef}
                onClose={() => setLightboxOpen(false)}
              />
            </div>
          )}

          <h2 className="text-center text-neutral-600 text-3xl font-semibold tracking-tight whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">
            {hotspot?.name}
          </h2>

          {!!hotspot?.description && (
            <div className="mt-4 max-h-56 overflow-y-auto">
              <p className="text-sm leading-relaxed text-neutral-800 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">
                {hotspot?.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
