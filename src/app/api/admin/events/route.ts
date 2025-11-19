import { NextResponse } from 'next/server';
import { createSupabaseRoute } from '../../../../../lib/supabase/route';
import { createSupabaseAdmin } from '../../../../../lib/supabase/admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BUCKET = 'events';

function pickExtAndMime(file: File): { ext: string; contentType: string } {
  const name = (file.name || '').toLowerCase();
  const extFromName = name.includes('.') ? name.split('.').pop() ?? '' : '';
  const mime = (file.type || '').toLowerCase();

  let ext = extFromName;
  if (!ext) {
    if (mime.includes('png')) ext = 'png';
    else if (mime.includes('jpeg') || mime.includes('jpg')) ext = 'jpg';
    else if (mime.includes('webp')) ext = 'webp';
    else if (mime.includes('gif')) ext = 'gif';
    else ext = 'bin';
  }

  let contentType = mime;
  if (!contentType) {
    if (ext === 'png') contentType = 'image/png';
    else if (ext === 'jpg' || ext === 'jpeg') contentType = 'image/jpeg';
    else if (ext === 'webp') contentType = 'image/webp';
    else if (ext === 'gif') contentType = 'image/gif';
    else contentType = 'application/octet-stream';
  }

  return { ext, contentType };
}

async function uploadFile(file: File): Promise<{ url: string; path: string }> {
  const admin = createSupabaseAdmin();
  const buf = Buffer.from(await file.arrayBuffer());
  const id = crypto.randomUUID();
  const { ext, contentType } = pickExtAndMime(file);

  const objectPath = `images/${id}.${ext}`;

  const { error: upErr } = await admin.storage
    .from(BUCKET)
    .upload(objectPath, buf, { contentType, upsert: false });

  if (upErr) throw upErr;

  const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(objectPath);
  return { url: pub.publicUrl!, path: objectPath };
}

function isFile(v: FormDataEntryValue | null): v is File {
  if (v === null) return false;
  if (typeof v !== "object") return false;

  const hasName = "name" in v && typeof v.name === "string";
  const hasType = "type" in v && typeof v.type === "string";
  const hasSize = "size" in v && typeof v.size === "number";
  const hasArrayBuffer =
    "arrayBuffer" in v && typeof v.arrayBuffer === "function";

  return hasName && hasType && hasSize && hasArrayBuffer;
}


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
  try {
    const supabase = await createSupabaseRoute();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const form = await req.formData();

    const title = form.get('title')?.toString() ?? '';
    if (!title.trim()) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const imageEntry = form.get('image');
    const imageFile = isFile(imageEntry) ? imageEntry : null;

    let image_url: string | null = null;

    if (imageFile) {
      const up = await uploadFile(imageFile);
      image_url = up.url;
    }

    const payload = {
      title,
      subheading: form.get('subheading')?.toString() || null,
      description: form.get('description')?.toString() || null,
      start_date: form.get('start_date') || null,
      end_date: form.get('end_date') || null,
      start_time: form.get('start_time') || null,
      end_time: form.get('end_time') || null,
      cta_label: form.get('cta_label')?.toString() || null,
      cta_href: form.get('cta_href')?.toString() || null,
      image_url,
      published: form.get('published') === 'true',
      publish_at: form.get('publish_at') || null,
      unpublish_at: form.get('unpublish_at') || null,
      order: Number(form.get('order') || 0),
      updated_by: user.id,
    };

    const { data, error } = await supabase
      .from('events')
      .insert(payload)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ item: data });
  } catch (err: unknown) {
    console.error('EVENT UPLOAD ERROR:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Server error' },
      { status: 500 }
    );
  }
}
