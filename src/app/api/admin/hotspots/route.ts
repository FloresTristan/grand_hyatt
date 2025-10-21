import { NextResponse } from 'next/server';
import { createSupabaseServer } from '../../../../../lib/supabase/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const supabase = await createSupabaseServer();
    const { data: auth } = await supabase.auth.getUser();
    if (!auth?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const role = (auth.user.app_metadata as { role?: string } | null)?.role ?? 'user';
    if (!['admin', 'editor', 'super-admin'].includes(role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const url = new URL(req.url);
    const scene = url.searchParams.get('scene') || null;

    let q = supabase
      .from('hotspots')
      .select('id,name,description,image_url,level,order,startdate,enddate,starttime,endtime,title,cta_label,cta_href,created_at,updated_at')
      .order('order', { ascending:  true });

    if (scene) q = q.eq('scene', scene);

    const { data, error } = await q;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ items: data ?? [] });
  } catch (e: unknown) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Server error' }, { status: 500 });
  }
}
