import {Alert, Snackbar} from '@mui/material';

type AlertProps ={
    open: boolean,
    message: string,
    severity: string,
} 

export default function SnackbarComponent({
    open, message, severity
}: AlertProps){
    return(
       <Snackbar
        open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
      >
        <Alert
          severity={severity}
          variant="filled"
          className='w-full'
        >  
            {message}
        </Alert>
      </Snackbar> 
    )
}