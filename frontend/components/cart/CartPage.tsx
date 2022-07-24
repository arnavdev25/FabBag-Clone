import React from "react";
import { CartPageStyled } from "./CartPageStyled";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link"
import { product } from "../cartmenu/Cartmenu";
import axios from "axios";

const CartPage = ({ Data }: any) => {



  const [total, setTotal] = React.useState(0);
  const [cartData, setCartData] = React.useState<product[]>(
    Data.data.data ? Data.data.data : []
  );



  let updateTimer: any;

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

  const updateCart = (
    product_id: string,
    userid: string,
    quantity: number,
    updateTimer: any
  ) => {
    if (typeof quantity !== "number") {
      return;
    }

    if (updateTimer) {
      clearTimeout(updateTimer);
    }

    updateTimer = setTimeout(() => {
      axios
        .patch("https://fabbag-backend.herokuapp.com/cart/updateCart", {
          product_id,
          userid,
          quantity,
        })
        .then((res) => {
          setCartData(res.data.data);
        })
        .catch((err) => console.log(err));
    }, 1000);
  };

  const handleDelete = (id: string) => {
    axios
      .delete(`https://fabbag-backend.herokuapp.com/cart/deleteProduct/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CartPageStyled>
      <div className="cartDiv">
        <div className="heading">
          <h1>My Cart</h1>
        </div>

        {cartData.length === 0 ? (
          <h2 className="tc" data-translate="page_cart.cart_empty">
            Your cart is empty!!
          </h2>
        ) : (
          <div className="cartDetails">
            <div className="cartProdutsList">
              <table>
                <thead>
                  <tr>
                    <th className="image">Product</th>
                    <th className="item">&nbsp;</th>
                    <th className="qty">Qty</th>
                    <th className="price">Price</th>
                    <th className="remove"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartData &&
                    cartData.map((item: product, i: number) => (
                      <tr key={i}>
                        <td className="image">
                          <div className="product_image">
                            <a href="/products/c2p-pro-epic-matte-lip-ink-04-lustrous-fuschsia?variant=39557881102382">
                              <Image
                                width={"160px"}
                                height={"100%"}
                                src={item.image}
                                alt="C2P Pro Epic matte lip ink - 04 Lustrous Fuschsia"
                              />
                            </a>
                          </div>
                        </td>
                        <td className="item">
                          <a href={`/product/${item.product_id}`}>
                            <span className="lang1">{item.title}</span>
                          </a>
                        </td>
                        <td className="qty">
                          <input
                            type="number"
                            name="quantity"
                            onChange={(e) =>
                              updateCart(
                                item._id,
                                item.userid,
                                +e.target.value,
                                updateTimer
                              )
                            }
                            min={"0"}
                            defaultValue={item.quantity}
                            className="tc item-quantity"
                          />
                        </td>
                        <td className="price">
                          <span className="saso-cart-item-line-price">
                            Rs.{" "}
                            {(item.quantity * item.mrp).toLocaleString(
                              undefined,
                              { minimumFractionDigits: 2 }
                            )}
                          </span>
                        </td>
                        <td className="remove">
                          <a
                            className="remove-cart"
                            href="/cart"
                          >
                            <CloseIcon onClick={() => handleDelete(item._id)} />
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="cartButtons">
              <div className="summery">
                <p>Total Price :</p>
                <p>
                  Rs.{" "}
                  {total.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="btns">
                <button>Update Cart</button>
                <button>
                  <Link
                  href="/Address">
                  Check Out
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </CartPageStyled>
  );
};

export default CartPage;
