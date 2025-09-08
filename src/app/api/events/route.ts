import { NextResponse } from 'next/server';
import { createSupabaseServerAnon  } from '../../../../lib/supabase/anon-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const supabase = createSupabaseServerAnon();

  const { data: userCheck } = await supabase.auth.getUser();

  const { data: who } = await supabase.rpc('whoami');
  console.log('whoami =>', who);

  console.log('GET /api/events as anon, user?', userCheck?.user);
  const { data, error } = await supabase
    .from('events_with_status')
    .select('id,title,subheading,description,image_url,publish_at,unpublish_at,computed_status,"order",updated_at,starts_at,ends_at,published')
    .eq('computed_status', 'live')
    .order('order', { ascending: true })
    .order('publish_at', { ascending: false, nullsFirst: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ isAnon: !userCheck?.user, items: data });
}
