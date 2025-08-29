import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { createSupabaseServer } from '../../../lib/supabase/server.ts';

export const dynamic = 'force-dynamic';

export default async function SignupLayout({ children }: { children: ReactNode }) {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  return <>{children}</>;
}
