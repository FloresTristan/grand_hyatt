"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { fetchHotspots, Hotspots } from "./helpersAndInputs";
import HotspotModalOverlay from "../admin/grandhyatt/HotspotModal";
import { usePathname } from "next/navigation";

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
    ReactKrpanoLayerClick?: (layerName: string) => void;
  }
}

type Props = {
  xml: string;
  viewerId?: string;
  targetId?: string;
  style?: React.CSSProperties;
  options?: Record<string, unknown>;
  container?: 'contained' | 'fullscreen';
  whichPage?: 'default' | 'popup' | 'grandhyatt' | 'seasons';
};

export default function KrpanoViewer({
  xml,
  viewerId = "krpano1",
  targetId = "pano1",
  style,
  options,
  container = 'fullscreen',
  whichPage = 'default',
}: Props) {
  const [scriptReady, setScriptReady] = useState(false);
  const [hotspots, setHotspots] = useState<Hotspots[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspots | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const embeddedRef = useRef(false);
  const krpanoRef = useRef<Krpano | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    fetchHotspots({ setHotspots, setLoading });
  }, []);

  const callKrpanoAction = useCallback((action: string) => {
    const k = krpanoRef.current ?? window.getkrpano?.(viewerId);
    if (k) k.call(`${action}()`);
  }, [viewerId]);

  // Layer click handler — routes submenu clicks to hotspot modal
  useEffect(() => {
    window.ReactKrpanoLayerClick = (layerName: string) => {
      const k = krpanoRef.current ?? window.getkrpano?.(viewerId);
      if (!k) return;
      if (!layerName.startsWith("submenu")) return;

      const html = k.get(`layer[${layerName}].html`);
      if (!html) return;

      const match = hotspots.find(
        (h) => h.name?.trim().toLowerCase() === String(html).trim().toLowerCase()
      );

      if (match) {
        setSelectedHotspot(match);
        setModalOpen(true);
        k.call("closem()");
        k.call("close()");
      }
    };

    return () => {
      delete window.ReactKrpanoLayerClick;
    };
  }, [hotspots, viewerId]);

  // Embed KRPano
  useEffect(() => {
    if (!scriptReady || loading) return;
    if (!window.embedpano) return;
    if (embeddedRef.current) {
      krpanoRef.current = window.getkrpano?.(viewerId) ?? null;
      return;
    }

    window.embedpano({
      id: viewerId,
      target: targetId,
      xml,
      html5: "only",
      consolelog: false,
      debugmode: false,
      passQueryParameters: true,
      jsaccess: "full",
      onready: (k: Krpano) => {
        krpanoRef.current = k;

        if (pathname.includes("grandhyatt")) {
          k.call(`
            delayedcall(1,
              loadscene(scene_ninort, null, MERGE, BLEND(get(transitiontime),get(transitiontweentype)));
            );
          `);

          k.call(`
            delayedcall(1.2,
              for(set(i,0), i LT layer.count, inc(i),
                if(
                  layer[get(i)].url == "skin/exit.png"
                  OR layer[get(i)].name == "sceneonly"
                  OR find(layer[get(i)].onclick, "loadscene(") GE 0
                  OR find(layer[get(i)].onclick, "closem(") GE 0,

                  set(layer[get(i)].enabled, false);
                  set(layer[get(i)].onclick, );
                  set(layer[get(i)].onover, );
                  set(layer[get(i)].onout, );
                  set(layer[get(i)].cursor, default);
                );
              );
            );
          `);
        }

        k.call(`
          for(set(i,0), i LT layer.count, inc(i),
            if(startswith(get(layer[get(i)].name), 'submenu'),
              set(layer[get(i)].enabled, true);
              set(layer[get(i)].bgcapture, true);
              set(layer[get(i)].onclick, js(window.ReactKrpanoLayerClick(get(name))));
            );
          );
        `);
      },
      ...(options || {}),
    });

    embeddedRef.current = true;
  }, [scriptReady, loading, xml, viewerId, targetId, options, pathname, whichPage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      try {
        window.removepano?.(viewerId);
      } catch {}
      embeddedRef.current = false;
      krpanoRef.current = null;
    };
  }, [viewerId]);

  return (
    <>
      <Script
        src="/vtour/tour.js"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />

      <div
        id={targetId}
        className="w-full h-full relative"
        style={style}
      />

      {container === 'fullscreen' && selectedHotspot && (
        <HotspotModalOverlay
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            callKrpanoAction("open");
          }}
          hotspot={selectedHotspot}
          container={container}
        />
      )}
    </>
  );
}
