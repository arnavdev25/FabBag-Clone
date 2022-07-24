import React from 'react'
import styles from './Otp.module.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import Link  from 'next/link';
import { useRouter } from 'next/router'

const Otp = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    router.push("/")
  };

  return (
    <div>
        <div className={styles.body111}>
        <div className={styles.payment}>
             <h2>OTP Verificaion</h2>
             <hr />
             <div className={styles.options}>
             <p>An OTP has been sent to ********01</p>
             <p>Do not leave the page</p>
             <input type="number" className={styles.otp} placeholder="Enter OTP" />
             <button className={styles.button111} onClick={handleClickOpen}>Submit</button>
             <Link href="/" className={styles.button111}>Home</Link>
             </div>  
        </div>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <h1><Alert severity="success"> <h1>Payment Successfull  — Thanks for shopping !</h1></Alert></h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date for your items.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div>

        </div>
  )
}

export default Otp