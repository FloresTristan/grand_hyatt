'use client'
import Link from "next/link";
import React, {useState, useEffect} from "react";
import Image from 'next/image';
import grandhyattmodel from '../src/app/assets/grandhyatt.png'
import { auth } from '../lib/firebase/client';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';


export default function NavBar() {
  const r = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function logout() {
    try {
      await fetch('/api/auth/sessionLogout', {  
        method: 'POST',
        credentials: 'same-origin',
      });
    } catch (e) {
      console.error('logout cookie clear failed', e);
    } finally {
      await signOut(auth);
      r.replace('/login'); // or '/'
    }
  }

  return (
    <nav className={`sticky z-50 top-0 shadow-md text-white p-6 flex justify-between items-center ease-in-out duration-300 bg-[#212e3f] ${isScrolled ? 'bg-opacity-90 backdrop-blur-md' : ''}`}>
      <Link href="/" className="flex items-center">
        <Image src={grandhyattmodel} alt="Grand Hyatt" placeholder="blur" quality={100} width={100} />
      </Link>

      <ul className="flex space-x-4 font-[family-name:var(--font-geist-sans)]">
        <li><Link href="/admin" className="duration-300 border-2 border-transparent p-2 hover:border-blue-500 rounded-md">Content</Link></li>
        <li><Link href="/admin/seasons" className="duration-300 border-2 border-transparent p-2 hover:border-blue-500 rounded-md">Seasons</Link></li>
        <li><Link href="#" className="duration-300 border-2 border-transparent p-2 hover:border-blue-500 rounded-md">Users</Link></li>
      </ul>

      <button onClick={logout} className="rounded-lg bg-red-600 p-2 cursor-pointer text-sm">Logout</button>
    </nav>
  );
}