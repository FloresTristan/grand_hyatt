import { memo } from 'react';
import { Alert, Snackbar, Button } from '@mui/material';

export type SnackbarSettings = {
  open: boolean;
  message: string;
  severity: string;
  actionLabel?: string;
  actionCallback?: () => void;
  duration?: number | null;
};

type AlertProps = {
  snackbarSettings: SnackbarSettings;
  setSnackbarSettings: React.Dispatch<React.SetStateAction<SnackbarSettings>>;
};

const SnackbarComponent = memo(function SnackbarComponent({
  snackbarSettings,
  setSnackbarSettings,
}: AlertProps) {
  const { open, message, severity, actionLabel, actionCallback, duration } = snackbarSettings;

  const handleClose = () => {
    setSnackbarSettings((prev) => ({ ...prev, open: false, actionLabel: undefined, actionCallback: undefined }));
  };

  const handleActionClick = () => {
    if (actionCallback) {
      actionCallback();
      setSnackbarSettings((prev) => ({ ...prev, open: false }));
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration !== undefined ? duration : 2000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert
        severity={severity as 'success' | 'error' | 'warning' | 'info'}
        variant="standard"
        className="w-full"
        onClose={handleClose}
        action={
          actionLabel && actionCallback ? (
            <Button color="error" size="small" onClick={handleActionClick}>
              {actionLabel}
            </Button>
          ) : null
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
});

export default SnackbarComponent;
