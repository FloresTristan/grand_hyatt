import { NextResponse } from 'next/server';
import { createSupabaseServer } from '../../../../../../lib/supabase/server';
import { createSupabaseAdmin } from '../../../../../../lib/supabase/admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Ctx = { params: Promise<{ id: string }> };

const BUCKET = 'hotspots';

function toStoragePath(publicUrl: string): string | null {
  try {
    const u = new URL(publicUrl);
    const prefix = `/storage/v1/object/public/${BUCKET}/`;
    const ix = u.pathname.indexOf(prefix);
    if (ix === -1) return null;
    return u.pathname.slice(ix + prefix.length);
  } catch {
    return null;
  }
}

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

/** DELETE stays as you have it */
export async function DELETE(_req: Request, ctx: Ctx) {
  try {
    const { id } = await ctx.params;
    if (!id) return NextResponse.json({ error: 'Missing hotspot id' }, { status: 400 });

    const supa = await createSupabaseServer();
    const { data: auth } = await supa.auth.getUser();
    if (!auth?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data: row, error: selErr } = await supa
      .from('hotspots')
      .select('id,image_url')
      .eq('id', id)
      .single();
    if (selErr) return NextResponse.json({ error: selErr.message }, { status: 404 });

    const { error: delErr } = await supa.from('hotspots').delete().eq('id', id);
    if (delErr) return NextResponse.json({ error: delErr.message }, { status: 500 });

    if (row?.image_url) {
      try {
        const path = toStoragePath(row.image_url);
        if (path) await supa.storage.from(BUCKET).remove([path]);
      } catch {
        /* ignore storage cleanup failures */
      }
    }

    return NextResponse.json({ ok: true, id });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Server error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/** PATCH: update fields and optionally replace image */
export async function PATCH(req: Request, ctx: Ctx) {
  try {
    const { id } = await ctx.params;
    if (!id) return NextResponse.json({ error: 'Missing hotspot id' }, { status: 400 });

    const supa = await createSupabaseServer();
    const { data: auth } = await supa.auth.getUser();
    if (!auth?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    // Fetch existing row once (for old image cleanup if needed)
    const { data: existing, error: fetchErr } = await supa
      .from('hotspots')
      .select('id,image_url')
      .eq('id', id)
      .single();
    if (fetchErr) return NextResponse.json({ error: fetchErr.message }, { status: 404 });

    const ct = req.headers.get('content-type') || '';
    const updates: Record<string, unknown> = {};

    // Helpers
    const toNum = (v: unknown): number | null => {
      if (v === null || v === undefined) return null;
      const n = Number(v);
      return Number.isFinite(n) ? n : null;
    };

    let uploadedPublicUrl: string | null = null;
    let replaceImage = false;

    if (ct.includes('multipart/form-data')) {
      // With file
      const form = await req.formData();

      const name = form.get('name');
      const description = form.get('description');
      const scene = form.get('scene');
      const ath = form.get('ath');
      const atv = form.get('atv');

      if (typeof name === 'string' && name.trim()) updates.name = name.trim();
      if (typeof description === 'string') updates.description = description.trim() || null;
      if (typeof scene === 'string') updates.scene = scene.trim() || null;

      const athNum = toNum(typeof ath === 'string' ? ath : null);
      const atvNum = toNum(typeof atv === 'string' ? atv : null);
      if (athNum !== null) updates.ath = athNum;
      if (atvNum !== null) updates.atv = atvNum;

      const fileMaybe = form.get('file');
      if (fileMaybe && fileMaybe instanceof Blob) {
        // Upload new image
        await ensureBucket();

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
        uploadedPublicUrl = pub.publicUrl;
        updates.image_url = uploadedPublicUrl;
        replaceImage = true;
      }
    } else {
      // JSON body
      const body = (await req.json()) as unknown;
      if (typeof body === 'object' && body !== null) {
        const b = body as Record<string, unknown>;
        if (typeof b.name === 'string' && b.name.trim()) updates.name = b.name.trim();
        if (typeof b.description === 'string') updates.description = b.description.trim() || null;
        if (typeof b.scene === 'string') updates.scene = b.scene.trim() || null;

        const athNum = toNum(b.ath);
        const atvNum = toNum(b.atv);
        if (athNum !== null) updates.ath = athNum;
        if (atvNum !== null) updates.atv = atvNum;

        // Optional: allow clearing image via { imageUrl: null }
        if (b.imageUrl === null) updates.image_url = null;
      }
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No changes provided' }, { status: 400 });
    }

    const { data: updated, error: updErr } = await supa
      .from('hotspots')
      .update(updates)
      .eq('id', id)
      .select('id,name,description,image_url,scene,ath,atv,updated_at')
      .single();

    if (updErr) return NextResponse.json({ error: updErr.message }, { status: 500 });

    // If we uploaded a new image, try removing the old one
    if (replaceImage && existing?.image_url && uploadedPublicUrl) {
      try {
        const oldPath = toStoragePath(existing.image_url);
        if (oldPath) await supa.storage.from(BUCKET).remove([oldPath]);
      } catch {
        /* ignore cleanup errors */
      }
    }

    return NextResponse.json({ item: updated });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Server error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
