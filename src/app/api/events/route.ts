import { NextResponse } from 'next/server';
import { createSupabaseServer } from '../../../../lib/supabase/server';

export const runtime = 'nodejs';

export async function GET() {
  const supabase = await createSupabaseServer(); 

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('order', { ascending: true })
    .order('updated_at', { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ items: data });
}

export async function POST(req: Request) {
  const supabase = await createSupabaseServer();
  const body = await req.json();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const payload = {
    title: body.title, subheading: body.subheading, description: body.description,
    start_date: body.startDate || null,
    end_date: body.endDate || null,
    start_time: body.startTime || null,
    end_time: body.endTime || null,
    cta_label: body.ctaLabel,
    cta_href: body.ctaHref,
    image_url: body.image_url || null,
    image_path: body.image_path || null,
    status: body.status || 'draft',
    order: body.order ?? 0,
    updated_by: user.id
  };

  const { data, error } = await supabase.from('events').insert(payload).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ item: data });
}
