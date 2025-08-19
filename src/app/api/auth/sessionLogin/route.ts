import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { adminAuth } from '../../../../../lib/firebase/admin';


export async function POST(req: Request) {
  const { idToken } = await req.json();
  const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn: 1000 * 60 * 60 * 24 * 5 });

  const cookieStore = await cookies();                      
  cookieStore.set('session', sessionCookie, {
    httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 5,
  });

  return NextResponse.json({ ok: true });
}