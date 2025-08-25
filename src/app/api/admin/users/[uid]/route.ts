import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth } from '../../../../../../lib/firebase/admin';

export const runtime = 'nodejs';

async function requireAdmin() {
  const c = (await cookies()).get('session')?.value;
  if (!c) return null;
  const decoded = await adminAuth.verifySessionCookie(c, true).catch(() => null);
  if (!decoded) return null;
  const claims = decoded as unknown;
  const isAdmin = claims.role === 'admin' || claims.admin === true;
  return isAdmin ? decoded : null;
}

export async function PATCH(req: Request, { params }: { params: { uid: string } }) {
  try {
    const admin = await requireAdmin();
    if (!admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const uid = params.uid;
    const body = await req.json();

    const updates: Parameters<typeof adminAuth.updateUser>[1] = {};
    if (typeof body.displayName === 'string') updates.displayName = body.displayName;
    if (typeof body.disabled === 'boolean') updates.disabled = body.disabled;
    if (typeof body.password === 'string' && body.password.length >= 6) updates.password = body.password;

    if (Object.keys(updates).length > 0) {
      await adminAuth.updateUser(uid, updates);
    }

    // Role update via custom claims
    if (typeof body.role === 'string') {
      const cur = await adminAuth.getUser(uid);
      const claims = { ...(cur.customClaims || {}) };
      claims.role = String(body.role).toLowerCase();
      await adminAuth.setCustomUserClaims(uid, claims);
    }

    // If password changed, revoke existing sessions
    if (typeof body.password === 'string' && body.password.length >= 6) {
      await adminAuth.revokeRefreshTokens(uid);
    }

    return NextResponse.json({ ok: true, uid });
  } catch (e: unknown) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { uid: string } }) {
  try {
    const admin = await requireAdmin();
    if (!admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    await adminAuth.deleteUser(params.uid);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}
