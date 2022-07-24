import React from "react";
import styles from "./singin.module.css";
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
import Footer from "../components/Footer";
import { useRouter } from 'next/router'

const Signin = () => {
  const router = useRouter()
  const [formData, SetFormData] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    window.location.href = "https://warlike-current-5989.vercel.app/profile";
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
      .post(`https://fabbag-backend.herokuapp.com/user/signin`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((responce) => {
        const { data } = responce;
        // console.log(data.message);
        // console.log(data.user);
        if (data.message == "Logged in") {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("userid", data.user._id);
          setOpen(true);
        } else {
          alert("login failed");
        }
      });
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
          <h1>Sign in</h1>
          <button onClick={handleFacebook} className={`${styles.loginBtn} ${styles.loginBtnfacebook}`}>
            Sign in with Facebook
          </button>
          <br></br>
          <button onClick={handleGoogle} className={`${styles.loginBtn} ${styles.loginBtngoogle}`}>
            Sign in with Google
          </button>
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <label className={styles.inp}>*Email address</label>
            <br></br>
            <input
              type="text"
              className={styles.subin}
              name="email"
              onChange={handleChange}
              required
            />
            <br></br>
            <label className={styles.inp}>*Password</label>
            <br></br>
            <input
              type="text"
              className={styles.subin}
              name="password"
              onChange={handleChange}
              required
            />
            <br></br>
            <br></br>
            <input type="submit" className={styles.subtn} value="Sign in" />
          </form>
          <p style={{ paddingLeft: "150px" }}>Or</p>
          <a href="https://warlike-current-5989.vercel.app/signup">
            <button className={styles.subtn}>Create An Account</button>
          </a>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Alert severity="success">Sign in success</Alert>
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

export default Signin;
