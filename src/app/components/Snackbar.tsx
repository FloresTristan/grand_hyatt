import {Alert, Snackbar, Button} from '@mui/material';

export type SnackbarSettings = {
  open: boolean;
  message: string;
  severity: string;
  actionLabel?: string; 
  actionCallback?: () => void; 
  duration?: number | null;
}

type AlertProps ={
  snackbarSettings: SnackbarSettings;
  setSnackbarSettings: React.Dispatch<React.SetStateAction<SnackbarSettings>>;
};

export default function SnackbarComponent({
  snackbarSettings, setSnackbarSettings
}: AlertProps){

  const { open, message, severity, actionLabel, actionCallback, duration } = snackbarSettings; 

  const handleClose = (
    // event: React.SyntheticEvent | Event, reason?: string
  ) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    setSnackbarSettings((prev) => ({ ...prev, open: false, actionLable: null, actionCallback: null })); 
  };

  const handleActionClick = () => {
    if (actionCallback) {
      actionCallback(); 
      setSnackbarSettings((prev) => ({ ...prev, open: false })); 
    }
  };

    return(
       <Snackbar
        open={open}
        autoHideDuration={duration !== undefined ? duration : 2000}
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        onClose={handleClose}
      >
        <Alert
          severity={severity}
          variant="standard"
          className='w-full'
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
    )
}