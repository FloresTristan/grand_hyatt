import { NextResponse } from 'next/server';
import { createSupabaseServer } from '../../../../../../lib/supabase/server';
import { createSupabaseAdmin } from '../../../../../../lib/supabase/admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BUCKET = 'hotspots';

async function ensureBucket() {
  const admin = createSupabaseAdmin();
  const { data: bucket } = await admin.storage.getBucket(BUCKET);

  if (!bucket) {
    const { error } = await admin.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: 50 * 1024 * 1024,
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif'],
    });
    if (error) throw error;
    return;
  }

  const have = (bucket.allowed_mime_types ?? []) as string[];
  const want = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
  const allow = Array.from(new Set([...have, ...want]));
  const { error } = await admin.storage.updateBucket(BUCKET, {
    public: true,
    fileSizeLimit: Math.max(Number(bucket.file_size_limit ?? 0), 50 * 1024 * 1024),
    allowedMimeTypes: allow,
  });
  if (error && !String(error.message || '').includes('No changes')) throw error;
}

export async function POST(req: Request) {
  try {
    const supa = await createSupabaseServer();
    const { data: auth } = await supa.auth.getUser();
    if (!auth?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const form = await req.formData();
    const name = String(form.get('name') ?? '').trim();
    const description = String(form.get('description') ?? '').trim() || null;
    const fileMaybe = form.get('file');
    const level = String(form.get('level')?? '').trim() || null;
    const startdate = String(form.get('startdate')?? '').trim() || null;
    const enddate = String(form.get('enddate')?? '').trim() || null;
    const starttime = String(form.get('starttime')?? '').trim() || null;
    const endtime = String(form.get('endtime')?? '').trim() || null;
    const title = String(form.get('title')?? '').trim() || null;
    const cta_label = String(form.get('cta_label')?? '').trim() || null;
    const cta_href = String(form.get('cta_href')?? '').trim() || null;



    if (!name) return NextResponse.json({ error: 'Name is required' }, { status: 400 });

    await ensureBucket();

    let imageUrl: string | null = null;

    if (fileMaybe && fileMaybe instanceof Blob) {
      const file = fileMaybe as File;
      const bytes = await file.arrayBuffer();
      const buf = Buffer.from(bytes);
      const mime = (file.type || 'application/octet-stream').toLowerCase();

      let ext = file.name?.split('.').pop()?.toLowerCase();
      if (!ext) {
        if (mime.includes('png')) ext = 'png';
        else if (mime.includes('jpeg') || mime.includes('jpg')) ext = 'jpg';
        else if (mime.includes('webp')) ext = 'webp';
        else if (mime.includes('gif')) ext = 'gif';
        else ext = 'bin';
      }

      const objectPath = `hotspots/${crypto.randomUUID()}.${ext}`;
      const admin = createSupabaseAdmin();
      const { error: upErr } = await admin.storage.from(BUCKET).upload(objectPath, buf, {
        contentType: mime,
        upsert: false,
      });
      if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 });

      const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(objectPath);
      imageUrl = pub.publicUrl;
    }

    const { data: row, error: insErr } = await supa
      .from('hotspots')
      .insert({
        name,
        description,
        image_url: imageUrl,
        level,
        startdate,
        enddate,
        starttime,
        endtime,
        title,
        cta_label,
        cta_href
      })
      .select('id,name,description,image_url,level,startdate,enddate,starttime,endtime,created_at')
      .single();

    if (insErr) return NextResponse.json({ error: insErr.message }, { status: 500 });
    return NextResponse.json({ item: row });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Server error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
