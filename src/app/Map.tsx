/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
  type ReactZoomPanPinchState,
} from "react-zoom-pan-pinch";
import mapImg from "../app/assets/grandhyatt-resized.png";

// intrinsic size from static import (fallbacks if you pass your own src)
const IMG_W = mapImg.width ?? 1920;
const IMG_H = mapImg.height ?? 1080;

export default function Map() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rzppRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [fitScale, setFitScale] = useState(1);

  const computeFit = () => {
    const el = containerRef.current!;
    const w = el.clientWidth;
    const h = el.clientHeight;
    return Math.min(w / IMG_W, h / IMG_H) || 1;
  };

  const snapToFit = (scale?: number, time = 200) => {
    const el = containerRef.current;
    const ref = rzppRef.current;
    if (!el || !ref) return;

    const s = scale ?? computeFit();
    const w = el.clientWidth;
    const h = el.clientHeight;
    const x = (w - IMG_W * s) / 2;
    const y = (h - IMG_H * s) / 2;

    ref.setTransform(x, y, s, time);
    setFitScale(s);
  };

  const guardFit = (state?: ReactZoomPanPinchState) => {
    const s = state?.scale ?? rzppRef.current?.state.scale ?? 1;
    if (s <= fitScale + 1e-6) snapToFit(fitScale); // keep perfectly centered at/below fit
  };

  // recenter on first paint and on container resize
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => snapToFit());
    ro.observe(el);
    snapToFit(); // first paint
    return () => ro.disconnect();
  }, []);
  return (
    <TransformWrapper>
      <TransformComponent>
        {/* <img src="image.jpg" alt="test" /> */}
        <Image
                  src={mapImg}
                  alt="Map"
                  fill
                  priority
                  draggable={false}
                  className="select-none pointer-events-none"
                />
      </TransformComponent>
    </TransformWrapper>
  );
}
