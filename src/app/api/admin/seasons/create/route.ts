import { NextResponse } from 'next/server';
import { createSupabaseRoute } from '../../../../../../lib/supabase/route';
import { createSupabaseAdmin } from '../../../../../../lib/supabase/admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BUCKET = 'seasons';

/** Minimal shape for bucket fields (SDKs differ in casing) */
type BucketInfo = {
  allowedMimeTypes?: string[];
  allowed_mime_types?: string[];
  fileSizeLimit?: number | string;
  file_size_limit?: number | string;
};

function toNumber(n: number | string | undefined): number {
  if (typeof n === 'number') return n;
  if (typeof n === 'string') {
    const v = Number(n);
    return Number.isFinite(v) ? v : 0;
  }
  return 0;
}

function isFile(v: FormDataEntryValue | null): v is File {
  if (v === null) return false;
  if (typeof v !== "object") return false;

  // Use `in` operator to avoid `any`
  const hasName = "name" in v && typeof v.name === "string";
  const hasType = "type" in v && typeof v.type === "string";
  const hasSize = "size" in v && typeof v.size === "number";
  const hasArrayBuffer =
    "arrayBuffer" in v && typeof v.arrayBuffer === "function";

  return hasName && hasType && hasSize && hasArrayBuffer;
}

async function ensureBucket(): Promise<void> {
  const admin = createSupabaseAdmin();
  const { data: bucket, error: getErr } = await admin.storage.getBucket(BUCKET);
  if (getErr && !bucket) throw getErr;

  if (!bucket) {
    const { error: cErr } = await admin.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: 50 * 1024 * 1024, // 50MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif'],
    });
    if (cErr) throw cErr;
    return;
  }

  const info = bucket as unknown as BucketInfo;
  const existing = info.allowedMimeTypes ?? info.allowed_mime_types ?? [];
  const wants = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
  const merged = Array.from(new Set([...existing, ...wants]));
  const currentLimit = Math.max(
    toNumber(info.fileSizeLimit ?? info.file_size_limit),
    50 * 1024 * 1024
  );

  const { error: uErr } = await admin.storage.updateBucket(BUCKET, {
    public: true,
    fileSizeLimit: currentLimit,
    allowedMimeTypes: merged,
  });
  if (uErr && !String(uErr.message).includes('No changes')) throw uErr;
}

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

async function uploadFile(file: File, folder: 'images' | 'gifs'): Promise<string> {
  const admin = createSupabaseAdmin();
  const buf = Buffer.from(await file.arrayBuffer());
  const { ext, contentType } = pickExtAndMime(file);
  const id = crypto.randomUUID();
  const objectPath = `${folder}/${id}.${ext}`;

  const { error: upErr } = await admin.storage
    .from(BUCKET)
    .upload(objectPath, buf, { contentType, upsert: false });
  if (upErr) throw upErr;

  const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(objectPath);
  return pub.publicUrl;
}

export async function POST(req: Request) {
  try {
    // ✅ Use createSupabaseRoute for auth operations
    const supabase = await createSupabaseRoute();

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const form = await req.formData();
    const nameRaw = form.get('name');
    const name = typeof nameRaw === 'string' ? nameRaw.trim() : '';

    if (!name) return NextResponse.json({ error: 'Season name required' }, { status: 400 });

    // Accept: image (static), gif (animated), or fallback file
    const imageEntry = form.get('image');
    console.log("imageEntry", imageEntry)
    const gifEntry = form.get('gif');
    const fallbackEntry = form.get('file');

    let imageFile: File | null = isFile(imageEntry) ? imageEntry : null;
    console.log("imageFile", imageFile)

    let gifFile: File | null = isFile(gifEntry) ? gifEntry : null;

    if (!imageFile && !gifFile && isFile(fallbackEntry)) {
      const mime = (fallbackEntry.type || '').toLowerCase();
      if (mime.includes('gif')) gifFile = fallbackEntry;
      else imageFile = fallbackEntry;
    }

    // ✅ Still use admin client for bucket operations (this is correct)
    await ensureBucket();

    let imageUrl: string | null = null;
    let gifUrl: string | null = null;

    if (imageFile) imageUrl = await uploadFile(imageFile, 'images');
    if (gifFile) gifUrl = await uploadFile(gifFile, 'gifs');

    // ✅ Use the route client for database operations
    const { data: row, error: insErr } = await supabase
      .from('seasons')
      .insert({ 
        name, 
        image_url: imageUrl, 
        gif_url: gifUrl,
        created_by: user.id // Optional: track who created it
      })
      .select('id,name,image_url,gif_url,created_at')
      .single();

    if (insErr) {
      return NextResponse.json({ error: insErr.message }, { status: 500 });
    }

    return NextResponse.json({ item: row });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Server error';
    console.error('Season upload error:', e);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}