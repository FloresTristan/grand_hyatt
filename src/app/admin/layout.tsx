
import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import { adminAuth, adminDb } from '../../../lib/firebase/admin';
import NavBar from '../components/navbar';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  // First-run check
  const anyUser = await adminDb.collection('users').limit(1).get();
  if (anyUser.empty) {
    redirect('/signup');
  }

  // Normal auth gate
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  if (!session) redirect('/login');

  const decoded = await adminAuth.verifySessionCookie(session, true).catch(() => null);
  if (!decoded) redirect('/login');

  const claims = decoded as unknown;
  const isAdmin = claims.admin === true || claims.role === 'admin';
  if (!isAdmin) notFound();

  return(
    <>
      <NavBar/>
      {children}
    </>
  );
}
