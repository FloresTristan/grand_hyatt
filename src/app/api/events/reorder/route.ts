import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth, adminDb } from '../../../../../lib/firebase/admin';

export async function POST(req: Request) {
  try {
    const c = await cookies();
    const session = c.get('session')?.value;
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const decoded = await adminAuth.verifySessionCookie(session, true);
    const isAdmin = (decoded as unknown)?.admin === true || (decoded as unknown)?.role === 'admin';
    if (!isAdmin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const { ids } = await req.json() as { ids: string[] };
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'ids array required' }, { status: 400 });
    }

    // Optionally: verify that ids cover all events (strict mode)
    // const total = (await adminDb.collection('events').count().get()).data().count;
    // if (ids.length !== total) return NextResponse.json({ error: 'ids must include all events' }, { status: 400 });

    const batch = adminDb.batch();
    const now = Date.now();
    ids.forEach((id, idx) => {
      const ref = adminDb.collection('events').doc(id);
      batch.update(ref, { order: idx, updatedAt: now, updatedBy: decoded.uid });
    });
    await batch.commit();

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
