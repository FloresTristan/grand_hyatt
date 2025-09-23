/* eslint-disable @next/next/no-img-element */
"use client";

// import Image from 'next/image';
// import grandhyattmodel from "../app/assets/grandhyatt-resized.png"
import EventModalOverlay from './components/EventModalOverlay';
import { fetchEventsForClient, EventType, formatDateRange, to12h, fetchSeasons, Season } from './components/helpersAndInputs';
import { useEffect, useState } from 'react';
import { IoInformationCircleSharp } from "react-icons/io5";
import SeasonOverlay from './components/SeasonOverlay';
import KrpanoViewer from './components/KrpanoViewer';

export default function Home() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(true);
  const [seasons, setSeasons] = useState<Season[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedSeason, setSelectedSeason] = useState<Season>();

  useEffect(() => {
    fetchEventsForClient({ setEvents, setLoadingEvents});
    fetchSeasons({setSeasons, setLoading})
    const isInIframe = window.self !== window.top;
    if (!isInIframe) {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    if(!seasons) return;
    const activeSeason = seasons.find((season)=> season.is_active === true)
    console.log({activeSeason})
    setSelectedSeason(activeSeason)
  }, [seasons]);

  const onClose = () => setOpen(false);

  console.log({seasons})
  console.log({selectedSeason})
  // console.log(events)

  const frameSrc = selectedSeason?.gif_url ?? null;


  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Optional seasonal frame overlay (doesn't pan/zoom) */}
      {showModal && frameSrc && (
        <div className="pointer-events-none absolute inset-0 z-20">
          <SeasonOverlay show={true} frameSrc={frameSrc} />
        </div>
      )}

      <KrpanoViewer
        xml="/vtour/tour.xml"
      />

      {/* Events modal */}
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
            timeText: to12h(e.start_time),
            ctaLabel: e.cta_label ?? "",
            ctaHref: e.cta_href ?? "",
          }))}
          initialIndex={0}
        />
      )}

      {/* Manual open button */}
      <button onClick={() => setOpen(true)}>
        <IoInformationCircleSharp className="absolute bottom-4 z-30 right-4 h-12 w-12 cursor-pointer hover:text-red-500 duration-300" />
      </button>
    </div>
  );
}
