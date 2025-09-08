
import { NextResponse } from 'next/server';
import { createSupabaseServer } from '../../../../../../lib/supabase/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { ids } = await req.json();
  if (!Array.isArray(ids)) return NextResponse.json({ error: 'Bad body' }, { status: 400 });

  for (let i = 0; i < ids.length; i++) {
    const { error } = await supabase.from('events').update({ order: i }).eq('id', ids[i]);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, count: ids.length });
}
