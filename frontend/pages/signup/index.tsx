import React from "react";
import styles from "./singup.module.css";
import { useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Header from "../../components/header/Header";
import { useRouter } from 'next/router'
import Footer from "../components/Footer";

const Signup = () => {
  const router = useRouter()
  const [formData, SetFormData] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    window.location.href = "https://warlike-current-5989.vercel.app/signin";
  };

  const handleChange = (e: any) => {
    let name = e.target.name;
    SetFormData({
      ...formData,
      [name]: e.target.value,
      [name]: e.target.value,
      [name]: e.target.value,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post(`https://fabbag-backend.herokuapp.com/user/signup`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((responce) => {
        const { data } = responce;
      });
    setOpen(true);
  };

  const handleFacebook = () => {
    router.push("https://fabbag-backend.herokuapp.com/auth/facebook")
  }

  const handleGoogle = () => {
    router.push("https://fabbag-backend.herokuapp.com/auth/google")
  }

  return (
    <>
      <Header />
      <div className={styles.signupMain}>
        <div className={styles.signupm}>
          <h1>Create An Account</h1>
          <button onClick={() => handleFacebook} className={`${styles.loginBtn} ${styles.loginBtnfacebook}`}>
            Sign in with Facebook
          </button>
          <br></br>
          <button className={`${styles.loginBtn} ${styles.loginBtngoogle}`}>
            Sign in with Google
          </button>
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <label className={styles.inp}>*First name</label>
            <br></br>
            <input
              type="text"
              className={styles.subin}
              name="first_name"
              required
              onChange={handleChange}
            />
            <br></br>
            <label className={styles.inp}>*Last name</label>
            <br></br>
            <input
              type="text"
              className={styles.subin}
              name="last_name"
              required
              onChange={handleChange}
            />
            <br></br>
            <label className={styles.inp}>*Your Email address</label>
            <br></br>
            <input
              type="text"
              className={styles.subin}
              name="email"
              required
              onChange={handleChange}
            />
            <br></br>
            <label className={styles.inp}>*Your Password</label>
            <br></br>
            <input
              type="text"
              className={styles.subin}
              name="password"
              required
              onChange={handleChange}
            />
            <br></br>
            <br></br>
            <input
              type="submit"
              className={styles.subtn}
              value="Create An Account"
            />
          </form>
          <p style={{ paddingLeft: "150px" }}>Or</p>
          <a href="https://warlike-current-5989.vercel.app/signin">
            <button className={styles.subtn}>Sign in</button>
          </a>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Alert severity="success">Sign up success., Now login</Alert>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Continue</Button>
          </DialogActions>
        </Dialog>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
