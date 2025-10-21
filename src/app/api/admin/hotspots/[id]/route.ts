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

export async function PATCH(req: Request, ctx: Ctx) {
  try {
    const { id } = await ctx.params;
    if (!id)
      return NextResponse.json({ error: "Missing hotspot id" }, { status: 400 });

    const supa = await createSupabaseServer();
    const { data: auth } = await supa.auth.getUser();
    if (!auth?.user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // 🧩 Fetch existing row for cleanup
    const { data: existing, error: fetchErr } = await supa
      .from("hotspots")
      .select("id,image_url")
      .eq("id", id)
      .single();

    if (fetchErr)
      return NextResponse.json({ error: fetchErr.message }, { status: 404 });

    const ct = req.headers.get("content-type") || "";
    const updates: Record<string, unknown> = {};
    let uploadedPublicUrl: string | null = null;
    let replaceImage = false;

    const clean = (v: unknown) =>
      typeof v === "string" ? v.trim() || null : null;

    // ========== 🧠 FORM-DATA PATCH ==========
    if (ct.includes("multipart/form-data")) {
      const form = await req.formData();

      updates.name = clean(form.get("name"));
      updates.description = clean(form.get("description"));
      updates.level = clean(form.get("level"));
      updates.startdate = clean(form.get("startdate"));
      updates.enddate = clean(form.get("enddate"));
      updates.starttime = clean(form.get("starttime"));
      updates.endtime = clean(form.get("endtime"));
      updates.title = clean(form.get("title"));
      updates.cta_label = clean(form.get("cta_label"));
      updates.cta_href = clean(form.get("cta_href"));


      const clearImage = form.get("clearImage") === "true";
      const fileMaybe = form.get("file");

      // --- CASE 1: New image uploaded ---
      if (fileMaybe && fileMaybe instanceof Blob) {
        await ensureBucket();

        const file = fileMaybe as File;
        const bytes = await file.arrayBuffer();
        const buf = Buffer.from(bytes);
        const mime = (file.type || "application/octet-stream").toLowerCase();

        let ext = file.name?.split(".").pop()?.toLowerCase();
        if (!ext) {
          if (mime.includes("png")) ext = "png";
          else if (mime.includes("jpeg") || mime.includes("jpg")) ext = "jpg";
          else if (mime.includes("webp")) ext = "webp";
          else if (mime.includes("gif")) ext = "gif";
          else ext = "bin";
        }

        const objectPath = `hotspots/${crypto.randomUUID()}.${ext}`;
        const admin = createSupabaseAdmin();
        const { error: upErr } = await admin.storage
          .from(BUCKET)
          .upload(objectPath, buf, {
            contentType: mime,
            upsert: false,
          });
        if (upErr)
          return NextResponse.json({ error: upErr.message }, { status: 500 });

        const { data: pub } = admin.storage.from(BUCKET).getPublicUrl(objectPath);
        uploadedPublicUrl = pub.publicUrl;
        updates.image_url = uploadedPublicUrl;
        replaceImage = true;
      }

      // --- CASE 2: Image was cleared ---
      else if (clearImage && existing?.image_url) {
        const oldPath = toStoragePath(existing.image_url);
        if (oldPath) {
          const admin = createSupabaseAdmin();
          await admin.storage.from(BUCKET).remove([oldPath]);
        }
        updates.image_url = null;
      }
    }

    // ========== 🧠 JSON PATCH (fallback) ==========
    else {
      const body = (await req.json()) as Record<string, unknown>;

      updates.name = clean(body.name);
      updates.description = clean(body.description);
      updates.level = clean(body.level);
      updates.startdate = clean(body.startdate);
      updates.enddate = clean(body.enddate);
      updates.starttime = clean(body.starttime);
      updates.endtime = clean(body.endtime);
      updates.title = clean(body.title);
      updates.cta_href = clean(body.cta_href);
      updates.cta_label = clean(body.cta_label);


      if (body.imageUrl === null && existing?.image_url) {
        const oldPath = toStoragePath(existing.image_url);
        if (oldPath) {
          const admin = createSupabaseAdmin();
          await admin.storage.from(BUCKET).remove([oldPath]);
        }
        updates.image_url = null;
      }
    }

    // 🔹 Remove undefined keys but keep nulls
    Object.keys(updates).forEach((key) => {
      if (updates[key] === undefined) delete updates[key];
    });

    if (Object.keys(updates).length === 0)
      return NextResponse.json({ error: "No changes provided" }, { status: 400 });

    // 🔹 Apply DB update
    const { data: updated, error: updErr } = await supa
      .from("hotspots")
      .update(updates)
      .eq("id", id)
      .select(
        "id,name,description,image_url,level,startdate,enddate,starttime,endtime,title,cta_label, cta_href,updated_at"
      )
      .single();

    if (updErr)
      return NextResponse.json({ error: updErr.message }, { status: 500 });

    // 🧹 Cleanup old file if replaced
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
    const msg = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}


