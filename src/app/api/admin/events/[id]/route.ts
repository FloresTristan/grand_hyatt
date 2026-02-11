import { NextResponse } from "next/server";
import { createSupabaseRoute } from "../../../../../../lib/supabase/route";
import { createSupabaseAdmin } from "../../../../../../lib/supabase/admin";

export const runtime = "nodejs";
type Ctx = { params: Promise<{ id: string }> };

function isFile(v: FormDataEntryValue | null): v is File {
  if (v === null) return false;
  if (typeof v !== "object") return false;

  const hasName = "name" in v && typeof v.name === "string";
  const hasType = "type" in v && typeof v.type === "string";
  const hasSize = "size" in v && typeof v.size === "number";
  const hasBuffer = "arrayBuffer" in v && typeof v.arrayBuffer === "function";

  return hasName && hasType && hasSize && hasBuffer;
}

async function uploadEventImage(file: File) {
  const admin = createSupabaseAdmin();

  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const buf = Buffer.from(await file.arrayBuffer());
  const id = crypto.randomUUID();
  const objectPath = `events/${id}.${ext}`;

  const { error: upErr } = await admin.storage
    .from("events")
    .upload(objectPath, buf, {
      contentType: file.type || "image/jpeg",
      upsert: false,
    });

  if (upErr) throw upErr;

  const { data: pub } = admin.storage.from("events").getPublicUrl(objectPath);

  return {
    image_url: pub?.publicUrl ?? null,
    image_path: objectPath,
  };
}

export function toStoragePath(urlOrPath?: string | null, bucket = "events") {
  if (!urlOrPath) return null;

  if (!/^https?:\/\//i.test(urlOrPath)) {
    const noBucket = urlOrPath.replace(new RegExp(`^${bucket}/`), "");
    return noBucket || null;
  }

  try {
    const u = new URL(urlOrPath);
    const m = u.pathname.match(
      new RegExp(`/object/(?:public|sign)/${bucket}/(.+)$`)
    );
    if (m && m[1]) return m[1];
  } catch {}

  return null;
}

export async function GET(_req: Request, { params }: Ctx) {
  const { id } = await params;
  const supabase = await createSupabaseRoute();

  const { data, error } = await supabase
    .from("events_with_status")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json({ item: data });
}

export async function PATCH(req: Request, { params }: Ctx) {
  try {
    const { id } = await params;
    const supabase = await createSupabaseRoute();
    const admin = createSupabaseAdmin();

    const form = await req.formData();

    // AUTH
    const { data: auth, error: authErr } = await supabase.auth.getUser();
    if (authErr || !auth.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Read existing row
    const { data: existing, error: existErr } = await supabase
      .from("events")
      .select("image_url")
      .eq("id", id)
      .single();

    if (existErr) {
      return NextResponse.json({ error: existErr.message }, { status: 404 });
    }

    let imageFile = form.get("image");
    imageFile = isFile(imageFile) ? imageFile : null;

    let newImageUrl = null;

    // If new file, upload via admin
    if (imageFile) {
      const uploaded = await uploadEventImage(imageFile);
      newImageUrl = uploaded.image_url;

      // remove old file
      const oldPath = toStoragePath(existing.image_url, "events");
      if (oldPath) {
        // await admin.storage.from("events").remove([oldPath]).catch(() => {});
        const admin = createSupabaseAdmin();
        await admin.storage.from("events").remove([oldPath]);
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const payload: any = {
      title: form.get("title") || null,
      subheading: form.get("subheading") || null,
      description: form.get("description") || null,
      start_date: form.get("start_date") || null,
      end_date: form.get("end_date") || null,
      start_time: form.get("start_time") || null,
      end_time: form.get("end_time") || null,
      cta_label: form.get("cta_label") || null,
      cta_href: form.get("cta_href") || null,
      published: form.get("published") === "true",
      publish_at: form.get("publish_at") || null,
      unpublish_at: form.get("unpublish_at") || null,
      updated_by: auth.user.id,
    };

    if (newImageUrl) {
      payload.image_url = newImageUrl;
    }

    const { data, error } = await supabase
      .from("events")
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ item: data });
  } catch (e: unknown) {
    return NextResponse.json(
      { error: e instanceof Error? e?.message : "Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(_req: Request, { params }: Ctx) {
  try {
    const { id } = await params;
    const supabase = await createSupabaseRoute();
    const admin = createSupabaseAdmin();

    const { data: ev, error: readErr } = await supabase
      .from("events")
      .select("image_url")
      .eq("id", id)
      .single();

    if (readErr) {
      return NextResponse.json({ error: readErr.message }, { status: 404 });
    }

    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const path = toStoragePath(ev?.image_url, "events");
    if (path) {
      await admin.storage.from("events").remove([path]).catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message :"Server error" },
      { status: 500 }
    );
  }
}
