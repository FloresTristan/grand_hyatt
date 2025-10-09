import { NextResponse } from 'next/server';
import { createSupabaseServerAnon } from '../../../../lib/supabase/anon-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const supabase = createSupabaseServerAnon();
    const url = new URL(req.url);

    const limit = Math.min(Number(url.searchParams.get('limit') || 50), 200);
    const offset = Math.max(Number(url.searchParams.get('offset') || 0), 0);
    const order = (url.searchParams.get('order') || 'order.asc').toLowerCase();

    // parse "column.direction"
    const [col, dir] = order.split('.');
    const ascending = dir !== 'desc';

    let q = supabase
      .from('hotspots')
      .select('id,name,description,image_url,level,order,startdate,enddate,starttime,endtime,created_at,updated_at', { count: 'exact' });

    // Always sort first by level (grouping)
    q = q.order('level', { ascending: true });

    // Then sort within each level by your order (drag order)
    if (col === 'order') {
      q = q.order('order', { ascending });
    } else {
      q = q.order(col || 'created_at', { ascending });
    }

    // pagination
    const from = offset;
    const to = offset + limit - 1;

    const { data, error, count } = await q.range(from, to);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      items: data ?? [],
      count: count ?? 0,
      limit,
      offset,
    });
  } catch (e: unknown) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Server error' },
      { status: 500 }
    );
  }
}
