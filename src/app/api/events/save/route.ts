import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth, adminDb } from '../../../../../lib/firebase/admin';

export async function POST(req: Request) {
  try {
    const session = (await cookies()).get('session')?.value;
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const decoded = await adminAuth.verifySessionCookie(session, true);
    // const isAdmin = (decoded as unknown)?.admin === true || (decoded as unknown)?.role === 'admin';
    // if (!isAdmin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const body = await req.json();
    const { title, subheading, description, startDate, endDate, startTime, ctaLabel, ctaHref, imageDataUrl } = body;

    // NOTE: Firestore doc size limit is 1 MiB; prefer uploading the image to Storage later.
    await adminDb.collection('cms').doc('eventModal').set({
      title, subheading, description, startDate, endDate, startTime, ctaLabel, ctaHref,
      imageDataUrl: imageDataUrl ?? null,
      updatedAt: Date.now(),
      updatedBy: decoded.uid,
    }, { merge: true });

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
