import { NextResponse } from 'next/server'
import { createSupabaseRoute } from '../../../../../lib/supabase/route'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const supabase = await createSupabaseRoute()

  const { data, error } = await supabase
    .from('events_with_status')
    .select('*')
    .order('order', { ascending: true })
    .order('publish_at', { ascending: false, nullsFirst: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ items: data })
}

export async function POST(req: Request) {
  console.log('💡 [POST] HIT ROUTE')

  const supabase = await createSupabaseRoute()
  console.log('💡 Supabase client ready')

  const body = await req.json()
  console.log('💡 Body parsed:', body)

  // AUTH (middleware already blocked bad sessions, but still good to get user)
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  console.log('💡 getUser result:', { user, authError })

  if (authError || !user) {
    console.log('❌ Unauthorized:', authError)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  console.log('💡 Authenticated user:', user.id)

  Object.keys(body).forEach((key) => {
    if (body[key] === undefined) body[key] = null
  })

  const payload = {
    title: body.title,
    subheading: body.subheading,
    description: body.description,
    start_date: body.startDate,
    end_date: body.endDate,
    start_time: body.startTime,
    end_time: body.endTime,
    cta_label: body.ctaLabel,
    cta_href: body.ctaHref,
    image_url: body.image_url,
    published: body.published,
    publish_at: body.publishAt,
    unpublish_at: body.unpublishAt,
    order: body.order ?? 0,
    updated_by: user.id,
  }

  console.log('💡 Payload ready:', payload)

  const { data, error } = await supabase
    .from('events')
    .insert(payload)
    .select()
    .single()

  console.log('💡 Insert finished:', { error, data })

  if (error) {
    console.log('❌ DB error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  console.log('✅ Success:', data)
  return NextResponse.json({ item: data })
}
