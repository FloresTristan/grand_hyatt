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
    const user = await requireAdmin();
    const body = await req.json();

    if (!body?.title || typeof body.title !== 'string') {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const now = Date.now();

    const data = {
      title: body.title as string,
      subheading: (body.subheading ?? '') as string,
      description: (body.description ?? '') as string,
      startDate: body.startDate || null,   
      endDate: body.endDate || null,      
      startTime: body.startTime || null,  
      ctaLabel: body.ctaLabel || '',
      ctaHref: body.ctaHref || '',
      imageDataUrl: body.imageDataUrl ?? null, 
      status: body.status ?? 'draft',      
      createdAt: now,
      createdBy: (user as unknown).uid,
      updatedAt: now,
      updatedBy: (user as unknown).uid,
    };

    
    const docRef = await adminDb.collection('events').add(data);

    return NextResponse.json({ ok: true, id: docRef.id });
  } catch (e: unknown) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
