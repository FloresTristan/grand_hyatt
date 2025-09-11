import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { Role, UserRow } from './createUserForm';

type CreateOrUpdatePayload = {
  email: string;
  displayName: string;
  role: Role;
  password?: string;     
  newPassword?: string;  
};

export default function UserFormModal({
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
  const [password, setPassword] = useState(''); 
  const [newPassword, setNewPassword] = useState(''); 
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  console.log({ initial });
  useEffect(() => {
    if (open) {
      setErr(null);
      setBusy(false);
      if (mode === 'edit' && initial) {
        setEmail(initial.email || '');
        setDisplayName(initial.displayName || '');
        setRole((initial.role as Role) || 'editor');
        setPassword('');
        setNewPassword('');
      } else {
        setEmail('');
        setDisplayName('');
        setRole('editor');
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
        email, displayName, role,
        ...(mode === 'create' ? { password } : {}),
        ...(mode === 'edit' ? { newPassword } : {}),
      });
    } catch (e: unknown) {
      setErr(e instanceof Error? e?.message : 'Save failed');
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
                  disabled={mode === 'edit'}
                  required
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:border-neutral-400 disabled:bg-neutral-700"
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
                  {/* {busy ? 'Saving…' : (mode === 'create' ? 'Create' : 'Save')} */}
                  {busy ? (
                    <span className="inline-flex items-center px-3 gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 004 12z" />
                      </svg>
                    </span>
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}