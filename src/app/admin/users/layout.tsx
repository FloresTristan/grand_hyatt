import { ReactNode } from 'react';
import { notFound, redirect } from 'next/navigation';
import { createSupabaseServer } from '../../../../lib/supabase/server';

export default async function UsersLayout({ children }: { children: ReactNode }) {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const role = (user.app_metadata as unknown)?.role ?? 'editor';
  
  if (role === 'editor') notFound(); 
  return <>{children}</>;
}
