import 'server-only';
import type { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import { adminAuth } from '../../../lib/firebase/admin.ts';
import type { DecodedIdToken } from 'firebase-admin/auth';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();                         // ✅ await
  const session = cookieStore.get('session')?.value ?? null;
  if (!session) redirect('/login');

  let decoded: DecodedIdToken | null = null;
  try {
    decoded = await adminAuth.verifySessionCookie(session, true);
  } catch {
    redirect('/login');
  }
  if (!decoded) redirect('/login');

//   const isAdmin = (decoded as unknown)?.role === 'admin' || (decoded as unknown)?.admin === true;
//   if (!isAdmin) notFound();

  return <>{children}</>;
}
