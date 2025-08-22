'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import grandhyattmodel from '../assets/grandhyatt.png';
import { auth } from '../../../lib/firebase/client';
import { useRouter, usePathname } from 'next/navigation';
import { signOut } from 'firebase/auth';

export default function NavBar() {
  const r = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  async function logout() {
    try {
      await fetch('/api/auth/sessionLogout', { method: 'POST', credentials: 'same-origin' });
    } catch (e) {
      console.error('logout cookie clear failed', e);
    } finally {
      await signOut(auth);
      r.replace('/login');
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#212e3f] text-white transition-colors
        ${isScrolled ? 'bg-opacity-90 backdrop-blur-md' : ''}`}
    >
      <div className="mx-auto  px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={grandhyattmodel} alt="Grand Hyatt" priority width={100} />
        </Link>

        {/* Desktop ni */}
        <ul className="hidden md:flex items-center gap-4 font-[family-name:var(--font-geist-sans)]">
          <li>
            <Link
              href="/admin"
              className="rounded-md border-2 border-transparent px-3 py-2 hover:border-blue-500 transition"
            >
              Content
            </Link>
          </li>
          <li>
            <Link
              href="/admin/seasons"
              className="rounded-md border-2 border-transparent px-3 py-2 hover:border-blue-500 transition"
            >
              Seasons
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className="rounded-md border-2 border-transparent px-3 py-2 hover:border-blue-500 transition"
            >
              Users
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="ml-2 rounded-lg bg-red-600 px-3 py-2 text-sm hover:opacity-95"
            >
              Logout
            </button>
          </li>
        </ul>

        {/* Para mobile ni */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          {/* icons / X */}
          <svg
            className={`h-6 w-6 transition-transform ${open ? 'rotate-90 opacity-0' : 'opacity-100'}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
          <svg
            className={`absolute h-6 w-6 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpen(false)}
      />

      {/* panel */}
      <div
        className={`md:hidden absolute left-3 right-3 top-[72px] rounded-2xl border border-white/10 bg-[#212e3f] shadow-xl transition
          ${open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col p-3 font-[family-name:var(--font-geist-sans)]">
          <li>
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 hover:bg-white/10"
            >
              Content
            </Link>
          </li>
          <li>
            <Link
              href="/admin/seasons"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 hover:bg-white/10"
            >
              Seasons
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 hover:bg白/10 hover:bg-white/10"
            >
              Users
            </Link>
          </li>
          <li className="mt-1 border-t border-white/10 pt-2">
            <button
              onClick={logout}
              className="w-full rounded-lg bg-red-600 px-3 py-2 text-sm hover:opacity-95"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
