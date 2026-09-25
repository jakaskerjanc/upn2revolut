import { Toaster as SonnerToaster } from 'sonner';

/** Toasts carry local notices (camera, UPN-malformed, EPC-build, save errors). Theme follows the system, like the rest of the app. */
function Toaster() {
  return (
    <SonnerToaster
      theme="system"
      position="top-center"
      toastOptions={{
        classNames: {
          toast: 'rounded-card border border-card-line bg-surface text-ink text-body-sm shadow-none',
          description: 'text-muted',
        },
      }}
    />
  );
}

export { Toaster };
