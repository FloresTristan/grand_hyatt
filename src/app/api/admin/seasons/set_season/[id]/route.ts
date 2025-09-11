import { NextResponse } from 'next/server';
import { createSupabaseServer } from '../../../../../../../lib/supabase/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Ctx = { params: { id: string } };

export async function PATCH(_req: Request, { params }: Ctx) {
  try {
    const supabase = await createSupabaseServer();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const idParam = (params.id || '').trim().toLowerCase();

    // If id is "none" (or "null"), clear the active season
    const newValue = (idParam === 'none' || idParam === 'null') ? null : params.id;

    const { error: upErr } = await supabase
      .from('season_state')
      .update({ active_season: newValue })
      .eq('id', 1);

    if (upErr) return NextResponse.json({ error: upErr.message }, { status: 403 });

    // If we cleared, just return ok
    if (newValue === null) return NextResponse.json({ ok: true, item: null });

    // Otherwise return the chosen season with computed flag
    const { data: season, error: selErr } = await supabase
      .from('seasons_with_active')
      .select('id,name,image_url,is_active,updated_at')
      .eq('id', newValue)
      .single();

    if (selErr) return NextResponse.json({ error: selErr.message }, { status: 500 });
    return NextResponse.json({ ok: true, item: season });
  } catch (e: unknown) {
    return NextResponse.json({ error: e instanceof Error? e?.message : 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Ctx) {
  try {
    const supabase = await createSupabaseServer();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const id = params.id?.trim();
    if (!id) return NextResponse.json({ error: 'Missing season id' }, { status: 400 });

    // Get row first to find the image URL (best-effort cleanup)
    const { data: row, error: selErr } = await supabase
      .from('seasons')
      .select('id,image_url')
      .eq('id', id)
      .single();

    if (selErr) return NextResponse.json({ error: selErr.message }, { status: 404 });

    // Delete DB row
    const { error: delErr } = await supabase.from('seasons').delete().eq('id', id);
    if (delErr) return NextResponse.json({ error: delErr.message }, { status: 500 });

    // If the deleted season was active, season_state.active_season is auto-cleared by FK (ON DELETE SET NULL)

    // Try to remove image from Storage if it’s in our bucket
    if (row?.image_url) {
      try {
        const objectPath = toStoragePath(row.image_url, 'seasons');
        if (objectPath) {
          await supabase.storage.from('seasons').remove([objectPath]);
        }
      } catch {
        // ignore storage cleanup errors
      }
    }

    return NextResponse.json({ ok: true, id });
  } catch (e: unknown) {
    return NextResponse.json({ error: e instanceof Error? e?.message : 'Server error' }, { status: 500 });
  }
}

function toStoragePath(imageUrl: string, bucket = 'seasons'): string | null {
  try {
    const u = new URL(imageUrl);
    const prefix = `/storage/v1/object/public/${bucket}/`;
    const idx = u.pathname.indexOf(prefix);
    if (idx === -1) return null;
    // object name inside the bucket
    const raw = u.pathname.slice(idx + prefix.length);
    return decodeURIComponent(raw);
  } catch {
    return null;
  }
}
