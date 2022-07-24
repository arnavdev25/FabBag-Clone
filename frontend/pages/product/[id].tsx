/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useRouter } from "next/router";
import styles from "./product.module.css";
import { useState, useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../components/Footer";

const ProductsDetails = ({ product }: any) => {
  let [qty, setQty] = useState(1);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [description, setDescription] = useState(true);
  const [viewplans, setViewplans] = useState(false);
  const [returnpolicy, setReturnpolicy] = useState(false);
  const [customerreviews, setCustomerreviews] = useState(false);
  const [userid,setUserId] = useState("");

  const desfunction = () => {
    setDescription(true);
    setViewplans(false);
    setReturnpolicy(false);
    setCustomerreviews(false);
  };

  const viewfunction = () => {
    setDescription(false);
    setViewplans(true);
    setReturnpolicy(false);
    setCustomerreviews(false);
  };

  const returnfunction = () => {
    setDescription(false);
    setViewplans(false);
    setReturnpolicy(true);
    setCustomerreviews(false);
  };

  const cusfunction = () => {
    setDescription(false);
    setViewplans(false);
    setReturnpolicy(false);
    setCustomerreviews(true);
  };

  const handleItem = () => {
    const cartItem = {
      product_id:  product[0]._id,
      quantity: qty,
      userid: userid,
      title: product[0].title,
      mrp: product[0].mrp,
      price: product[0].price,
      image: product[0].image
    };
    // console.log(cartItem);

    axios.post(`https://fabbag-backend.herokuapp.com/product/addToCart`, cartItem, {
      headers: { "Content-Type": "application/json" },
    });

    setOpen(true);
  };


  useEffect(() => {
    const id = window.localStorage.userid || "";

    setUserId(id);
  },[])

  return (
    <>
    <Header />
      <div className={styles.pmain}>
        <div>
          <img src={product[0].image} />
        </div>
        <div>
          <p>HOME</p>
          <h1>{product[0].title}</h1>
          <h1>RS.{product[0].price}</h1>
          <p>
            Get ready to Pick'n'Roll. Put your beauty instincts to the test and
            choose between 3...
          </p>
          <div className={styles.qty}>
            <p
              onClick={() => {
                setQty(qty--);
              }}
            >
              -
            </p>
            <p>{qty}</p>
            <p
              onClick={() => {
                setQty(qty++);
              }}
            >
              +
            </p>
          </div>
          <button onClick={handleItem}>ADD TO CART</button>
          <p>
            &nbsp;&nbsp;&nbsp;
            <TwitterIcon className={styles.picons}></TwitterIcon>
            &nbsp;&nbsp;&nbsp;
            <FacebookIcon className={styles.picons}></FacebookIcon>
            &nbsp;&nbsp;&nbsp;
            <GoogleIcon className={styles.picons}></GoogleIcon>
          </p>
        </div>
      </div>
      <div className={styles.pbody}>
        <div className={styles.pbuttons}>
          <button className={styles.bttn} onClick={desfunction}>
            DESCRIPTION
          </button>
          <button className={styles.bttn} onClick={viewfunction}>
            VIEW PLANS
          </button>
          <button className={styles.bttn} onClick={returnfunction}>
            RETURNS POLICY
          </button>
          <button className={styles.bttn} onClick={cusfunction}>
            CUSTOMER REVIEWS
          </button>
        </div>
        <div>
          {description ? (
            <>
              {" "}
              <p>
                Get ready to Pick'n'Roll. Put your beauty instincts to the test
                and choose between 3 carefully curated beauty bags featuring 6
                glam goodies each inside The Beauty Bundle July Fab Bag.
              </p>
              <h4>Makeup 1: Teen Teen 5D Pretty Eye Shadow (Choose any 1)</h4>
              <p>1. Teen Teen 5D Pretty Eye Shadow - Flamingo Pink </p>
              <p>2. Teen Teen 5D Pretty Eye Shadow - Gold Rush </p>
              <p>3. Teen Teen 5D Pretty Eye Shadow - Rusty Copper </p>
              <br></br>
              <p>And choose the bundle of your choice:</p>
              <br></br>
              <h4>Beauty Bundle Bag 1 includes:</h4>
              <p>
                St. D'vencé Tea Tree Face Wash The Soap Company India Saffron
                Soothing Sorbet OR The Soap Company India Musk Body Wash
                <br></br>
                Baiser India Nourishing Lip Oil OR Coco Soul Hair & Scalp
                Cleanser<br></br>
                Keeva Naturals Scuba Dive Shower Gel OR Kronoklay Body Butter OR
                Mom's Therapy Coffee Body Scrub OR Organic Harvest Neem Face
                Wash OR Plum BodyLovin' Bestsellin' Duo Minis Kit OR Skinlicious
                Cucumber Beauty Gel for Skin and Hair Tejas Blends Lavender Foot
                Mist
              </p>
              <h4>Beauty Bundle Bag 2 includes:</h4>
              <p>
                St. D'vencé Tea Tree Face Wash<br></br>
                Coco soul nourishing body lotion<br></br>
                Plum E-Luminence Mega Hydration Mini Kit<br></br>
                Tejas Blends Enriching night cream <br></br>
                Tejas Blends Lavender Foot Mist
              </p>
              <h4>Beauty Bundle Bag 3 includes:</h4>
              <p>
                The Soap Company India Midnight Love Body Cologne<br></br>
                Sebamed Moisturizing Cream<br></br>
                Plum Fun in the Sun Duo (Scrub + SPF 50) (Minis)<br></br>
                Tejas Blends Enriching night cream <br></br>
                Tejas Blends Lavender Foot Mist{" "}
              </p>
              <p>
                *Two offers cannot be clubbed. Choice will be available on the
                order confirmation page, on first-come, first-served basis. Bags
                shown are indicative and color may differ.
              </p>
            </>
          ) : null}
          {viewplans ? (
            <>
              <div className={styles.psub}>
                <div>
                  <h3>1 MONTH</h3>
                  <h4>SUBSCRIPTION</h4>
                </div>
                <div>
                  <h3>RS.599.00</h3>
                  <h4>/MONTH</h4>
                </div>
                <div>
                  <h3>RS.599.00</h3>
                  <h4>
                    <span className={styles.g}>ONE TIME PAYMENT</span>
                  </h4>
                </div>
                <div className={styles.gg}>
                  <button className={styles.gg}>ADD TO CART</button>
                </div>
              </div>
            </>
          ) : null}
          {returnpolicy ? (
            <>
              <ul>
                <li>
                  Returns Policy for FAB BAG Monthly Subscriptions: 100%
                  Happiness or Money-Back Guarantee
                </li>
                <br></br>
                <li>For more details, please see our Policy here.</li>
                <br></br>
                <li>
                  Should you have any questions regarding this product, please
                  feel free to get in touch with our friendly Customer
                  Experience Team at crew@fabbag.com within 48 hours of
                  receiving the shipment or call us at 022-4896-7878 Mon - Fri,
                  9am - 7pm.
                </li>
                <br></br>
              </ul>
            </>
          ) : null}
          {customerreviews ? (
            <>
              <h1>CUSTOMER REVIEWS</h1>
              <h3>No reviews yet</h3>
            </>
          ) : null}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Alert severity="success">
            Your item added to the cart — check it out!
          </Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;

  const data = await fetch(`https://fabbag-backend.herokuapp.com/product/${id}`).then((x) =>
    x.json()
  );

  return {
    props: { product: data },
  };
};

export default ProductsDetails;
