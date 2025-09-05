'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ScheduleIcon from '@mui/icons-material/Schedule';


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

  useEffect(() => {
    setIndex(Math.min(Math.max(initialIndex, 0), Math.max(0, (events?.length ?? 1) - 1)));
  }, [events, initialIndex, open]);

  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
  const z   = container === 'contained' ? 'z-10' : 'z-[9999]';
  const current = events[index];

  const prev = () => setIndex((i) => (i - 1 + events.length) % events.length);
  const next = () => setIndex((i) => (i + 1) % events.length);

  return (
    <div className={`${pos} inset-0 ${z} flex items-center justify-center`} role="dialog" aria-modal="true">
      <div className={`${pos} inset-0 bg-black/60 backdrop-blur-[1px]`} onClick={onClose} />

      <div className="relative z-10 w-full max-w-[290px] md:max-w-[560px] rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg cursor-pointer ring-4 ring-white"
        >
          ×
        </button>

        {events.length > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-2 top-1/2 z-[50] -translate-y-1/2 rounded-full bg-black/30 text-white h-8 w-8 grid place-items-center hover:bg-black/40"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-2 top-1/2 z-[50] -translate-y-1/2 rounded-full bg-black/30 text-white h-8 w-8 grid place-items-center hover:bg-black/40"
            >
              ›
            </button>
          </>
        )}

        <div className="px-5 pb-5 pt-6">
          {current?.imageUrl && (
            <div className="relative mx-auto mb-4 h-32 w-full overflow-hidden rounded-xl sm:h-36">
              <Image
                src={current.imageUrl}
                alt={current.title || ''}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 560px"
                priority
              />
            </div>
          )}

          <h2 className="text-center text-neutral-600 text-3xl font-semibold tracking-tight whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">
            {current?.title}
          </h2>

          {!!current?.subheading && (
            <p className="mt-1 text-center text-sm text-neutral-600 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">
              {current?.subheading}
            </p>
          )}

          {(current?.dateRange || current?.timeText) && (
            <div className="mt-2 flex items-center justify-center gap-5 text-sm text-neutral-700">
              {current?.dateRange && (
                <span className="inline-flex items-center gap-1.5">
                  <DateRangeIcon sx={{ fontSize: 20 }}/>
                  {/* <span className="inline-block h-5 w-5 rounded-[4px] border border-neutral-400" /> */}
                  {current?.dateRange}
                </span>
              )}
              {current?.timeText && (
                <span className="inline-flex items-center gap-1.5">
                  <ScheduleIcon sx={{ fontSize: 20 }}/>
                  {/* <span className="inline-block h-5 w-5 rounded-full border border-neutral-400" /> */}
                  {current?.timeText}
                </span>
              )}
            </div>
          )}

          {!!current?.description && (
            <div className="mt-4 max-h-56 overflow-y-auto">
              <p className="text-sm leading-relaxed text-neutral-800 whitespace-pre-wrap break-words [overflow-wrap:anywhere] hyphens-auto">
                {current?.description}
              </p>
            </div>
          )}

          {(current?.ctaLabel || current?.ctaHref) && (
            <div className="mt-6 flex justify-center">
              {current?.ctaHref ? (
                <a
                  href={current?.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 hover:shadow-2xl duration-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow hover:opacity-95"
                >
                  {current?.ctaLabel ?? 'Learn more'}
                </a>
              ) : (
                <button className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 hover:shadow-2xl duration-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow hover:opacity-95" >
                  {current?.ctaLabel ?? 'Learn more'}
                </button>
              )}
            </div>
          )}
          
          <div className='flex justify-center'>
            <div className='items-center w-[25%] md:w-[15%]'>
              {events.length > 1 && (
                <div className="mt-4 w-full max-w-md mx-auto  overflow-x-scroll custom-scrollbar">
                  <div className="flex items-center gap-3 px-2">
                    {events.map((_, i) => {
                      const isActive = i === index;
                      return (
                        <button
                          key={i}
                          ref={(el) => {
                            dotRefs.current[i] = el;
                          }}
                          aria-label={`Go to slide ${i + 1}`}
                          aria-current={isActive ? 'true' : undefined}
                          onClick={() => setIndex(i)}
                          className={`
                            h-2 md:h-3 w-2 md:w-3 rounded-full transition-all duration-300
                            flex-shrink-0 focus:outline-none
                            ${isActive ? 'bg-neutral-900' : 'border-neutral-300 bg-neutral-200 hover:bg-neutral-400'}
                          `}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
