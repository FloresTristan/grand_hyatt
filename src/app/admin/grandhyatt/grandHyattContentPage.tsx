'use client'
import { useRef } from "react";

export default function GrandHyattContentPage(){
    const previewRef = useRef<HTMLIFrameElement | null>(null);

    return(
        <div className="font-sans flex flex-col gap-4 md:flex-row min-h-screen md:h-screen p-8 md:gap-8 sm:px-20 bg-[#151c2f]">
            <div className="md:w-[30%] text-white h-[90%] md:overflow-scroll custom-scrollbar shadow-xl rounded-xl bg-[#212e3f] p-3 md:p-5 space-y-4">
                Hotspots
                {/* todo create a dynamic hotspot for me */}
            </div>
            <div className="md:w-[70%] h-[90%] md:overflow-scroll custom-scrollbar text-white shadow-xl rounded-xl bg-[#212e3f] gap-4 p-3 md:p-5">
                <div className="mb-2 text-sm text-white/60">Live preview from website</div>
                <div className="relative w-full h-[720px] md:h-full border border-white/10 bg-white rounded-xl overflow-hidden">
                    <iframe ref={previewRef} src="/" title="Website Live Preview" className="absolute inset-0 object-contain h-full w-full" />

                </div>
            </div>
        </div>
    )
}