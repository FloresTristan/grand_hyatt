'use client'
import { useRef, useState, useEffect } from "react";
import AddHotspotModal, {NewHotspotPayload} from "./AddHotspotModal";
import { fetchHotspots, Hotspots, UpdateDraft } from "@/app/components/helpersAndInputs";
import SnackbarComponent, {SnackbarSettings} from "@/app/components/Snackbar";
import { useUser } from "@/app/providers/UserProviders";
import HotspotModal from "./HotspotModal";
import { IconButton } from "@mui/material";
import { Refresh, EditOutlined, ArrowBackOutlined } from "@mui/icons-material";
import UpdateHotspotPage from "./UpdateHotspotPage";
// import KrpanoViewer from "@/app/components/KrpanoViewer";

export default function GrandHyattContentPage(){
    const previewRef = useRef<HTMLIFrameElement | null>(null);
    const [openAddModal, setOpenAddModal] = useState(false)
    const [hotspots, setHotspots] = useState<Hotspots[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [selectedHotspot, setSelectedHotspot] = useState<Hotspots | null>(null)
    const [open, setOpen] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const { profile } = useUser()
    const [snackbarSettings, setSnackbarSettings] = useState<SnackbarSettings>({
        open: false,
        message: '',
        severity: '',
      });

    const [updateDraft, setUpdateDraft] = useState<UpdateDraft>({
        name: '',
        description: null,
        scene: '',
        ath: null,
        atv: null,
        image_url: null,
        id: ''
    })

    function handleClose(){
        setOpenAddModal(false)
    }

    async function createHotspot(p: NewHotspotPayload) {
        const fd = new FormData();
        fd.append("name", p.name);
        if (p.description) fd.append("description", p.description);
        if (p.scene) fd.append("scene", p.scene);
        if (p.ath != null) fd.append("ath", String(p.ath));
        if (p.atv != null) fd.append("atv", String(p.atv));
        if (p.file) fd.append("file", p.file);

        const res = await fetch("/api/admin/hotspots/create", { method: "POST", body: fd });
        const data = await res.json();
        if (!res.ok) {
            setSnackbarSettings((prev) => ({...prev,
                open: true,
                message: 'Adding Hotspot Failed',
                severity: 'error'
            }))
            throw new Error(data?.error || "Create failed")
        } else {
            setSnackbarSettings((prev) => ({...prev,
                open: true,
                message: 'Added Hotspot Successfully',
                severity: 'success'
            }))
        };
    }

    async function deleteHotspot() {
        if (!selectedHotspot?.id) {
            setSnackbarSettings(prev => ({
                ...prev,
                open: true,
                message: 'Select a hotspot to delete',
                severity: 'error',
            }));
            return;
        }
        const ok = window.confirm(`Delete hotspot "${selectedHotspot.name}"?`);
        if (!ok) return;
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/hotspots/${selectedHotspot.id}`, { method: 'DELETE' });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data?.error || 'Failed to delete hotspot');
            setSnackbarSettings(prev => ({
                ...prev,
                open: true,
                message: 'Hotspot deleted',
                severity: 'success',
            }));
            // Refresh list
            await fetchHotspots({ setHotspots, setLoading });
            // Clear selection / close modal
            setSelectedHotspot(null);
            setOpen(false);
            // Best-effort: refresh the preview iframe so viewer reloads
            try { previewRef.current?.contentWindow?.location?.reload(); } catch {}
            // Re-mount the local KrpanoViewer to trigger refetch

        } catch (e) {
            const msg = e instanceof Error ? e.message : 'Delete failed';
            setSnackbarSettings(prev => ({
                ...prev,
                open: true,
                message: msg,
                severity: 'error',
            }));
        } finally {
            setLoading(false);
        }
    }


    useEffect(()=>{
        fetchHotspots({setHotspots, setLoading})
    },[])

    console.log({open})
    const isHotspotModalOpen = Boolean(selectedHotspot) && open;
    console.log({isHotspotModalOpen})

    useEffect(() => {
        if (!selectedHotspot) return;

        setUpdateDraft({
            name: selectedHotspot.name ?? '',
            description: selectedHotspot.description ?? '' ,
            scene: selectedHotspot.scene ?? '',
            ath: selectedHotspot.ath ?? 0,
            atv: selectedHotspot.atv ?? 0,
            image_url: selectedHotspot.image_url ?? '',
            id: selectedHotspot.id,
        });
    }, [selectedHotspot]);

    return(
        <div className="font-sans flex flex-col gap-4 md:flex-row min-h-screen md:h-screen p-8 md:gap-8 sm:px-20 bg-[#151c2f]">
            <div className="md:w-[30%] text-white h-[90%] md:overflow-scroll custom-scrollbar shadow-xl rounded-xl bg-[#212e3f] p-3 md:p-5 space-y-4">
                {/* Actions for devs only */}
                {profile?.role === 'super-admin' && (
                    <div
                        className="flex gap-2"
                    >
                        <button
                            onClick={()=>setOpenAddModal(true)}
                            className="bg-green-400 rounded-lg p-2 text-black hover:bg-green-500 hover:cursor-pointer"
                        >
                            Add
                        </button>
                        <button
                            onClick={deleteHotspot}
                            disabled={!selectedHotspot}
                            className="bg-red-500 rounded-lg p-2 text-white hover:bg-red-600 hover:cursor-pointer"
                        >
                            Delete
                        </button>
                    </div>
                )}
                <div>
                </div>

                <div className="flex items-center justify-between px-4">
                    <span
                        className="text-md text-white/60"
                    >
                        Ammenities
                    </span>
                    {
                        showUpdate ? (
                            <IconButton size="small" 
                                onClick={()=>{
                                    setShowUpdate(false)
                                    setSelectedHotspot(null)
                                }}
                            >
                                <div
                                    className='border border-[rgba(255,255,255,0.1)] flex justify-center items-center p-2 rounded hover:bg-white/10 transition duration-300 ease-in-out'>
                                    <ArrowBackOutlined htmlColor="#9ca3af" fontSize="small"/>
                                </div>
                            </IconButton>
                        ): (
                            <IconButton size="small"
                                onClick={()=>{
                                    fetchHotspots({ setHotspots, setLoading })
                                }}
                            >
                                <Refresh className="text-white/60 hover:cursor-pointer  hover:text-white/80"/>
                            </IconButton>
                        )
                    }
                    <AddHotspotModal open={openAddModal} onClose={handleClose} onCreate={createHotspot} />
                </div>

                {!loading && !showUpdate && (
                    <ul
                        className="divide-y divide-white/10 rounded-lg h-[150px] md:h-[670px]  overflow-scroll custom-scrollbar"
                    >
                        {hotspots?.map((hotspot, index) => (
                            <li key={hotspot?.id}
                                className={`flex items-center justify-between even:bg-[#151c2f] p-2 px-4  hover:bg-white/10 ${selectedHotspot?.id === hotspot?.id && 'bg-white/10 even:bg-white/10'}`}
                            >
                                <span
                                    onClick={()=>{
                                        setSelectedHotspot(hotspot)
                                        setOpen(true)
                                    }}
                                    className="text-white hover:cursor-pointer truncate max-w-[70px] md:max-w-[150px]"
                                >
                                {hotspot?.name}
                                </span>
                                <span>
                                    <IconButton size="small"
                                        onClick={()=>{
                                            setSelectedHotspot(hotspot)
                                            setOpen(true)
                                            setShowUpdate(true)
                                        }}
                                    >
                                        <EditOutlined className='text-green-400 hover:text-green-500 transition duration-700 ease-in-out' />
                                    </IconButton>
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
                {/* todo create a dynamic hotspot for me */}
                {
                    showUpdate && (
                        <UpdateHotspotPage
                            hotspotId={selectedHotspot?.id}
                            onCancel={()=>{
                                setShowUpdate(false)
                                setSelectedHotspot(null)
                            }}
                            onSaved={()=>{
                                // setShowUpdate(false)
                                // setSelectedHotspot(null)
                            }}
                            initial={updateDraft}
                            onChange={(draft) => setUpdateDraft(draft)}
                        />
                    )
                }
            </div>
            <div className="md:w-[70%] h-[90%] md:overflow-scroll custom-scrollbar text-white shadow-xl rounded-xl bg-[#212e3f] gap-4 p-3 md:p-5">
                <div className="mb-2 text-sm text-white/60">Live preview from website</div>
                <div className="relative w-full h-[720px] md:h-full border border-white/10 bg-white rounded-xl overflow-hidden">
                    <iframe ref={previewRef} src="/" title="Website Live Preview" className="absolute inset-0 object-contain h-full w-full" />
                    <HotspotModal
                        open={isHotspotModalOpen}
                        onClose={() => {
                            // setOpen(false);
                            // setSelectedHotspot(null);
                        }}
                        hotspot={updateDraft}
                        container="contained"
                    />
                </div>
                <div className="mt-3 flex justify-between items-center border-t border-white/10 pt-3">
                    <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={open} onChange={(e) => setOpen(e.target.checked)} />
                        <span>Hotspot Modal popup (preview)</span>
                    </label>
                </div>
            </div>
            <SnackbarComponent snackbarSettings={snackbarSettings} setSnackbarSettings={setSnackbarSettings}/>
        </div>
    )
}