
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { adminAuth, adminDb } from '../../../../../lib/firebase/admin';

export async function POST(req: Request) {
  try {
    // If any user already exists, block bootstrap
    const anyUser = await adminDb.collection('users').limit(1).get();
    if (!anyUser.empty) {
      return NextResponse.json({ error: 'Already initialized' }, { status: 409 });
    }

    const { email, password, displayName } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
    }

    // Create auth user
    const user = await adminAuth.createUser({
      email,
      password,
      displayName,
      emailVerified: false,
      disabled: false,
    });

    await adminAuth.setCustomUserClaims(user.uid, { admin: true, role: 'admin' });

    await adminDb.collection('users').doc(user.uid).set({
      uid: user.uid,
      email,
      displayName: displayName || null,
      role: 'admin',
      createdAt: Date.now(),
      provider: 'password',
    });

    const customToken = await adminAuth.createCustomToken(user.uid, { bootstrap: true });

    return NextResponse.json({ ok: true, customToken });
  } catch (e: unknown) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
