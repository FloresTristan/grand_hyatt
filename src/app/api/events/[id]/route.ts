export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth, adminDb } from '../../../../../lib/firebase/admin';

async function requireAdmin() {
  const c = await cookies();
  const session = c.get('session')?.value;
  if (!session) throw new Response('Unauthorized', { status: 401 });
  const decoded = await adminAuth.verifySessionCookie(session, true);
  const claims = decoded as unknown;
  const isAdmin = claims?.admin === true || claims?.role === 'admin';
  if (!isAdmin) throw new Response('Forbidden', { status: 403 });
  return decoded;
}

// 👇 Note the ctx type: { params: Promise<{ id: string }> } and the await
export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireAdmin();
    const { id } = await ctx.params;     // <-- await params
    const body = await req.json();

    const allowed = [
      'title','subheading','description',
      'startDate','endDate','startTime',
      'ctaLabel','ctaHref','status','imageDataUrl'
    ] as const;

    const update: Record<string, unknown> = {
      updatedAt: Date.now(),
      updatedBy: (user as unknown).uid,
    };
    for (const k of allowed) {
      if (k in body) update[k] = body[k];
    }

    await adminDb.collection('events').doc(id).set(update, { merge: true });
    return NextResponse.json({ ok: true, id });
  } catch (e: unknown) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;     // <-- await params
    await adminDb.collection('events').doc(id).delete();
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
