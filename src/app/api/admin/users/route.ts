import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // server-only!
  );
}

export async function GET() {
  try {
    const supa = adminClient();
    const { data, error } = await supa.auth.admin.listUsers();
    if (error) throw error;

    // map to your table shape
    const items = data.users.map(u => ({
      uid: u.id,
      email: u.email!,
      displayName: (u.user_metadata as unknown)?.display_name || '',
      role: (u.app_metadata as unknown)?.role || 'user',
      disabled: u.banned_until ? true : false,
      createdAt: u.created_at ? new Date(u.created_at).getTime() : undefined,
      lastLoginAt: u.last_sign_in_at ? new Date(u.last_sign_in_at).getTime() : undefined,
    }));

    return NextResponse.json({ items });
  } catch (e: unknown) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
