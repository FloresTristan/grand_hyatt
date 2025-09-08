"use client";

import Image from 'next/image';
import grandhyattmodel from "../app/assets/grandhyatt-resized.png"
import EventModalOverlay from './components/EventModalOverlay';
import { fetchEventsForClient, EventType, formatDateRange, to12h } from './components/helpersAndInputs';
import { useEffect, useState } from 'react';
import { IoInformationCircleSharp } from "react-icons/io5";

export default function Home() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    fetchEventsForClient({ setEvents, setLoadingEvents});
    const isInIframe = window.self !== window.top;
    if (!isInIframe) {
      setShowModal(true);
    }
  }, []);

  const onClose = () => setOpen(false);

  // console.log(events)
  return (
    <div className="overflow-x-scroll">
      <Image src={grandhyattmodel} alt="sample" placeholder="blur" quality={100} objectFit="cover" layout="fill" />
      {
        showModal && events.length > 0 && (
          <EventModalOverlay
            container="fullscreen"
            open={open}
            onClose={() => onClose()}
            events={events.map(e => ({
              ...e,
              imageUrl: e.image_url ?? undefined,
              title: e.title ?? '(untitled)',
              subheading: e.subheading ?? '',
              description: e.description ?? '',
              dateRange: formatDateRange(e.start_date, e.end_date),
              timeText: to12h(e.start_time),
              ctaLabel: e.cta_label ?? '',
              ctaHref: e.cta_href ?? '',
            }))}
            initialIndex={0}
          />
        )
      }
       <button
       onClick={() => setOpen(true)}
       >
        <IoInformationCircleSharp className="absolute bottom-4 right-4 h-12 w-12 cursor-pointer hover:text-red-500 duration-300" />
      </button>
    </div>
  );
}
