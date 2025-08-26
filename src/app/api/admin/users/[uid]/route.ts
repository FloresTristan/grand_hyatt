import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
const admin = () => createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

type Ctx = { params: Promise<{ uid: string }> };

export async function PATCH(req: Request, ctx: Ctx) {
  try {
    const { uid } = await ctx.params;
    const body = await req.json();

    const updates: unknown = {};
    if (typeof body.displayName === 'string') updates.user_metadata = { display_name: body.displayName };
    if (typeof body.role === 'string') updates.app_metadata = { role: String(body.role).toLowerCase() };
    if (typeof body.disabled === 'boolean') updates.ban_duration = body.disabled ? '100y' : null;
    if (typeof body.password === 'string' && body.password.length >= 6) updates.password = body.password;

    if (Object.keys(updates).length) {
      const { error } = await admin().auth.admin.updateUserById(uid, updates);
      if (error) throw error;
    }

    // mirror to profiles
    const prof: unknown = { updated_at: new Date().toISOString() };
    if (typeof body.displayName === 'string') prof.display_name = body.displayName;
    if (typeof body.role === 'string') prof.role = String(body.role).toLowerCase();
    if (typeof body.disabled === 'boolean') prof.disabled = body.disabled;
    if (Object.keys(prof).length > 0) {
      await admin().from('profiles').update(prof).eq('id', uid);
    }

    return NextResponse.json({ ok: true, uid });
  } catch (e: unknown) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, ctx: Ctx) {
  try {
    const { uid } = await ctx.params;
    const { error } = await admin().auth.admin.deleteUser(uid);
    if (error) throw error;
    await admin().from('profiles').delete().eq('id', uid);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
