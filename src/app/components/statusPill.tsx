
type Status = 'live' | 'scheduled' | 'expired' | 'hidden';

export function StatusPill({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    live:      'bg-green-600/15 text-green-300 ring-1 ring-green-500/30',
    scheduled: 'bg-blue-600/15  text-blue-300  ring-1 ring-blue-500/30',
    expired:   'bg-red-600/15   text-red-300   ring-1 ring-red-500/30',
    hidden:    'bg-zinc-600/15  text-zinc-300  ring-1 ring-zinc-500/30',
  };

  const label: Record<Status, string> = {
    live: 'Live',
    scheduled: 'Scheduled',
    expired: 'Expired',
    hidden: 'Hidden',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${styles[status]}`}
      title={label[status]}
      aria-label={`Status: ${label[status]}`}
    >
      {label[status]}
    </span>
  );
}
