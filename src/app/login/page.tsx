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
      setErr(e?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  async function onForgotPassword() {
    const email = (document.querySelector('input[name="email"]') as HTMLInputElement)?.value?.trim();
    if (!email) return setErr('Enter your email first to receive a reset link.');
    setErr(null);
    setLoading(true);
    try {
      // Adjust redirectTo to your real password reset page/route
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset`,
      });
      if (error) throw error;
      setErr('Password reset email sent. Check your inbox.');
    } catch (e: unknown) {
      setErr(e?.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 bg-[#151c2f] min-h-screen w-full flex flex-col items-center justify-center">
      <div>
        <Image src={grandhyatt} alt="Grand Hyatt" placeholder="blur" width={300} />
      </div>

      <div className="shadow-xl w-[80%] md:w-[30%] lg:w-[35%] xl:w-[25%] bg-[#212e3f] p-4 md:p-8 rounded-xl">
        <form onSubmit={onSubmit} className="flex text-white flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              autoComplete="email"
              className="rounded-lg bg-[#151c2f] focus:outline-none border border-[#151c2f] focus:border-blue-500 p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              autoComplete="current-password"
              className="rounded-lg bg-[#151c2f] focus:outline-none border border-[#151c2f] focus:border-blue-500 p-2"
            />
          </div>

          <div className="w-full flex justify-end items-center gap-x-2">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-blue-400 hover:underline disabled:opacity-60"
              disabled={loading}
            >
              Forgot password?
            </button>
            <button
              disabled={loading}
              className="md:w-[40%] lg:w-[15%] rounded-lg bg-blue-600 p-2 text-sm cursor-pointer disabled:opacity-60"
            >
              {loading ? '...' : 'Log in'}
            </button>
          </div>
        </form>

        {err && <p className="text-red-400 text-sm mt-3">{err}</p>}
      </div>
    </main>
  );
}
