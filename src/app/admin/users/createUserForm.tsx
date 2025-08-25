
'use client';

import { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

// ---- Types that match your API shape ----
type Role = 'admin' | 'editor' ;
type UserRow = {
  uid: string;
  email: string;
  displayName?: string;
  role?: Role;
  createdAt?: number; 
};

export default function UsersPage() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // modal state
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [initial, setInitial] = useState<UserRow | null>(null);

  // filters (optional)
  const [q, setQ] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setErr(null);
    setLoading(true);
    try {
      // Expect your server route: GET /api/admin/users  ->  { items: UserRow[] }
      const res = await fetch('/api/admin/users', { cache: 'no-store' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to load users');
      // sort newest first by createdAt (fallback to email)
      const sorted = [...(data.items as UserRow[])]
        .sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
      setUsers(sorted);
    } catch (e: unknown) {
      setErr(e?.message || 'Load failed');
    } finally {
      setLoading(false);
    }
  }

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return users;
    return users.filter(u =>
      (u.email?.toLowerCase().includes(term)) ||
      (u.displayName?.toLowerCase().includes(term)) ||
      (u.role?.toLowerCase().includes(term))
    );
  }, [users, q]);

  // Actions
  function onAdd() {
    setMode('create');
    setInitial(null);
    setOpen(true);
  }
  function onEdit(user: UserRow) {
    setMode('edit');
    setInitial(user);
    setOpen(true);
  }
  async function onDelete(user: UserRow) {
    if (!confirm(`Delete user ${user.email}?`)) return;
    try {
      const res = await fetch(`/api/admin/users/${user.uid}`, { method: 'DELETE' });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || 'Delete failed');
      // remove locally
      setUsers(prev => prev.filter(u => u.uid !== user.uid));
    } catch (e: unknown) {
      alert(e?.message || 'Delete failed');
    }
  }

  // Handle submit from modal
  async function handleSubmit(payload: CreateOrUpdatePayload, user?: UserRow | null) {
    try {
      if (mode === 'create') {
        const res = await fetch('/api/admin/users/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            name: payload.displayName,
            role: payload.role,
            disabled: payload.disabled,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Create failed');

        // Re-load so we have the fresh list (and createdAt)
        await loadUsers();
      } else {
        const uid = user!.uid;
        const body: unknown = {
          // Only include fields that were edited; this is simple & safe:
          displayName: payload.displayName,
          role: payload.role,
          disabled: payload.disabled,
        };
        if (payload.newPassword && payload.newPassword.length >= 6) {
          body.password = payload.newPassword; // optional password reset
        }
        const res = await fetch(`/api/admin/users/${uid}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Update failed');

        // Update locally (or reload)
        setUsers(prev => prev.map(u => (u.uid === uid
          ? { ...u, displayName: payload.displayName, role: payload.role, disabled: payload.disabled }
          : u)));
      }

      setOpen(false);
    } catch (e: unknown) {
      alert(e?.message || 'Save failed');
    }
  }

  return (
    <div className="min-h-screen bg-[#151c2f] text-white p-6">
      <div className="mx-auto max-w-5xl space-y-4">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <div className="flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search users…"
              className="rounded-lg bg-[#131a2a] border border-white/10 px-3 py-2 outline-none focus:border-white/30 text-sm"
            />
            <button
              onClick={onAdd}
              className="rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black font-medium px-3 py-2 text-sm"
            >
              + Add user
            </button>
          </div>
        </header>

        {err && <div className="text-sm text-red-300">{err}</div>}

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#212e3f]">
          <table className="w-full text-sm">
            <thead className="bg-white/5">
              <tr>
                <Th>Email</Th>
                <Th>Name</Th>
                <Th>Role</Th>
                <Th>Created</Th>
                <Th align="right">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} className="p-4 text-center text-white/60">Loading…</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={6} className="p-6 text-center text-white/60">No users found.</td></tr>
              ) : (
                filtered.map((u) => (
                  <tr key={u.uid} className="border-t border-white/10">
                    <Td>{u.email}</Td>
                    <Td>{u.displayName || '—'}</Td>
                    <Td><RoleBadge role={u.role} /></Td>
                    <Td>{u.createdAt ? new Date(u.createdAt).toLocaleString() : '—'}</Td>
                    <Td align="right">
                      <div className="flex justify-end gap-2">
                        <button
                          className="rounded-md bg-white/10 hover:bg-white/20 px-2 py-1"
                          onClick={() => onEdit(u)}
                        >
                          Edit
                        </button>
                        <button
                          className="rounded-md bg-red-600 hover:bg-red-500 px-2 py-1"
                          onClick={() => onDelete(u)}
                        >
                          Delete
                        </button>
                      </div>
                    </Td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <UserFormModal
          open={open}
          mode={mode}
          initial={initial}
          onClose={() => setOpen(false)}
          onSubmit={(p) => handleSubmit(p, initial)}
        />
      </div>
    </div>
  );
}

/* --------------- Small presentational bits --------------- */

function Th({ children, align = 'left' }: { children: React.ReactNode; align?: 'left' | 'right' }) {
  return (
    <th className={`px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/70 ${align === 'right' ? 'text-right' : 'text-left'}`}>
      {children}
    </th>
  );
}

function Td({ children, align = 'left' }: { children: React.ReactNode; align?: 'left' | 'right' }) {
  return (
    <td className={`px-3 py-2 ${align === 'right' ? 'text-right' : 'text-left'}`}>
      {children}
    </td>
  );
}

function RoleBadge({ role }: { role?: Role }) {
  const r = (role || 'user') as Role;
  const styles: Record<Role, string> = {
    admin: 'bg-red-500/20 text-red-300',
    editor: 'bg-blue-500/20 text-blue-300',
    user: 'bg-white/10 text-white/70',
  };
  return <span className={`rounded-full px-2 py-0.5 text-xs ${styles[r]}`}>{r}</span>;
}

/* --------------- Modal --------------- */

type CreateOrUpdatePayload = {
  email: string;
  displayName: string;
  role: Role;
  disabled: boolean;
  password?: string;     // create only
  newPassword?: string;  // edit optional
};

function UserFormModal({
  open,
  mode,
  initial,
  onClose,
  onSubmit,
}: {
  open: boolean;
  mode: 'create' | 'edit';
  initial: UserRow | null;
  onClose: () => void;
  onSubmit: (p: CreateOrUpdatePayload) => void | Promise<void>;
}) {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [role, setRole] = useState<Role>('editor');
  const [disabled, setDisabled] = useState(false);
  const [password, setPassword] = useState('');     // create
  const [newPassword, setNewPassword] = useState(''); // edit
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setErr(null);
      setBusy(false);
      if (mode === 'edit' && initial) {
        setEmail(initial.email || '');
        setDisplayName(initial.displayName || '');
        setRole((initial.role as Role) || 'editor');
        setDisabled(!!initial.disabled);
        setPassword('');
        setNewPassword('');
      } else {
        setEmail('');
        setDisplayName('');
        setRole('editor');
        setDisabled(false);
        setPassword('');
        setNewPassword('');
      }
    }
  }, [open, mode, initial]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    try {
      if (mode === 'create' && password.length < 6) {
        throw new Error('Password must be at least 6 characters.');
      }
      await onSubmit({
        email, displayName, role, disabled,
        ...(mode === 'create' ? { password } : {}),
        ...(mode === 'edit' ? { newPassword } : {}),
      });
    } catch (e: unknown) {
      setErr(e?.message || 'Save failed');
      setBusy(false);
      return;
    }
    setBusy(false);
  }

  return (
    <Dialog open={open} onClose={onClose} className="relative z-[100]">
      <DialogBackdrop className="fixed inset-0 bg-black/60" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-lg rounded-2xl bg-[#212e3f] text-white p-6 shadow-xl">
            <DialogTitle className="text-lg font-semibold">
              {mode === 'create' ? 'Add user' : 'Edit user'}
            </DialogTitle>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <label className="block">
                <div className="mb-1 text-xs text-white">Email</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={mode === 'edit'} // keep email immutable during edit
                  required
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:border-neutral-400 disabled:bg-neutral-100"
                />
              </label>

              <label className="block">
                <div className="mb-1 text-xs ">Display name</div>
                <input
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:border-neutral-400"
                />
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <div className="mb-1 text-xs ">Role</div>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as Role)}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:border-neutral-400"
                  >
                    <option value="admin" className="bg-[#212e3f]">admin</option>
                    <option value="editor" className="bg-[#212e3f]">editor</option>
                  </select>
                </label>

                {/* <label className="flex items-end gap-2">
                  <input
                    type="checkbox"
                    checked={disabled}
                    onChange={(e) => setDisabled(e.target.checked)}
                  />
                  <span className="text-sm ">Disabled</span>
                </label> */}
              </div>

              {mode === 'create' ? (
                <label className="block">
                  <div className="mb-1 text-xs ">Password</div>
                  <input
                    type="password"
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:border-neutral-400"
                  />
                </label>
              ) : (
                <label className="block">
                  <div className="mb-1 text-xs ">New password (optional)</div>
                  <input
                    type="password"
                    minLength={6}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Leave blank to keep current"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:border-neutral-400"
                  />
                </label>
              )}

              {err && <div className="text-sm text-red-600">{err}</div>}

              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg bg-red-500 px-3 py-2 text-sm hover:bg-red-400"
                >
                  Cancel
                </button>
                <button
                  disabled={busy}
                  className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-500 disabled:opacity-60"
                >
                  {busy ? 'Saving…' : (mode === 'create' ? 'Create' : 'Save')}
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
