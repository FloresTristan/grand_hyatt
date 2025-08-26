import 'server-only';
import { cookies } from 'next/headers';
import { adminAuth } from '../firebase/admin';
import type { DecodedIdToken } from 'firebase-admin/auth';

export async function getCurrentUser(): Promise<DecodedIdToken | null> {
  const c = (await cookies()).get('session')?.value;
  if (!c) return null;

  try {
    const decoded = await adminAuth.verifySessionCookie(c, true);
    return decoded; // has uid, email, and custom claims
  } catch {
    return null;
  }
}
