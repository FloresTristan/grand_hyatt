import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { adminAuth } from '../../../../../lib/firebase/admin';

export async function POST() {
  const c = cookies().get('session')?.value;
  if (c) {
    const decoded = await adminAuth.verifySessionCookie(c).catch(() => null);
    if (decoded) await adminAuth.revokeRefreshTokens(decoded.sub);
  }
  cookies().set('session', '', { path: '/', maxAge: 0 });
  return NextResponse.json({ ok: true });
}
