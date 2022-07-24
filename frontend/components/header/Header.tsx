import React, { useState, useEffect } from "react";
import styles from "../../styles/header.module.css";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Drawer from "./Drawer";
import CartMenu from "../cartmenu/Cartmenu";
import axios from "axios";
import { product } from "../cartmenu/Cartmenu";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartData, setCartData] = React.useState<product[]>([]);
  const [userId, setUserId] = useState("");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };

  useEffect(() => {
    const id = window.localStorage.userid;
    const token = window.localStorage.accessToken;

    setUserId(id);

    if (id && token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("accessToken");

    axios
      .get("https://fabbag-backend.herokuapp.com/auth/user/logout")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    const id: string = window.localStorage.userid || "";
    setUserId(id);
    axios
      .get(`https://fabbag-backend.herokuapp.com/cart/getCartData/${id}`)
      .then((res) => {
        console.log("res:", res);
        if (res.data.data) {
          setCartData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div>
        <h3>SUBSCRIBE NOW</h3>
      </div>
      <div>
        <Link href="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289"
            alt="img"
          />
        </Link>
      </div>
      <div>
        <span>
          <Drawer />
        </span>
        <span>
          <AiOutlineHeart />
        </span>
        <span
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <FaRegUserCircle />
          {!isLoggedIn ? (
            <span
              className={hover ? styles.afterDropDown : styles.beforeDropDown}
            >
              <label>
                Langauge: <span>En</span>
                <span>Fr</span>
              </label>
              <hr />
              <Link href="/signin">Checkout</Link>
              <hr />
              <Link href="/signin">Sign in</Link>
              <hr />
              <Link href="/signup">Create An Account</Link>
            </span>
          ) : (
            <span
              className={hover ? styles.afterDropDown : styles.beforeDropDown}
            >
              <label>
                Langauge: <span>En</span>
                <span>Fr</span>
              </label>
              <hr />
              <Link href={`/Cart/${userId}`}>Checkout</Link>
              <hr />
              <Link href="/profile">My Account</Link>
              <hr />
              <label
                onClick={() => {
                  handleLogout();
                  setIsLoggedIn(true);
                }}
              >
                Logout
              </label>
            </span>
          )}
        </span>

        <span onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineShoppingCart />
        </span>
        <div className={styles.cartIteamsShow}>{cartData.length}</div>
        <CartMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </div>
    </div>
  );
}
