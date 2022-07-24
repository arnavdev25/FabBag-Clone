import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import styles from "./payment.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import axios from "axios";
import Link from "next/link";
import Promo from "../../components/information/promo";

type User = {
  first_name: string;
  last_name: string;
  _id: string;
  email: string;
};

type Cart = {
  title: string;
  image: string;
  price: string;
};

const Index = () => {
  const [data, setData] = useState<User>();
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(function () {
    var accessToken = window.localStorage.accessToken;
    var userid = window.localStorage.userid;
    var refreshToken = window.localStorage.refreshToken;
    // var decoded : any = jwt_decode(`${accessToken}`);
    // setData(decoded);

    axios
      .get(`https://fabbag-backend.herokuapp.com/cart/getCartData/${userid}`, {
        headers: {
          "Content-Type": "application/json",
          authentication: `${accessToken}`,
        },
      })
      .then((responce) => {
        const { data } = responce;
        setCart(data.data);
      });
  }, []);

  return (
    <>
      <div className={styles.payment_main}>
        <div className={styles.payment_data}>
          <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO-FINAL.png?10537" />
          <p>
            <b>Cart</b> &gt; <b>information</b> &gt; <b>Shipping</b> &gt;
            Payment
          </p>
          <div className={styles.payment_userdetails}>
            {/* <h5>Contact : {data.email} </h5> */}
            <hr></hr>
            <h5>Ship to :</h5>
            <hr></hr>
            <h5>
              Method: Free Standard Shipping ( Debit Card / Credit Card / Net
              Banking / PayTM ) · Free
            </h5>
          </div>
          <div className={styles.payment_method1}>
            <h3>Payment</h3>
            <p>All transaction are secured and encrypted</p>
          </div>
          <div className={styles.payment_method2}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label htmlFor="html">
                    Credit Card / Debit Card / Net Banking / UPI
                  </label>{" "}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.icondiv1}>
                  <CreditCardIcon className={styles.icondiv}></CreditCardIcon>
                  <br></br>
                  After clicking “Complete order”, you will be redirected to
                  Credit Card / Debit Card / Net Banking / UPI to complete your
                  purchase securely.
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label htmlFor="html">
                    <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/paytm@2x-af01977ff64627f57925062e195a194de280c6c879267a51456c0d579acb90c2.png" />
                  </label>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <div className={styles.icondiv1}>
                    <CreditCardIcon className={styles.icondiv}></CreditCardIcon>
                    <br></br>
                    After clicking “Complete order”, you will be redirected to
                    Credit Card / Debit Card / Net Banking / UPI to complete
                    your purchase securely.
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.payment_method1}>
            <h3>Billing address</h3>
            <p>Select the address that matches your card or payment method.</p>
          </div>
          <div className={styles.payment_method2}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label htmlFor="html">Same as shipping address</label>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography></Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <div>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                   {" "}
                  <label htmlFor="html">Use a different billing address</label>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <div className={styles.payment_inputs}>
                    <input
                      className={styles.inputbar}
                      type="text"
                      placeholder="Address"
                    />
                    <br></br>
                    <input
                      className={styles.inputbar}
                      type="text"
                      placeholder="City"
                    />
                    <br></br>
                    <input
                      className={styles.inputbar}
                      type="text"
                      placeholder="Phone"
                    />
                    <br></br>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.chout}>
            <p> Return to Cart page</p>
            <br></br>
            <Link href="/otp">
              <button>Complete Order</button>
            </Link>
          </div>
          <div className={styles.chout1}>
            <hr></hr>
            <p>
              Refund policy &nbsp;&nbsp;&nbsp;Privacy policy
              &nbsp;&nbsp;&nbsp;Terms of service
            </p>
          </div>
        </div>

        <div className={styles.sidebar}>
          <Promo />
        </div>

        {/* <div className={styles.payment_items}>
          <div className={styles.payment_item1}>
            <div className={styles.cartaddeditems}>
              {cart &&
                cart.map((e) => {
                  return (
                    <>
                      <div>
                        <img src={e.image} />
                      </div>
                      <div>{e.title}</div>
                      <div>{e.price}</div>
                    </>
                  );
                })}
            </div>
            <div className={styles.couponcode}>
              <input
                className={styles.inputbar}
                type="text"
                placeholder="Discount code"
              />
              &nbsp;&nbsp;
              <button>APPLY</button>
            </div>
            <div className={styles.proddetails}>
              {cart &&
                cart.map((e) => {
                  return (
                    <>
                      <div>Subtotal : </div>
                      <div>{e.price}</div>
                      <div>Shipping :</div>
                      <div>Free</div>
                    </>
                  );
                })}
            </div>
            <div className={styles.chtotal}>
              {cart &&
                cart.map((e) => {
                  return (
                    <>
                      <div>
                        <h2>Total :</h2>
                      </div>
                      <div>
                        <h2>INR : {e.price} </h2>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Index;
