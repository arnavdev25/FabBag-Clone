import { NextPage } from "next";
import styles from "./footer.module.css";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
const Footer: NextPage = () => {
  return (
    <div className={styles.footermaincont}>
      <div className={styles.footerContainer}>
        <div>
          <ul>
            <h3 className={styles.footerH3}>INFORMATION</h3>
            <li>About Us</li>
            <li>Associated Brands</li>
            <li>FAQ</li>
            <li>Collaborate with Fab Bag</li>
            <li>Contact Us</li>
            <li>Returns & Refunds</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footerH3}>CUSTOMER CARE</h3>
          <h5>
            Call : <b className={styles.enum}>022-6805-6010</b>
            <br />
            (Monday to Friday : 9 AM - 7 PM).
          </h5>
          <h5>
            Mail : <b className={styles.enum}>crew@fabbag.com</b>
          </h5>
        </div>
        <div>
          <h3 className={styles.footerH3}>NEWSLETTER</h3>
          <p>Signup for the latest offers, updates and news</p>
          <input type="text" placeholder="Your email address" />
          <button>subscribe</button>
          <p>Don’t worry we don’t spam</p>
        </div>
      </div>
      <div className={styles.socialmedia}>
        <div className={styles.facebook}>
          <Facebook className={styles.sociallogo} />
        </div>
        <div className={styles.twitter}>
          <Twitter className={styles.sociallogo} />
        </div>
        <div className={styles.insta}>
          <Instagram className={styles.sociallogo} />
        </div>
        <div className={styles.youtube}>
          <YouTube className={styles.sociallogo} />
        </div>
      </div>
      <p>Copyright © 2021 fabbag.com All rights reserved.</p>
    </div>
  );
};
export default Footer;
