'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase/client';

export default function FirstUserPage() {
  const r = useRouter();
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    try {
      const res = await fetch('/api/bootstrap/create-first-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name: displayName }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to create admin');

      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      r.replace('/admin');
    } catch (e: unknown) {
      setErr(e?.message || 'Something went wrong');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#151c2f] text-white flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 rounded-xl bg-[#212e3f] p-6 shadow-xl">
        <h1 className="text-2xl font-semibold">Create the first admin user</h1>
        <p className="text-white/60 text-sm">
          This page only appears because no users exist yet. The created account will be an <b>admin</b>.
        </p>

        <label className="block">
          <div className="mb-1 text-sm text-white/80">Display name</div>
          <input
            className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <div className="mb-1 text-sm text-white/80">Email</div>
          <input
            type="email"
            className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <div className="mb-1 text-sm text-white/80">Password</div>
          <input
            type="password"
            className="w-full rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </label>

        {err && <div className="text-red-300 text-sm">{err}</div>}

        <button
          disabled={busy}
          className="w-full rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black font-medium px-3 py-2 disabled:opacity-60"
        >
          {busy ? 'Creating…' : 'Create admin'}
        </button>
      </form>
    </div>
  );
}
