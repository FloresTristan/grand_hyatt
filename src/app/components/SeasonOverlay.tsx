import { memo } from "react";
import Image, { StaticImageData } from "next/image";

type OverlayProps = {
  show: boolean;
  frameSrc: string | StaticImageData;
};

const SeasonOverlay = memo(function SeasonOverlay({ show, frameSrc }: OverlayProps) {
  if (!show) return null;
  return (
    <Image
      unoptimized
      src={frameSrc}
      alt="Seasonal frame overlay"
      fill
      className="object-fill object-center"
    />
  );
});

export default SeasonOverlay;
