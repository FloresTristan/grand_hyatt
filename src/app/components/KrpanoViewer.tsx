/* app/components/KrpanoViewer.tsx */
"use client";

import { useEffect } from "react";
import Script from "next/script";

type KrpanoViewerProps = {
  xml: string;                   // e.g. "/vtour/tour.xml"
  viewerId?: string;             // id for the krpano instance
  targetId?: string;             // id of the container DIV
  style?: React.CSSProperties;   // size of the container
};

export default function KrpanoViewer({
  xml,
  viewerId = "krpano1",
  targetId = "pano1",
  style,
}: KrpanoViewerProps) {
  const scriptSrc = "/vtour/tour.js"; // you DO have this

  const onScriptReady = () => {
    if (!window.embedpano) {
      console.error("krpano embedpano() not found at", scriptSrc);
      return;
    }

    // clean previous instance with same id
    try { window.removepano?.(viewerId); } catch {}

    window.embedpano({
      id: viewerId,
      target: targetId,
      xml,
      html5: "only",
      consolelog: true,
      debugmode: true,
      passQueryParameters: true,
      onready: (k: any) => {
        // --- visible HTML hotspot (always shows) ---
        const addHotspots = () => {
          // label
          if (k.get("hotspot[label_center]")) k.call("removehotspot(label_center)");
          k.call("addhotspot(label_center)");
          k.set("hotspot[label_center].ath", 0);
          k.set("hotspot[label_center].atv", 0);
          k.set("hotspot[label_center].html", "Click me");
          k.set(
            "hotspot[label_center].css",
            "padding:8px 12px;background:rgba(0,0,0,.7);color:#fff;border-radius:8px;font:14px system-ui;white-space:nowrap;"
          );
          k.set("hotspot[label_center].zorder", 20);
          k.set("hotspot[label_center].handcursor", true);
          k.set("hotspot[label_center].onclick", "trace('label clicked')");

          // image hotspot (use a sure path)
          if (k.get("hotspot[hs1]")) k.call("removehotspot(hs1)");
          k.call("addhotspot(hs1)");
          k.set("hotspot[hs1].ath", 0);
          k.set("hotspot[hs1].atv", 0);
          k.set("hotspot[hs1].scale", 0.8);
          k.set("hotspot[hs1].edge", "center");
          k.set("hotspot[hs1].handcursor", true);
          // either absolute path under /public…
        //   k.set("hotspot[hs1].url", "/vtour/skin/vtourskin_hotspot.png");
          k.set("hotspot[hs1].url", "/vtour/plugins/hs_circle.png");
          // …or relative to the xml (both work):
          // k.set("hotspot[hs1].url", "%CURRENTXML%/skin/vtourskin_hotspot.png");
          k.set("hotspot[hs1].onclick", "trace('image hotspot clicked')");
        };

        // add immediately
        addHotspots();

        // re-add after each scene load (some xml clear hotspots)
        (window as unknown as { __readdHotspots?: () => void }).__readdHotspots = addHotspots;
        k.call("set(events.onloadcomplete, js(window.__readdHotspots()))");

        k.call("trace('krpano ready; scene=', xml.scene)");
      },
    });
  };

  useEffect(() => {
    return () => {
      try { window.removepano?.(viewerId); } catch {}
    };
  }, [viewerId]);

  return (
    <>
      <Script src={scriptSrc} strategy="afterInteractive" onReady={onScriptReady} />
      <div
        id={targetId}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          ...style,
        }}
      />
    </>
  );
}
