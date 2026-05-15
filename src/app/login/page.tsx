'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import grandhyatt from '../assets/grandhyatt.png';
import { supabase } from '../../../lib/supabase/client';

export default function Login() {
  const r = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) r.replace('/admin');
    });
  }, [r]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email'));
    const password = String(form.get('password'));

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      r.replace('/admin');
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 pb-safe bg-[#151c2f] min-h-screen w-full flex flex-col items-center justify-center gap-6">
      <div>
        <Image src={grandhyatt} alt="Grand Hyatt" placeholder="blur" width={300} />
      </div>

      <div className="shadow-xl w-full max-w-sm sm:max-w-md bg-[#212e3f] p-5 sm:p-8 rounded-xl">
        <form onSubmit={onSubmit} className="flex text-white flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-white/80" htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              required
              autoComplete="email"
              className="rounded-lg bg-[#151c2f] border border-white/10 focus:outline-none focus:border-blue-500 px-4 py-3 text-sm transition-colors duration-150 min-h-[48px]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-white/80" htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              required
              autoComplete="current-password"
              className="rounded-lg bg-[#151c2f] border border-white/10 focus:outline-none focus:border-blue-500 px-4 py-3 text-sm transition-colors duration-150 min-h-[48px]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-press w-full rounded-lg bg-blue-600 hover:bg-blue-500 py-3 text-sm font-semibold transition-colors duration-150 disabled:opacity-60 min-h-[48px] mt-1"
          >
            {loading ? (
              <span className="inline-flex items-center justify-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 004 12z" />
                </svg>
                Signing in…
              </span>
            ) : (
              'Login'
            )}
          </button>
        </form>

        {err && (
          <p className="text-red-400 text-sm mt-3 rounded-lg bg-red-500/10 px-3 py-2 border border-red-500/20">
            {err}
          </p>
        )}
      </div>
    </main>
  );
}
