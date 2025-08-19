import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth } from '../../../../../../lib/firebase/admin';

async function requireAdmin() {
  const c = cookies().get('session')?.value;
  if (!c) return null;
  const decoded = await adminAuth.verifySessionCookie(c, true).catch(() => null);
  if (!decoded) return null;
  const isAdmin = (decoded as unknown).role === 'admin' || (decoded as unknown).admin === true;
  return isAdmin ? decoded : null;
}

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) return new NextResponse(null, { status: 403 });

  const { email, password, name, role = 'USER' } = await req.json();
  if (!email || !password) return new NextResponse('Missing fields', { status: 400 });

  // 1) create user
  const userRecord = await adminAuth.createUser({
    email, password, displayName: name,
  });

  // 2) set role claim
  await adminAuth.setCustomUserClaims(userRecord.uid, {
    role: role.toString().toLowerCase(), // 'user' | 'admin'
  });

  // (Optional) force refresh of tokens if this user is currently logged in elsewhere.
  await adminAuth.revokeRefreshTokens(userRecord.uid);

  return NextResponse.json({ uid: userRecord.uid, email: userRecord.email, role });
}
