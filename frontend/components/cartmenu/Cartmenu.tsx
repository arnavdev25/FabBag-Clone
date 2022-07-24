import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { CartMenuStyled } from "./CartMenuStyled";
import axios from "axios";
import Link from "next/link"

type Anchor = "right";

type propType = {
  isOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export type product = {
  quantity: number;
  _id: string;
  category: string;
  title: string;
  mrp: number;
  discount: boolean;
  price: number;
  shortDisc: string;
  outofstock: boolean;
  image: string;
  userid: string;
  fullDisc: string;
  product_id: string;
};

const CartMenu = ({ isOpen, toggleDrawer }: propType) => {
  const [total, setTotal] = React.useState(0);
  const [cartData, setCartData] = React.useState<product[]>([]);
  const [userid,setUserId] = React.useState("")

  React.useEffect(() => {
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

  React.useEffect(() => {
    const id:string = window.localStorage.userid || "";
    setUserId(id)
    axios
      .get(
        `https://fabbag-backend.herokuapp.com/cart/getCartData/${id}`
      )
      .then((res) => {
        console.log('res:', res)
        if (res.data.data) {
          setCartData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id: string) => {
    axios
      .delete(`https://fabbag-backend.herokuapp.com/cart/deleteProduct/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const list = (anchor: Anchor) => (
    <Box sx={{ width: "auto" }} role="presentation">
      <CartMenuStyled>
        <div className="continue-shoping">
          <span data-translate="header.my_cart">My Cart</span>
          <a>
            <CloseIcon
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            />
          </a>
        </div>

        <List className="cart-list">
          {cartData.length === 0
            ? "You have no items in your shopping cart."
            : cartData.map((el: product, i: number) => {
                return (
                  <React.Fragment key={i}>
                    {i !== 0 && <Divider sx={{ margin: "24px 0px" }} />}
                    <li className="item" id="cart-item">
                      <a
                        href="/"
                        title="The Beauty Bundle July Fab Bag"
                        className="product-image"
                      >
                        <Image
                          width={96}
                          height={96}
                          src={el.image}
                          alt="The Beauty Bundle July Fab Bag"
                        />
                      </a>
                      <div className="product-inner">
                        <p className="product-name">
                        <a href={`/product/${el.product_id}`}>
                            <span className="lang1">{el.title}</span>
                          </a>
                        </p>
                        <div className="option"></div>
                        <div className="cart-collateral">
                          <span
                            className="qty-cart"
                            data-translate="header.qty"
                          >
                            Qty: {el.quantity}
                          </span>
                          <span className="price">
                            Rs.{" "}
                            {el.mrp.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                      <a href="/" title="Remove Item" className="btn-remove">
                        <CloseIcon onClick={() => handleDelete(el._id)} />
                      </a>
                    </li>
                  </React.Fragment>
                );
              })}
        </List>

        {cartData.length === 0 ? null : (
          <div className="wrap-btcart">
            <div className="summary">
              <p className="total">
                <span className="label" data-translate="header.total">
                  Total:
                </span>
                <span className="price">
                  Rs.{" "}
                  {total.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </p>
            </div>
            <div className="actions">
              <div className="view-cart">
                <a
                  className="harman_btn4"
                  href={`/Cart/${userid}`}
                  data-translate="header.viewcart"
                >
                  View Cart
                </a>
              </div>
              <button
                className="btn harman_btn4"
                data-translate="header.checkout"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </CartMenuStyled>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <SwipeableDrawer
          anchor={"right"}
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default CartMenu;
