import { NextResponse } from 'next/server';
import { createSupabaseServerAnon } from '../../../../lib/supabase/anon-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const supabase = await createSupabaseServerAnon();

    const { data, error } = await supabase
      .from('seasons_with_active')
      .select('id,name,image_url,gif_url,created_at,is_active')
      .order('created_at', { ascending: true })
      .order('is_active', { ascending: true });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ items: data ?? [] });
  } catch (e: unknown) {
    return NextResponse.json({ error: e instanceof Error? e?.message: 'Server error' }, { status: 500 });
  }
}
