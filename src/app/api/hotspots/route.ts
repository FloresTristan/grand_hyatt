import { NextResponse } from 'next/server';
import { createSupabaseServerAnon } from '../../../../lib/supabase/anon-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const supabase = createSupabaseServerAnon();
    const url = new URL(req.url);

    const scene = url.searchParams.get('scene') || null;
    const limit = Math.min(Number(url.searchParams.get('limit') || 50), 200);
    const offset = Math.max(Number(url.searchParams.get('offset') || 0), 0);
    const order = (url.searchParams.get('order') || 'created_at.desc').toLowerCase();

    // order parsing: "created_at.desc" | "created_at.asc"
    const [col, dir] = order.split('.');
    const ascending = dir !== 'desc';

    let q = supabase
      .from('hotspots')
      .select('id,name,description,image_url,scene,ath,atv,created_at,updated_at', { count: 'exact' });

    if (scene) q = q.eq('scene', scene);

    q = q.order(col || 'created_at', { ascending });

    // pagination
    const from = offset;
    const to = offset + limit - 1;
    const { data, error, count } = await q.range(from, to);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ items: data ?? [], count: count ?? 0, limit, offset });
  } catch (e: unknown) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Server error' }, { status: 500 });
  }
}
