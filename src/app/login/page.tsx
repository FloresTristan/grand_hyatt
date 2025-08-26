'use client';

import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/firebase/client.ts';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Image from 'next/image';
import grandhyatt from '../assets/grandhyatt.png'

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
    <main className="p-6 bg-[#151c2f] min-h-screen w-full min-w-screen flex flex-col items-center justify-center ">
        <div className="">
            <Image src={grandhyatt} alt="sample" placeholder="blur" width={300} />
        </div>
        <div className=" shadow-xl w-[80%] md:w-[30%] lg:w-[35%] xl:w-[25%] bg-[#212e3f] p-4 md:p-8 rounded-xl">
            <div >
                {/* <h1 className="text-xl text-white mb-4">Sign in</h1> */}
                <form onSubmit={emailPass} className="flex text-white flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm" htmlFor="email">Email</label>
                            <input name="email" autoComplete="false"  className="rounded-lg bg-[#151c2f] focus:outline-none border border-[#151c2f] focus:border-blue-500 p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm" htmlFor="password">Password</label>
                            <input name="password" autoComplete="false" type="password" className="rounded-lg  bg-[#151c2f] focus:outline-none border border-[#151c2f] focus:border-blue-500 p-2" />
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-center gap-x-2">
                        <span className="text-blue-400">Forgot password?</span>
                        <button disabled={loading} className="md:w-[40%] lg:w-[15%] rounded-lg bg-blue-600 p-2 text-sm cursor-pointer">{loading ? '...' : 'Log in'}</button>
                    </div>
                </form>
                {err && <p className="text-red-600 text-sm mt-2">{err}</p>}
            </div>
        </div>
      {/* <button onClick={google} className="mt-3 border p-2 w-full">Sign in with Google</button> */}
    </main>
  );
}
