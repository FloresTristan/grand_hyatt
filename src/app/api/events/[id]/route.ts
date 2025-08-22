export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth, adminDb } from '../../../../../lib/firebase/admin';

async function requireAdmin() {
  const c = await cookies();
  const session = c.get('session')?.value;
  if (!session) throw new Response('Unauthorized', { status: 401 });
  const decoded = await adminAuth.verifySessionCookie(session, true);
  const isAdmin = (decoded as unknown)?.admin === true || (decoded as unknown)?.role === 'admin';
  if (!isAdmin) throw new Response('Forbidden', { status: 403 });
  return decoded;
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireAdmin();
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

    await adminDb.collection('events').doc(params.id).set(update, { merge: true });

    return NextResponse.json({ ok: true, id: params.id });
  } catch (e: unknown) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await requireAdmin();
    await adminDb.collection('events').doc(params.id).delete();
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
