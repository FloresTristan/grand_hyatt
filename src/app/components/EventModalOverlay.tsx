'use client';

import Image from 'next/image';

type Props = {
  open: boolean;
  onClose: () => void;

  imageUrl?: string;
  title: string;
  subheading?: string;     
  description?: string;
  dateRange?: string;
  timeText?: string;

  ctaLabel?: string;
  ctaHref?: string;

  container?: 'contained' | 'fullscreen';
};

export default function EventModalOverlay({
  open,
  onClose,
  imageUrl,
  title,
  subheading,         
  description,
  dateRange,
  timeText,
  ctaLabel,
  ctaHref,
  container = 'contained',
}: Props) {
  if (!open) return null;

  const pos = container === 'contained' ? 'absolute' : 'fixed';
  const z   = container === 'contained' ? 'z-10' : 'z-[9999]';

  return (
    <div className={`${pos} inset-0 ${z} flex items-center justify-center`}>
      <div className={`${pos} inset-0 bg-black/60 backdrop-blur-[1px]`}
        onClick={onClose}
      />  

      <div className="relative z-10 w-full max-w-[560px] rounded-2xl bg-white shadow-2xl"
        onClick={(e)=> e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-4 ring-white"
        >
          ×
        </button>

        <div className="px-5 pb-5 pt-6">
          {imageUrl && (
            <div className="relative mx-auto mb-4 h-32 w-full overflow-hidden rounded-xl sm:h-36">
              <Image
                src={imageUrl}
                alt=""
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 560px"
                priority
              />
            </div>
          )}

          {/* Title */}
          <h2 className="text-center text-neutral-600 text-3xl font-semibold tracking-tight whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">{title}</h2>

          {/* Subheading */}
          {!!subheading && (
            <p className="mt-1 text-center text-sm text-neutral-600 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">{subheading}</p>
          )}

          {(dateRange || timeText) && (
            <div className="mt-2 flex items-center justify-center gap-5 text-sm text-neutral-700">
              {dateRange && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-5 w-5 rounded-[4px] border border-neutral-400" />
                  {dateRange}
                </span>
              )}
              {timeText && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-5 w-5 rounded-full border border-neutral-400" />
                  {timeText}
                </span>
              )}
            </div>
          )}

          {!!description && (
            <div className="mt-4 max-h-56 overflow-y-auto">
              <p className="text-sm leading-relaxed text-neutral-800
                          whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">
                {description}
              </p>
            </div>
          )}

          {(ctaLabel || ctaHref) && (
            <div className="mt-6 flex justify-center">
              {ctaHref ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow hover:opacity-95"
                >
                  {ctaLabel}
                </a>
              ) : (
                <button className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow hover:opacity-95">
                  {ctaLabel}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
