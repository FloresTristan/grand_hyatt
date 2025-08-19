'use client';

import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/firebase/client.ts';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

export default function Login() {
  const r = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function afterFirebaseSignIn() {
    const idToken = await auth.currentUser!.getIdToken(/* forceRefresh */ true);
    await fetch('../api/auth/sessionLogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken }),
    });
    r.replace('../admin');
  }

  async function emailPass(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null); setLoading(true);
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email'));
    const password = String(form.get('password'));
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await afterFirebaseSignIn();
    } catch (e: unknown) {
      setErr(e.message ?? 'Login failed');
    } finally { setLoading(false); }
  }

//   async function google() {
//     setErr(null); setLoading(true);
//     try {
//       await signInWithPopup(auth, new GoogleAuthProvider());
//       await afterFirebaseSignIn();
//     } catch (e: unknown) {
//       setErr(e.message ?? 'Login failed');
//     } finally { setLoading(false); }
//   }

  return (
    <main className="p-6 bg-red-800 min-h-screen min-w-screen flex items-center justify-center ">
        <div className=" w-[30%] bg-white p-8 rounded-xl">
            {/* <div > */}
                <h1 className="text-xl mb-4">Sign in</h1>
                <form onSubmit={emailPass} className="flex flex-col gap-2">
                    <input name="email" placeholder="email" className="border p-2" />
                    <input name="password" type="password" placeholder="password" className="border p-2" />
                    <button disabled={loading} className="border p-2">{loading ? '...' : 'Sign in'}</button>
                </form>
                {err && <p className="text-red-600 text-sm mt-2">{err}</p>}
            {/* </div> */}
        </div>
      {/* <button onClick={google} className="mt-3 border p-2 w-full">Sign in with Google</button> */}
    </main>
  );
}
