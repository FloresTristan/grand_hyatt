
'use client';

import { useEffect, useMemo, useState } from 'react';
import SnackbarComponent, {SnackbarSettings} from '../../components/Snackbar';
import UserFormModal from './userFormModal';


export type Role = 'admin' | 'editor' | 'super-admin';
export type UserRow = {
  uid: string;
  email: string;
  displayName?: string;
  role?: Role;
  createdAt?: number; 
};

type CreateOrUpdatePayload = {
  email: string;
  displayName: string;
  role: Role;
  password?: string;     
  newPassword?: string;  
};

export default function UsersPage() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [initial, setInitial] = useState<UserRow | null>(null);
    const [snackbarSettings, setSnackbarSettings] = useState<SnackbarSettings>({
    open: false,
    message: '',
    severity: '',
  });

  const [q, setQ] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch('/api/admin/users', { cache: 'no-store' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to load users');
      const sorted = [...(data.items as UserRow[])]
        .sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
      setUsers(sorted);
    } catch (e: unknown) {
      console.log(e)
      setErr('Load failed');
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
      setUsers(prev => prev.filter(u => u.uid !== user.uid));
    } catch (e: unknown) {
      console.log(e)
      alert('Delete failed');
    }
  }

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
          }),
        });
        const data = await res.json();
        if (!res.ok){ 
          setSnackbarSettings((prev) => ({...prev,
            open: true,
            message: 'User Creation failed',
            severity: 'error'
          }))
          throw new Error(data?.error || 'Create failed')
        } else {
          setSnackbarSettings((prev) => ({...prev,
            open: true,
            message: 'Created User Successfully ',
            severity: 'success'
          }))
        }

        await loadUsers();
      } else {
        const uid = user!.uid;
        const body: unknown = {
          displayName: payload.displayName,
          role: payload.role,
        };
        if (payload.newPassword && payload.newPassword.length >= 6) {
          body.password = payload.newPassword;
        }
        const res = await fetch(`/api/admin/users/${uid}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        console.log({data})
        if (!res.ok){
          setSnackbarSettings((prev) => ({...prev,
            open: true,
            message: 'User Update failed',
            severity: 'error'
          }))
          throw new Error(data?.error || 'Update failed')
        } else {
          setSnackbarSettings((prev) => ({...prev,
            open: true,
            message: 'User Updated Successfully',
            severity: 'success'
          }))
        }

        setUsers(prev => prev.map(u => (u.uid === uid
          ? { ...u, displayName: payload.displayName, role: payload.role}
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
        <header className="md:flex flex-col md:flex-row items-center justify-end">
          <div className="flex justify-center items-center gap-2">
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

        <div className="h-[60vh] rounded-xl border overflow-scroll custom-scrollbar border-white/10 bg-[#212e3f]">
          <table className="w-full text-sm">
            <thead className="bg-white/5 ">
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
                  <tr key={u.uid} className="border-t border-white/10 even:bg-white/5">
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
      <SnackbarComponent snackbarSettings={snackbarSettings} setSnackbarSettings={setSnackbarSettings} /> 
    </div>
  );
}


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
    "super-admin": 'bg-red-500/20 text-red-300',
    admin: 'bg-blue-500/20 text-blue-300',
    editor: 'bg-white/10 text-white/70',
  };
  return <span className={`rounded-full px-2 py-0.5 text-xs ${styles[r]}`}>{r}</span>;
}





