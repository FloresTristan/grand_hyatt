import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth } from '../../../../../lib/firebase/admin';

export const runtime = 'nodejs';

function toMs(t?: string | null) {
  if (!t) return undefined;
  const ms = new Date(t).getTime();
  return Number.isNaN(ms) ? undefined : ms;
}

export async function GET(req: Request) {
  try {
    const c = (await cookies()).get('session')?.value;
    if (!c) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const decoded = await adminAuth.verifySessionCookie(c, true).catch(() => null);
    const claims = decoded as unknown;
    const isAdmin = !!claims && (claims.role === 'admin' || claims.admin === true);
    if (!isAdmin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const { searchParams } = new URL(req.url);
    const limit = Math.min(Math.max(Number(searchParams.get('limit') || 100), 1), 1000);
    const pageToken = searchParams.get('pageToken') || undefined;

    const res = await adminAuth.listUsers(limit, pageToken);

    const items = res.users.map(u => ({
      uid: u.uid,
      email: u.email || '',
      displayName: u.displayName || '',
      role: (u.customClaims?.role as string) || 'user',
      disabled: u.disabled === true,
      createdAt: toMs(u.metadata?.creationTime),
      lastLoginAt: toMs(u.metadata?.lastSignInTime),
    }));

    return NextResponse.json({
      items,
      nextPageToken: res.pageToken || null,
    });
  } catch (e: unknown) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
