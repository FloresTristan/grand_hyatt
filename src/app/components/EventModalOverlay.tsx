'use client';

type Props = {
  open: boolean;
  onClose: () => void;

  imageUrl?: string;
  title: string;
  description?: string;
  dateRange?: string;  // e.g. "Aug 28–30, 2025"
  timeText?: string;   // e.g. "4:00 AM"

  ctaLabel?: string;
  ctaHref?: string;

  /** Where to position the overlay. "contained" = absolute overlay (use inside a relative wrapper). "fullscreen" = fixed to viewport. */
  container?: 'contained' | 'fullscreen';
};

export default function EventModalOverlay({
  open,
  onClose,
  imageUrl,
  title,
  description,
  dateRange,
  timeText,
  ctaLabel = 'LEARN MORE',
  ctaHref,
  container = 'contained',
}: Props) {
  if (!open) return null;

  const pos = container === 'contained' ? 'absolute' : 'fixed';
  const z   = container === 'contained' ? 'z-10' : 'z-[9999]';

  return (
    <div className={`${pos} inset-0 ${z} flex items-center justify-center`}>
      {/* Backdrop */}
      <div className={`${pos} inset-0 bg-black/60 backdrop-blur-[1px]`} />

      {/* Card */}
      <div className="relative z-10 w-full max-w-[560px] rounded-2xl bg-white shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-4 ring-white"
        >
          ×
        </button>

        <div className="px-5 pb-5 pt-6">
          {/* Banner image */}
          {imageUrl && (
            <div className="mx-auto mb-4 h-32 w-full overflow-hidden rounded-xl sm:h-36">
              {/* <img> keeps things simple inside iframes */}
              <img src={imageUrl} alt="" className="h-full w-full object-cover" />
            </div>
          )}

          {/* Title */}
          <h2 className="text-center text-3xl font-semibold tracking-tight">{title}</h2>

          {/* Meta row */}
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

          {/* Body */}
          {!!description && (
            <p className="mt-4 text-sm leading-relaxed text-neutral-800 whitespace-pre-wrap">
              {description}
            </p>
          )}

          {/* CTA */}
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

          {/* Dots (static sample) */}
          {/* <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-900" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
