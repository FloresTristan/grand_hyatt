
import { ReactNode } from 'react';
import { redirect, notFound } from 'next/navigation';
import NavBar from '../components/navbar';
import { createSupabaseServer } from '../../../lib/supabase/server.ts';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createSupabaseServer(); // <-- await

  // bootstrap check
  const { count } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
  if ((count ?? 0) === 0) redirect('/signup');

  // auth
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const role = (user.app_metadata as unknown)?.role ?? 'user';
  if (role !== 'admin') notFound();

  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
