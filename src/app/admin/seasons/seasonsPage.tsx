'use client'
import { useRef, useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import { useUser } from '@/app/providers/UserProviders';
import AddSeasonModal from './addSeason';
import { Season, fetchSeasons } from '@/app/components/helpersAndInputs';
import SnackbarComponent, {SnackbarSettings} from '@/app/components/Snackbar';
import SeasonOverlay from '@/app/components/SeasonOverlay';
import { IconButton } from '@mui/material';
import { Refresh } from '@mui/icons-material';

export default function SeasonsPage(){
    const previewRef = useRef<HTMLIFrameElement | null>(null);
    const [selectedSeason, setSelectedSeason] = useState<string | StaticImageData>('');
    const { user, profile } = useUser();
    const [open, setOpen] = useState(false);
    const [selectedSeasonId, setSelectedSeasonId] = useState('')
    const [loading, setLoading] = useState(false);
    const [seasons, setSeasons] = useState<Season[]>([]);
    const [buttonLoading, setButtonLoading] = useState(false)
    const [snackbarSettings, setSnackbarSettings] = useState<SnackbarSettings>({
        open: false,
        message: '',
        severity: '',
      });

    async function createSeason({ name, file }: { name: string; file: File | null }) {
        const body = new FormData();
        body.append('name', name);
        if (file) body.append('file', file);
        const res = await fetch('/api/admin/seasons/create', { method: 'POST', body });
        if (!res.ok) {
            setSnackbarSettings((prev) => ({...prev,
                open: true,
                message: 'Season Creation Failed',
                severity: 'error'
            }))
            throw new Error((await res.json()).error || 'Create failed')
        } else {
            setSnackbarSettings((prev) => ({...prev,
                open: true,
                message: 'Added Season Successfully',
                severity: 'success'
            }))
        }
    }

    async function setActiveSeason(seasonId: string): Promise<Season> {
        setButtonLoading(true)
        let res;
        if (!seasonId) {
            res = await fetch(`/api/admin/seasons/set_season/none`, { method: 'PATCH' });
        } else {
            res = await fetch(`/api/admin/seasons/set_season/${seasonId}`, {
                method: 'PATCH',
                headers: { 'Accept': 'application/json' },
            });
        }

        const data = await res.json();
        console.log({data})
        if (!res.ok){
            setSnackbarSettings((prev) => ({...prev,
                open: true,
                message: 'Failed to set active season',
                severity: 'error'
            }))
            throw new Error(data?.error || 'Failed to set active season')
        } else {
            setSnackbarSettings((prev) => ({...prev,
                open: true,
                message: 'Saved Season Successfully',
                severity: 'success'
            }))
        }

        setButtonLoading(false)

        return data.item as Season;
    }

    async function onDelete(id: string) {
        if(!id){
            setSnackbarSettings({
                open: true,
                message: 'ID missing',
                severity: 'error',
            });
        }
        setSnackbarSettings({
        open: true,
        message: 'Are you sure you want to delete this season?',
        severity: 'warning',
        actionLabel: 'Delete',
        duration: 10000,
        actionCallback: async () => {
            try {
            const res = await fetch(`/api/admin/seasons/set_season/${id}`, { method: 'DELETE' });
            const data = await res.json();
            if (!res.ok) {
                setSnackbarSettings({
                open: true,
                message: 'Delete Season failed',
                severity: 'error',
                });
                throw new Error(data?.error || 'Delete failed');
            } else {
                setSnackbarSettings({
                open: true,
                message: 'Season Deleted Successfully',
                severity: 'success',
                });
            }
            } catch (e: unknown) {
            setSnackbarSettings({
                open: true,
                message: (e instanceof Error ? e.message : 'Delete failed'),
                severity: 'error',
            });
            }
        },
        });
    }

    useEffect(() => {
        fetchSeasons({setSeasons, setLoading})
    }, []);

    useEffect(() => {
        if(!seasons) return;

        const currentActive = seasons.find((season)=> season.is_active === true)

        console.log({currentActive})
        setSelectedSeason(currentActive?.image_url || '')
        setSelectedSeasonId(currentActive?.id || '')
    }, [seasons]);

    console.log({seasons})

    console.log("user", user)
    console.log("profile", profile)

    console.log("role", profile?.role)
    console.log(selectedSeason)
    console.log({selectedSeasonId})

    return(
        <div className="font-sans flex flex-col gap-4 md:flex-row min-h-screen md:h-screen p-8 md:gap-8 sm:px-20 bg-[#151c2f]">
            <div className="md:w-[25%] text-white h-[90%] md:overflow-scroll custom-scrollbar shadow-xl rounded-xl bg-[#212e3f] p-3 md:p-5 space-y-4">
               {profile?.role === 'super-admin' && (
                    <div className='sticky w-full top-0 bg-[#212e3f] z-20 rounded-lg flex justify-between'>
                        <div className='flex gap-x-2'>
                            <button
                                onClick={() => setOpen(true)}
                                className='px-3 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 hover:cursor-pointer text-black font-medium disabled:cursor-not-allowed'
                            >
                                Add
                            </button>
                            <button
                                onClick={() => onDelete(selectedSeasonId)}
                                className='px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 hover:cursor-pointer font-medium disabled:cursor-not-allowed'
                            >
                                Delete
                            </button>
                        </div>
                        <IconButton size="small"
                            onClick={()=>{
                                fetchSeasons({ setSeasons, setLoading })
                            }}
                            >
                            <Refresh htmlColor="#9ca3af" fontSize="medium" />
                        </IconButton>
                    </div>
                )}
               {
                seasons.map((season) => (
                    <div
                        onClick={() =>{
                            setSelectedSeason(season?.image_url || '')
                            setSelectedSeasonId(season.id)
                        }}
                        key={season.id}
                        className={`flex-col border relative border-white/10 rounded-lg overflow-hidden  hover:scale-[1.05] transition-transform duration-300 cursor-pointer ${season.id === selectedSeasonId? ' shadow-2xl scale-[1.05]': ''}`}
                    >
                        {/* <div className="relative w-full p-2 h-[80%] bg-white/10">
                            <Image unoptimized src={season.image_url || ''} alt={season.name} fill className=" object-cover object-center" />
                        </div> */}
                        <div className=" relative aspect-video w-full overflow-hidden rounded-lg">
                            {/* preview keeps aspect without stretch */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                            src={season.image_url || ""}
                            alt={season.name}
                            className="h-full w-full object-contain bg-black/20"
                            />
                        </div>
                        <div className="p-2  bg-[#1a2536]">
                            <h3 className="text-md font-semibold">{season.name}</h3>
                        </div>
                    </div>
                ))
               }
                <div className="flex mt-4 gap-2">
                    <button
                        onClick={()=>{
                            setActiveSeason(selectedSeasonId)
                        }}
                        disabled={buttonLoading}
                        className='px-3 py-2 rounded-lg bg-green-400 hover:bg-green-500 hover:cursor-pointer text-black font-medium disabled:cursor-not-allowed'
                    >
                        {buttonLoading ? (
                            <span className="inline-flex items-center gap-2">
                                Saving
                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 004 12z"/></svg>
                            </span>
                        ) : 'Save'
                        }
                    </button>
                    <button
                        className='px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:cursor-pointer'
                        onClick={() => {
                            setSelectedSeason('')
                            setSelectedSeasonId('')
                        }}
                    >
                        Clear
                    </button>
                </div>
            </div>
            <div className="md:w-[75%] h-[90%] md:overflow-scroll custom-scrollbar text-white shadow-xl rounded-xl bg-[#212e3f] gap-4 p-3 md:p-5">
                <div className="mb-2 text-sm text-white/60">
                    Live preview from website with frames
                </div>
                <div className="relative w-full h-[720px] md:h-full border border-white/10 bg-white rounded-xl overflow-hidden">
                    {selectedSeason !== '' && (
                        <div className="relative aspect-video inset-0 w-full z-30 h-full pointer-events-none">
                            {/* <Image unoptimized src={selectedSeason} alt="Season Overlay" fill  className=" object-cover object-center" /> */}
                            <SeasonOverlay show={true} frameSrc={selectedSeason} />
                        </div>
                    )}
                    {/* Iframe for live preview */}

                    <iframe ref={previewRef} src="/" title="Website Live Preview" className="absolute inset-0 w-full h-full" />
                </div>
            </div>
            <AddSeasonModal
                open={open}
                onClose={() => setOpen(false)}
                onCreate={createSeason}
            />
            <SnackbarComponent snackbarSettings={snackbarSettings} setSnackbarSettings={setSnackbarSettings}/>
        </div>
    )
}