import { Divider, List } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import { product } from "../cartmenu/Cartmenu";
import { PromoDiv } from "./formStyled";
import Link from "next/link"
import InputComp from "./InputComp";

const Promo = () => {
  const [total, setTotal] = React.useState(0);
  const [cartData, setCartData] = React.useState<product[]>([]);

  useEffect(() => {
    const id = window.localStorage.userid || "";
    axios
      .get(
        `https://fabbag-backend.herokuapp.com/cart/getCartData/${id}`
      )
      .then((res) => {
        if (res.data.data) {
          setCartData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (cartData === [] || cartData === undefined) {
      return;
    }

    const countTotal = () => {
      const t = cartData.reduce((a, el: product) => {
        a += el.quantity * el.mrp;
        return a;
      }, 0);
      setTotal(t);
    };

    countTotal();
  }, [cartData]);

  return (
    <PromoDiv>
      <div>
        <List className="cart-list">
          {cartData.length === 0
            ? "You have no items in your shopping cart."
            : cartData.map((el: product, i: number) => {
                return (
                  <React.Fragment key={i}>
                    <li className="item" id="cart-item">
                      <a
                        href="/"
                        title="The Beauty Bundle July Fab Bag"
                        className="product-image"
                      >
                        <div className="product-thumbnail ">
                          <div className="product-thumbnail__wrapper">
                            <Image
                              width={86}
                              height={86}
                              src={el.image}
                              alt="The Beauty Bundle July Fab Bag"
                            />
                          </div>
                          <span className="product-thumbnail__quantity">
                            {el.quantity}
                          </span>
                        </div>
                      </a>
                      <div className="product-inner">
                        <p className="product-name">
                          <a href={`/product/${el.product_id}`}>
                            <span className="lang1">{el.title}</span>
                          </a>
                        </p>
                      </div>
                      <div className="cart-collateral">
                        <span className="price">
                          ₹{" "}
                          {el.mrp.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </li>
                  </React.Fragment>
                );
              })}
        </List>
      </div>

      <div className="discountInput">
        <InputComp label="Discount code" />
        <button>Apply</button>
      </div>

      <div className="order-summary">
        <div className="summary">
          <p>
            <span>Subtotal</span>
            <span>
              ₹
              {total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </span>
          </p>
          <p>
            <span>Shipping</span>
            <span>Calculated at next step</span>
          </p>
        </div>

        <div className="total">
          <p>
            <span>Total</span>
            <span>
              <span className="currency">INR</span> ₹
              {total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </span>
          </p>
        </div>
      </div>
    </PromoDiv>
  );
};

export default Promo;
