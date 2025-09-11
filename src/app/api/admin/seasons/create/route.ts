import { NextResponse } from 'next/server';
import { createSupabaseServer } from '../../../../../../lib/supabase/server';
import { createSupabaseAdmin } from '../../../../../../lib/supabase/admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BUCKET = 'seasons';

async function ensureBucket() {
  const admin = createSupabaseAdmin();

  const { data: bucket } = await admin.storage.getBucket(BUCKET);

  if (!bucket) {
    // create fresh, already allowing GIFs
    const { error: cErr } = await admin.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: 50 * 1024 * 1024, // 50MB; adjust as needed
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif'],
    });
    if (cErr) throw cErr;
    return;
  }

  // bucket exists → make sure it’s public AND accepts GIFs
  const current = (bucket.allowed_mime_types ?? []) as string[];
  const wants = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
  const updated = Array.from(new Set([...current, ...wants]));

  const { error: uErr } = await admin.storage.updateBucket(BUCKET, {
    public: true,
    fileSizeLimit: Math.max(Number(bucket.file_size_limit ?? 0), 50 * 1024 * 1024),
    allowedMimeTypes: updated,
  });
  if (uErr && !uErr.message?.includes('No changes')) throw uErr;
}


export async function POST(req: Request) {
  try {
    const supa = await createSupabaseServer();

    const { data: { user } } = await supa.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const form = await req.formData();
    const name = String(form.get('name') || '').trim();
    const file = form.get('file') as unknown as File | null;

    if (!name) return NextResponse.json({ error: 'Season name required' }, { status: 400 });

    await ensureBucket();

    let imageUrl: string | null = null;

    if (file && typeof file.arrayBuffer === 'function') {
      const buf = Buffer.from(await file.arrayBuffer());
      const mime = (file.type || '').toLowerCase();

      let ext = file.name?.split('.').pop()?.toLowerCase();
      if (!ext) {
        if (mime.includes('png')) ext = 'png';
        else if (mime.includes('jpeg') || mime.includes('jpg')) ext = 'jpg';
        else if (mime.includes('webp')) ext = 'webp';
        else if (mime.includes('gif')) ext = 'gif';
        else ext = 'bin';
      }

      const id = crypto.randomUUID();
      const objectPath = `seasons/${id}.${ext}`;

      const admin = createSupabaseAdmin();
      const { error: upErr } = await admin.storage
        .from(BUCKET)
        .upload(objectPath, buf, {
          contentType: mime || 'application/octet-stream',
          upsert: false,
        });
      if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 });

      const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(objectPath);
      imageUrl = pub.publicUrl;
    }

    const { data: row, error: insErr } = await supa
      .from('seasons')
      .insert({ name, image_url: imageUrl })
      .select('id,name,image_url,created_at')
      .single();

    if (insErr) return NextResponse.json({ error: insErr.message }, { status: 500 });

    return NextResponse.json({ item: row });
  } catch (e: unknown) {
    return NextResponse.json({ error: e instanceof Error? e?.message : 'Server error' }, { status: 500 });
  }
}
