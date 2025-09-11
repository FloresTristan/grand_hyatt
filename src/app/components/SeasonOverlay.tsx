import Image, {StaticImageData} from "next/image"

type OverlayProps ={
    show: boolean;
    frameSrc: string | StaticImageData;
}

export default function SeasonOverlay({show, frameSrc}:OverlayProps){

    if(show === false ) return null;
    return (
        <>
            <Image unoptimized src={frameSrc} alt={'sample'} fill className="object-fill object-center" />
        </>
    )
}