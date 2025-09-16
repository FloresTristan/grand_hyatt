/* eslint-disable @next/next/no-img-element */
"use client";

import Image from 'next/image';
import grandhyattmodel from "../app/assets/grandhyatt-resized.png"
import EventModalOverlay from './components/EventModalOverlay';
import { fetchEventsForClient, EventType, formatDateRange, to12h, fetchSeasons, Season } from './components/helpersAndInputs';
import { useEffect, useState } from 'react';
import { IoInformationCircleSharp } from "react-icons/io5";
import SeasonOverlay from './components/SeasonOverlay';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import KrpanoViewer from './components/KrpanoViewer';

export default function Home() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(true);
  const [seasons, setSeasons] = useState<Season[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedSeason, setSelectedSeason] = useState<Season>();


  const IMG_W = grandhyattmodel.width;
  const IMG_H = grandhyattmodel.height;

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

      {/* PAN & ZOOM AREA */}
      {/* <div className="relative z-10 bg-black/5">
        <TransformWrapper
          minScale={1}
          maxScale={4}
          initialScale={1}
          centerOnInit
          disablePadding
          wheel={{ step: 0.2 }}
          doubleClick={{ disabled: false, mode: "zoomIn" }}
          pinch={{ step: 5 }}
          limitToBounds={true}
          alignmentAnimation={{ sizeX: 200, sizeY: 200, animationType: "easeOut" }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="absolute right-3 top-3 z-30 flex gap-2">
                <button
                  onClick={() => zoomOut()}
                  className="rounded bg-white/80 px-2 py-1 text-sm hover:bg-white"
                >
                  −
                </button>
                <button
                  onClick={() => zoomIn()}
                  className="rounded bg-white/80 px-2 py-1 text-sm hover:bg-white"
                >
                  +
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="rounded bg-white/80 px-2 py-1 text-sm hover:bg-white"
                >
                  Reset
                </button>
              </div>

              <TransformComponent
                // wrapperClass="w-full h-full"
                // contentClass="relative"
              >
                <div style={{ position: 'relative', width: IMG_W, height: IMG_H }}>
                  <Image
                    src={grandhyattmodel}
                    alt="Grand Hyatt Map"
                    priority
                    draggable={false}
                    className="select-none pointer-events-none block "
                  />
                  <button
                    className="absolute right-[470px] top-[220px] -translate-x-1/2 -translate-y-1/2
                              rounded-full border-2 hover:scale-125 border-blue-600 hover:bg-blue-600 duration-500 text-white text-xs px-2 py-1"
                    onClick={(e) => { e.stopPropagation(); alert("Grand Hyatt Manila"); }}
                  >
                    Grand Hyatt Manila
                  </button>
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div> */}
      <KrpanoViewer
        xml="/vtour/tour.xml"
      />
      {/* <Map/> */}

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
