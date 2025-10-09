import { NextResponse } from "next/server";
import { createSupabaseServer } from '../../../../../../lib/supabase/server';

export async function POST(req: Request) {
    const supa = await createSupabaseServer();
    const { data: auth } = await supa.auth.getUser();
    if (!auth?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { grouped } = await req.json();

    for (const [level, items] of Object.entries(grouped)) {
      for (const { id, order } of items as unknown as {id: string, order: number}[]) {
        const { error } = await supa
          .from("hotspots")
          .update({ order })
          .eq("id", id)
          .eq("level", level);

        if (error) throw new Error(error.message);
      }
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Error updating order:", e);
    return NextResponse.json(
      { success: false, error: e instanceof Error ? e.message : "Server error" },
      { status: 500 }
    );
  }
}
