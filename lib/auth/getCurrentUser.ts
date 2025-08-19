import 'server-only';
import { cookies } from 'next/headers';
import { adminAuth } from '../firebase/admin';

export async function getCurrentUser() {
  const c = cookies().get('session')?.value;
  if (!c) return null;
  try {
    const decoded = await adminAuth.verifySessionCookie(c, true);
    return decoded; // contains uid, email, and your custom claims (e.g., role)
  } catch {
    return null;
  }
}
