export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth, adminDb } from '../../../../lib/firebase/admin';

async function requireAdmin() {
  const c = await cookies();
  const session = c.get('session')?.value;
  if (!session) throw new Response('Unauthorized', { status: 401 });
  const decoded = await adminAuth.verifySessionCookie(session, true);
  const isAdmin = (decoded as unknown)?.admin === true || (decoded as unknown)?.role === 'admin';
  if (!isAdmin) throw new Response('Forbidden', { status: 403 });
  return decoded;
}

export async function GET() {
  try {
    await requireAdmin();
    const snap = await adminDb
      .collection('events')
      .orderBy('updatedAt', 'desc')
      .limit(50)
      .get();

    const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    return NextResponse.json({ items });
  } catch (e: unknown) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const c = await cookies();
    const session = c.get('session')?.value;
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const decoded = await adminAuth.verifySessionCookie(session, true);
    const isAdmin = (decoded as unknown)?.admin === true || (decoded as unknown)?.role === 'admin';
    if (!isAdmin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const body = await req.json();
    if (!body?.title) return NextResponse.json({ error: 'Title required' }, { status: 400 });

    const id = await adminDb.runTransaction(async (tx) => {
      const lastSnap = await tx.get(
        adminDb.collection('events').orderBy('order', 'desc').limit(1)
      );
      const nextOrder = lastSnap.empty ? 0 : ((lastSnap.docs[0].data()?.order ?? -1) + 1);

      const docRef = adminDb.collection('events').doc(); // auto-id
      tx.set(docRef, {
        title: body.title,
        subheading: body.subheading ?? '',
        description: body.description ?? '',
        startDate: body.startDate ?? null,
        endDate: body.endDate ?? null,
        startTime: body.startTime ?? null,
        ctaLabel: body.ctaLabel ?? '',
        ctaHref: body.ctaHref ?? '',
        imageDataUrl: body.imageDataUrl ?? null, 
        status: body.status ?? 'draft',
        order: nextOrder,                        
        createdAt: Date.now(),
        updatedAt: Date.now(),
        createdBy: decoded.uid,
        updatedBy: decoded.uid,
      });

      return docRef.id;
    });

    return NextResponse.json({ ok: true, id });
  } catch (e: unknown) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
