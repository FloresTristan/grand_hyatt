import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

function adminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!; // server-only
  return createClient(url, key);
}

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();
    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const supa = adminClient();

    // Allow only if there are no profiles yet (first user bootstrap)
    const { count, error: countErr } = await supa
      .from('profiles')
      .select('id', { count: 'exact', head: true });
    if (countErr) throw countErr;
    if ((count ?? 0) > 0) {
      return NextResponse.json({ error: 'Bootstrap already completed' }, { status: 403 });
    }

    // Create user as ADMIN
    const { data, error } = await supa.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      app_metadata: { role: 'admin' },              // auth-level role
      user_metadata: { display_name: name },
    });
    if (error) throw error;
    const user = data.user!;
    
    // Create profile row
    const { error: pe } = await supa.from('profiles').insert({
      id: user.id,
      display_name: name,
      role: 'admin',
      disabled: false,
    });
    if (pe) throw pe;

    return NextResponse.json({ ok: true, uid: user.id });
  } catch (e: unknown) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
