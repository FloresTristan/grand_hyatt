/* eslint-disable @next/next/no-img-element */
"use client";

import dynamic from 'next/dynamic';
import EventModalOverlay from './components/EventModalOverlay';
import { fetchEventsForClient, EventType, formatDateRange, fetchSeasons, Season, formatTimeRange } from './components/helpersAndInputs';
import { useEffect, useState } from 'react';
import SeasonOverlay from './components/SeasonOverlay';

const KrpanoViewer = dynamic(() => import('./components/KrpanoViewer'), { ssr: false });

export default function Home() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(true);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState<Season>();

  useEffect(() => {
    fetchEventsForClient({ setEvents, setLoadingEvents });
    fetchSeasons({ setSeasons, setLoading });
    const isInIframe = window.self !== window.top;
    if (!isInIframe) {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    if (!seasons) return;
    const activeSeason = seasons.find((season) => season.is_active === true);
    setSelectedSeason(activeSeason);
  }, [seasons]);

  const onClose = () => setOpen(false);
  const frameSrc = selectedSeason?.gif_url ?? null;

  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {showModal && frameSrc && (
        <div className="pointer-events-none absolute inset-0 z-20">
          <SeasonOverlay show={true} frameSrc={frameSrc} />
        </div>
      )}

      <KrpanoViewer xml="/vtour/tour.xml" />

      {showModal && events.length > 0 && (
        <EventModalOverlay
          container="fullscreen"
          open={open}
          onClose={onClose}
          events={events.map((e) => ({
            ...e,
            imageUrl: e.image_url ?? undefined,
            title: e.title ?? "(untitled)",
            subheading: e.subheading ?? "",
            description: e.description ?? "",
            dateRange: formatDateRange(e.start_date, e.end_date),
            timeText: formatTimeRange(e.start_time, e.end_time),
            ctaLabel: e.cta_label ?? "",
            ctaHref: e.cta_href ?? "",
          }))}
          initialIndex={0}
        />
      )}

      <button
        type="button"
        aria-label="View events"
        onClick={() => setOpen(true)}
        className="absolute bottom-6 right-6 z-30 h-11 w-11 rounded-full bg-[#BC0F42] shadow-lg btn-press hover:bg-[#a00d38] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white flex items-center justify-center"
      >
        <span className="attention-ring pointer-events-none absolute inset-0 rounded-full text-[#BC0F42]" />
        <span className="relative text-white font-serif font-bold text-xl leading-none select-none">i</span>
      </button>
    </div>
  );
}
