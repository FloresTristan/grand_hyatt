'use client'
import Link from "next/link";
import React, {useState, useEffect} from "react";

export default function NavBar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleResize =()=>{
            setIsMobile(window.innerWidth < 768)
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    },[]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    return(
        <nav className={`sticky z-50 top-0 shadow-md text-white p-6 flex justify-between items-center ease-in-out duration-300 bg-[#212e3f]  ${isScrolled ? 'bg-opacity-90 bg-[#212e3f] backdrop-blur-md text-white' : ''} `}>
            <Link href="/" className="flex items-center">
                <span className={`ml-2 text-xl font-[family-name:var(--font-flatline)] tracking-wider font-semibold ${ isMobile ? 'hidden': '' } `}>Grand Hyatt</span>
            </Link>
            <ul className="flex space-x-4 font-[family-name:var(--font-geist-sans)] ">
                <li>
                    <Link
                        href="/admin"
                        className=" duration-300 ease-in-out border-2 border-transparent p-2 hover:border-blue-500 rounded-md ">
                            Content
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/seasons"
                        className=" duration-300 ease-in-out border-2 border-transparent p-2 hover:border-blue-500 rounded-md ">
                            Seasons
                    </Link>
                </li>
            </ul>
        </nav>
    );
}