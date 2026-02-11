import { createClient } from "@supabase/supabase-js";
import 'dotenv/config';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const BUCKET = "hotspots";

function extractFileNameFromUrl(url: string | null): string | null {
  if (!url) return null;

  try {
    const u = new URL(url);
    const parts = u.pathname.split(`${BUCKET}/`);
    if (parts.length < 2) return null;
    return parts[1]; // hotspots/uuid.jpg
  } catch {
    return null;
  }
}

async function runCleanup() {
  console.log("🔍 Starting orphan cleanup...\n");

  // 1️⃣ Get all DB image URLs
  const { data: rows, error: dbError } = await supabaseAdmin
    .from("hotspots")
    .select("image_url");

  if (dbError) {
    console.error("❌ Failed to fetch hotspots:", dbError);
    return;
  }

  const usedFiles = new Set<string>();

  for (const row of rows ?? []) {
    const file = extractFileNameFromUrl(row.image_url);
    if (file) usedFiles.add(file);
  }

  console.log(`📦 Found ${usedFiles.size} files referenced in DB`);

  // 2️⃣ Get all files from bucket (pagination safe)
  let allFiles: any[] = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const { data, error } = await supabaseAdmin.storage
      .from(BUCKET)
      .list("hotspots", {
        limit,
        offset,
      });

    if (error) {
      console.error("❌ Failed to list bucket:", error);
      return;
    }

    if (!data || data.length === 0) break;

    allFiles = allFiles.concat(data);
    offset += limit;
  }

  console.log(`🗂 Found ${allFiles.length} files in storage`);

  // 3️⃣ Detect orphan files
  const orphanFiles = allFiles
    .map((f) => `hotspots/${f.name}`)
    .filter((filePath) => !usedFiles.has(filePath));

  console.log(`🧹 Found ${orphanFiles.length} orphan files\n`);

  if (orphanFiles.length === 0) {
    console.log("✅ No orphan files found. Cleanup complete.");
    return;
  }

  // 4️⃣ Delete orphan files
  const { data: deleted, error: deleteError } =
    await supabaseAdmin.storage.from(BUCKET).remove(orphanFiles);

  if (deleteError) {
    console.error("❌ Failed to delete orphan files:", deleteError);
    return;
  }

  console.log(`🔥 Deleted ${deleted?.length ?? 0} orphan files.`);
  console.log("✅ Cleanup complete.");
}

runCleanup();
