import { ReactNode } from 'react';
import { redirect, notFound } from 'next/navigation';
import NavBar from '../components/navbar';
import { createSupabaseAdmin } from '../../../lib/supabase/admin';
import { createSupabaseServer } from '../../../lib/supabase/server.ts'

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const admin = createSupabaseAdmin();
  const { count: profilesCount, error: profilesErr } = await admin
    .from('profiles')                      
    .select('id', { head: true, count: 'exact' });
  if (profilesErr) {
    console.log("error", profilesErr)
  }
  if ((profilesCount ?? 0) === 0) {
    redirect('/signup'); 
    console.log(count)
  }

  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const role = (user.app_metadata as unknown)?.role ?? 'user';
  if (role !== 'admin' && role !== 'editor') notFound();

  return (
    <>
      <NavBar role={role} />
      {children}
    </>
  );
}
