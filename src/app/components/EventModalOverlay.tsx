'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {ImageLightbox} from './Lightbox';


export type EventItem = {
  imageUrl?: string;
  title: string;
  subheading?: string;
  description?: string;
  dateRange?: string;
  timeText?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  events: EventItem[];
  container?: 'contained' | 'fullscreen';
  initialIndex?: number;
};

export default function EventModalOverlay({
  open,
  onClose,
  events,
  container = 'contained',
  initialIndex = 0,
}: Props) {
  const [index, setIndex] = useState(() =>
    Math.min(Math.max(initialIndex, 0), Math.max(0, (events?.length ?? 1) - 1))
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setIndex(Math.min(Math.max(initialIndex, 0), Math.max(0, (events?.length ?? 1) - 1)));
  }, [events, initialIndex, open]);

  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const activeDot = dotRefs.current[index];
    if (activeDot) {
      activeDot.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [index]);

  useEffect(() => {
    function onClickOutsideImage(e: MouseEvent) {
      if (e.target === imageRef.current) {
        setLightboxOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutsideImage);
    return () => document.removeEventListener('mousedown', onClickOutsideImage);
  }, []);

  useEffect(() => {
    if (!open || (events?.length ?? 0) < 1) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + events.length) % events.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % events.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, events, onClose]);

  const hasEvents = (events?.length ?? 0) > 0;
  if (!open || !hasEvents) return null;

  const pos = container === 'contained' ? 'absolute' : 'fixed';
  const z   = container === 'contained' ? 'z-10' : 'z-[50]';
  const current = events[index];

  const prev = () => setIndex((i) => (i - 1 + events.length) % events.length);
  const next = () => setIndex((i) => (i + 1) % events.length);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only trigger swipe if horizontal movement dominates and exceeds threshold
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) next();
      else prev();
    }
  }

  return (
    /* Outer overlay: scrollable so tall content on small screens isn't clipped */
    <div
      className={`${pos} inset-0 ${z} flex items-start sm:items-center justify-center overflow-y-auto p-4 sm:p-6`}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className={`${pos} inset-0 bg-black/60 backdrop-blur-[1px]`} onClick={onClose} />

      {/* Card — my-auto so it centres when shorter than scroll container */}
      <div
        className="relative z-10 w-full max-w-[400px] md:max-w-[560px] my-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button — inside card to always stay in viewport */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="btn-press absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg cursor-pointer ring-4 ring-white text-2xl leading-none"
        >
          ×
        </button>

        {events.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className="btn-press absolute left-2 top-1/2 z-[50] -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white h-10 w-10 grid place-items-center text-2xl shadow"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className="btn-press absolute right-2 top-1/2 z-[50] -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white h-10 w-10 grid place-items-center text-2xl shadow"
            >
              ›
            </button>
          </>
        )}

        <div className="px-5 pb-5 pt-6">
          {current?.imageUrl && (
            <div className="relative mx-auto mb-4 h-44 sm:h-52 md:h-60 w-full overflow-hidden rounded-xl border-black/10">
              <Image
                src={current.imageUrl}
                alt={current.title || ''}
                fill
                unoptimized
                className="object-contain object-center bg-white cursor-zoom-in hover:scale-[1.02] transition-transform duration-300 hover:opacity-70 hover:duration-500"
                priority
                onClick={() => setLightboxOpen(true)}
              />
              <ImageLightbox
                open={lightboxOpen}
                src={current.imageUrl || ''}
                alt={current.title || ''}
                imageRef={imageRef}
                onClose={() => setLightboxOpen(false)}
              />
            </div>
          )}

          <h2 className="text-center text-neutral-600 text-2xl sm:text-3xl font-semibold tracking-tight whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">
            {current?.title}
          </h2>

          {!!current?.subheading && (
            <p className="mt-1 text-center text-sm text-neutral-600 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">
              {current?.subheading}
            </p>
          )}

          {(current?.dateRange || current?.timeText) && (
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-sm text-neutral-700">
              {current?.dateRange && (
                <span className="inline-flex items-center gap-1.5">
                  <DateRangeIcon sx={{ fontSize: 18 }}/>
                  {current?.dateRange}
                </span>
              )}
              {current?.timeText && (
                <span className="inline-flex items-center gap-1.5">
                  <ScheduleIcon sx={{ fontSize: 18 }}/>
                  {current?.timeText}
                </span>
              )}
            </div>
          )}

          {!!current?.description && (
            <div className="mt-4 max-h-36 sm:max-h-56 overflow-y-auto custom-scrollbar">
              <p className="text-sm leading-relaxed text-neutral-800 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">
                {current?.description}
              </p>
            </div>
          )}

          {(current?.ctaLabel || current?.ctaHref) && (
            <div className="mt-5 flex justify-center">
              {current?.ctaHref ? (
                <a
                  href={current?.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-press inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-red-600 hover:bg-red-500 hover:shadow-2xl transition-all duration-200 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-md"
                >
                  {current?.ctaLabel ?? 'Learn more'}
                </a>
              ) : (
                <button type="button" className="btn-press inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-red-600 hover:bg-red-500 hover:shadow-2xl transition-all duration-200 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-md">
                  {current?.ctaLabel ?? 'Learn more'}
                </button>
              )}
            </div>
          )}

          {events.length > 1 && (
            <div className="mt-3 flex justify-center">
              <div className="overflow-x-auto custom-scrollbar max-w-[80%] sm:max-w-[60%]">
                <div className="flex items-center px-1">
                  {events.map((_, i) => {
                    const isActive = i === index;
                    return (
                      <button
                        type="button"
                        key={i}
                        ref={(el) => { dotRefs.current[i] = el; }}
                        aria-label={`Go to slide ${i + 1}`}
                        aria-current={isActive ? 'true' : undefined}
                        onClick={() => setIndex(i)}
                        className="btn-press flex-shrink-0 flex items-center justify-center h-8 w-8 focus:outline-none"
                      >
                        <span className={`
                          block rounded-full transition-all duration-300
                          ${isActive
                            ? 'h-3 w-3 bg-neutral-900'
                            : 'h-2.5 w-2.5 bg-neutral-300 hover:bg-neutral-500'}
                        `} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
