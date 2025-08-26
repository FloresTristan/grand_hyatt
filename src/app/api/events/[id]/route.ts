import { NextResponse } from 'next/server';
import { createSupabaseServer } from '../../../../../lib/supabase/server';

export const runtime = 'nodejs';
type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, ctx: Ctx) {
  const { id } = await ctx.params;
  const supabase = await createSupabaseServer();
  const { data, error } = await supabase.from('events').select('*').eq('id', id).single();
  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json({ item: data });
}

export async function PATCH(req: Request, ctx: Ctx) {
  const { id } = await ctx.params;
  const supabase = await createSupabaseServer();
  const body = await req.json();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const update: unknown = {
    title: body.title,
    subheading: body.subheading,
    description: body.description,
    start_date: body.startDate,
    end_date: body.endDate,
    start_time: body.startTime,
    cta_label: body.ctaLabel,
    cta_href: body.ctaHref,
    image_url: body.imageUrl,
    status: body.status,
    order: typeof body.order === 'number' ? body.order : undefined,
    updated_at: new Date().toISOString(),
    updated_by: user.id,
  };

  Object.keys(update).forEach(k => update[k] === undefined && delete update[k]);

  const { error } = await supabase.from('events').update(update).eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, id });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const { id } = await ctx.params;
  const supabase = await createSupabaseServer();
  const { error } = await supabase.from('events').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
