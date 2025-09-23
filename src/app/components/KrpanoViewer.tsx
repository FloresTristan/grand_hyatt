"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { fetchHotspots, Hotspots } from "./helpersAndInputs";
import HotspotModalOverlay from "../admin/grandhyatt/HotspotModal";

/** Minimal krpano API we use */
interface Krpano {
  call(cmd: string): void;
  set(path: string, value: string | number | boolean): void;
  get(path: string): unknown;
}
interface EmbedPanoOptions {
  id: string;
  target: string;
  xml: string;
  html5?: "only" | "auto";
  consolelog?: boolean;
  debugmode?: boolean;
  passQueryParameters?: boolean;
  onready?: (k: Krpano) => void;
  [key: string]: unknown;
}

declare global {
  interface Window {
    embedpano?: (opts: EmbedPanoOptions) => void;
    removepano?: (id: string) => void;
    getkrpano?: (idOrDiv: string) => Krpano | undefined;
    __readdHotspots?: () => void;
  }
}

type Props = {
  xml: string;
  viewerId?: string;   // krpano instance id (stable!)
  targetId?: string;   // div id to mount (stable!)
  style?: React.CSSProperties;
  options?: Record<string, unknown>; // pass a memoized object if you use this
};

function safeId(s: string) {
  return s.replace(/[^a-zA-Z0-9_]/g, "_");
}

export default function KrpanoViewer({
  xml,
  viewerId = "krpano1",
  targetId = "pano1",
  style,
  options, // do NOT put this in effect deps unless memoized
}: Props) {
  const [scriptReady, setScriptReady] = useState(false);
  const [hotspots, setHotspots] = useState<Hotspots[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspots|null>(null)
  const [modalOpen, setModalOpen] = useState(false);
  const embeddedRef = useRef(false);     // prevent re-embeds
  const krpanoRef = useRef<Krpano | null>(null);

  useEffect(() => {
    (window as unknown as Record<string, unknown>).openHotspotById = (id: string) => {
      const found = hotspots.find(h => h.id === id);
      if (found) {
        setSelectedHotspot(found);
        setModalOpen(true);
      }
    };
  }, [hotspots]);

  useEffect(() => {
    fetchHotspots({ setHotspots, setLoading });
  }, []);

  const addHotspots = useCallback((k: Krpano) => {
    // remove previously-added db hotspots
    k.call(`
      for(set(i,0), i LT hotspot.count, inc(i),
        set(hn, get(hotspot[get(i)].name));
        if(startswith(hn, 'dbhs_'), removehotspot(get(hn)); dec(i););
      );
    `);

    hotspots.forEach((h, idx) => {
      const hsId = `dbhs_${h.id ? safeId(h.id) : idx}`;

      k.call(`addhotspot(${hsId})`);
      k.set(`hotspot[${hsId}].id`, h.id ?? "");
      k.set(`hotspot[${hsId}].ath`, (h.ath ?? 0) as number);
      k.set(`hotspot[${hsId}].atv`, (h.atv ?? 0) as number);

      // your style from XML (e.g., <style name="circular_hotspot" .../>)
      k.call(`hotspot[${hsId}].loadstyle(hs_circle)`);
      k.set(`hotspot[${hsId}].keep`, true);
      k.set(`hotspot[${hsId}].visible`, true);
      k.set(`hotspot[${hsId}].handcursor`, true);

      const title = h.name ?? "";
      const desc  = h.description ?? "";
      k.set(`hotspot[${hsId}].tag`, title);
      k.set(`hotspot[${hsId}].data_title`, title);   // used by many circle/skin snippets
      k.set(`hotspot[${hsId}].data_desc`,  desc);

      // also set common alternatives so any skin variant works
      k.set(`hotspot[${hsId}].title`,  title);
      k.set(`hotspot[${hsId}].text`,   title);
      k.set(`hotspot[${hsId}].tooltip`, title);
      k.set(`hotspot[${hsId}].id`, h.id ?? "");

      // optional custom icon
      // if (h.image_url) k.set(`hotspot[${hsId}].url`, h.image_url);

      const msg = (h.description || h.name || "hotspot").replace(/'/g, "\\'");
      k.set(`hotspot[${hsId}].onclick`, `trace('clicked ${msg}')`)
      k.set(`hotspot[${hsId}].onclick`, `jscall('openHotspotById("${h.id}")')`);


    });
  }, [hotspots]);

  // Embed ONCE when script is ready; don't tear down on random renders
  useEffect(() => {
    if (!scriptReady || loading) return;
    if (!window.embedpano) return;
    if (embeddedRef.current) {
      // already embedded; just ensure we capture the instance
      krpanoRef.current = window.getkrpano?.(viewerId) ?? null;
      return;
    }

    window.embedpano({
      id: viewerId,
      target: targetId,
      xml,
      html5: "only",
      consolelog: true,
      debugmode: false,
      passQueryParameters: true,
      onready: (k: Krpano) => {
        krpanoRef.current = k;

        // initial hotspots
        addHotspots(k);

        // after each scene load, re-add hotspots
        window.__readdHotspots = () => {
          const inst = window.getkrpano?.(viewerId);
          if (inst) addHotspots(inst);
        };
        k.call("set(events.onloadcomplete, js(window.__readdHotspots && window.__readdHotspots()))");
      },
      // spread options if you *must* (but memoize them in parent)
      ...(options || {}),
    });

    embeddedRef.current = true;
  }, [scriptReady, loading, xml, viewerId, targetId, addHotspots]); // <-- no `options` here

  // If hotspots change later, update without re-embedding
  useEffect(() => {
    if (!scriptReady || loading) return;
    const k = krpanoRef.current ?? window.getkrpano?.(viewerId) ?? null;
    if (k) addHotspots(k);
  }, [hotspots, scriptReady, loading, viewerId, addHotspots]);

  // Clean up ONLY on unmount
  useEffect(() => {
    return () => {
      try {
        window.removepano?.(viewerId);
      } catch {}
      embeddedRef.current = false;
      krpanoRef.current = null;
    };
  }, [viewerId]);

  console.log({selectedHotspot})

  return (
    <>
      <Script
        src="/vtour/tour.js"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div
        id={targetId}
        style={{ width: "100%", height: "100%", position: "relative", ...style }}
      />
      {selectedHotspot && (
        <HotspotModalOverlay
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          hotspot={selectedHotspot}
          container="fullscreen"
        />
      )}
    </>
  );
}
