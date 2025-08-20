'use client';

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

type ModalProps = {
  open?: boolean;
  onClose?: (open: boolean) => void;
  defaultOpen?: boolean;
  title?: string;
  subhead?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showTrigger?: boolean;
};

export default function Modal({
  open,
  onClose,
  defaultOpen = true,
  title = 'Dialog Title',
  subhead = '',
  description = '',
  ctaLabel,
  ctaHref,
  showTrigger = false,
}: ModalProps) {
  // controlled vs uncontrolled
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = typeof open === 'boolean';
  const isOpen = isControlled ? open : internalOpen;

  function setOpen(next: boolean) {
    if (!isControlled) setInternalOpen(next);
    onClose?.(next);
  }

  return (
    <div>
      {showTrigger && (
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white hover:bg-white/20"
        >
          Open dialog
        </button>
      )}

      <Dialog open={isOpen} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl outline outline-1 -outline-offset-1 outline-black/10 transition-all
                         data-[closed]:translate-y-4 data-[closed]:opacity-0 sm:my-8 sm:w-full sm:max-w-lg
                         data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="px-6 py-5">
                <DialogTitle as="h3" className="text-base font-semibold">
                  {title}
                </DialogTitle>
                {!!subhead && <p className="mt-1 text-sm text-neutral-600">{subhead}</p>}
                {!!description && (
                  <p className="mt-3 text-sm text-neutral-800 whitespace-pre-wrap">{description}</p>
                )}
              </div>

              <div className="px-6 py-4 flex justify-end gap-3 bg-neutral-50">
                <button
                  type="button"
                  onClick={() => setOpen(false)}      
                  className="rounded-md border px-3 py-2 text-sm"
                >
                  learn more
                </button>
                {ctaLabel &&
                  (ctaHref ? (
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-black px-3 py-2 text-sm text-white hover:opacity-90"
                    >
                      {ctaLabel}
                    </a>
                  ) : (
                    <button className="rounded-md bg-black px-3 py-2 text-sm text-white hover:opacity-90">
                      {ctaLabel}
                    </button>
                  ))}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
