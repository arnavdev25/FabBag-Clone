import Link from "next/link";
import React, { ChangeEvent, useState ,useEffect} from "react";
import { FormDiv } from "./formStyled";
import InputComp from "./InputComp";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import axios from "axios";
import { useRouter } from 'next/router'

type addressTypes = {
  email: string;
  name: string;
  first_name: string;
  last_name: string;
  company?: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  pincode: number;
  phone: string;
};

const FormComp = () => {
  const router = useRouter()
  const [userAddress, setUserAddress] = useState({});
  const [userid,setUserId] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAddress({ ...userAddress, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    axios
      .post("https://fabbag-backend.herokuapp.com/cart/addUserAdress", {userid,...userAddress})
      .then((res) => {
        router.push("/payment")
      })
      .catch((res) => console.log(res));
  };

  useEffect(() => {
    const id = window.localStorage.userid;
    setUserId(id);
  },[])

  return (
    <FormDiv>
      <div className="userDiv">
        <div className="userDivHeading">
          <p>Contact information</p>
          <p>
            Already have an account?
            <span>
              <Link href={"/login"}>{" Log in"}</Link>
            </span>
          </p>
        </div>
        <div className="section__content">
          <InputComp
            name="email"
            onChange={(e) => handleChange(e)}
            label="Email"
          />

          <div className="fieldset-description" data-buyer-accepts-marketing="">
            <div className="section__content">
              <div className="checkbox-wrapper">
                <div className="checkbox__input">
                  <input name="checkout" type="hidden" value="0" />
                  <input
                    className="input-checkbox"
                    type="checkbox"
                    value="1"
                    defaultChecked={true}
                    name="checkout"
                    id="checkout_buyer_accepts_marketing"
                  />
                  <label
                    className="checkbox__label"
                    htmlFor="checkout_buyer_accepts_marketing"
                  >
                    Email me with news and offers
                  </label>
                </div>
              </div>
            </div>

            <div className="address_Form">
              <div className="address_Form__header">
                <h2 className="address_Form__title">Shipping address</h2>
              </div>

              <div className="address_Form__inputs">
                <InputComp
                  name="country"
                  onChange={(e) => handleChange(e)}
                  label="Country/region"
                />

                <div className="address_Form_name">
                  <InputComp
                    name="first_name"
                    onChange={(e) => handleChange(e)}
                    label="First Name"
                  />
                  <InputComp
                    name="last_name"
                    onChange={(e) => handleChange(e)}
                    label="Last Name"
                  />
                </div>

                <InputComp
                  name="company"
                  onChange={(e) => handleChange(e)}
                  label="Company (optional)"
                />

                <InputComp
                  name="address"
                  onChange={(e) => handleChange(e)}
                  label="Address"
                />

                <InputComp
                  name="apartment"
                  onChange={(e) => handleChange(e)}
                  label="Apartment, suite, etc. (optional)"
                />

                <div className="address_Form_name">
                  <InputComp
                    name="city"
                    onChange={(e) => handleChange(e)}
                    label="City"
                  />
                  <InputComp
                    name="state"
                    onChange={(e) => handleChange(e)}
                    label="State"
                  />
                  <InputComp
                    name="pincode"
                    onChange={(e) => handleChange(e)}
                    label="PIN code"
                  />
                </div>

                <InputComp
                  name="phone"
                  onChange={(e) => handleChange(e)}
                  label="Phone"
                  tootip={{
                    title: "In case we need to contact you about your order",
                    placement: "top",
                  }}
                />

                <div className="section__content">
                  <div className="checkbox-wrapper">
                    <div className="checkbox__input">
                      <input name="checkout" type="hidden" value="0" />
                      <input
                        className="input-checkbox"
                        type="checkbox"
                        value="1"
                        name="checkout"
                        id="checkout_buyer_accepts_marketing"
                      />
                      <label
                        className="checkbox__label"
                        htmlFor="checkout_buyer_accepts_marketing"
                      >
                        Save this information for next time
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step__footer" data-step-footer="">
              <Link className="step__footer__previous-link" href={`/Cart/{id}`}>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <NavigateBeforeIcon fontSize="small" />
                  <span className="step__footer__previous-link-content">
                    Return to cart
                  </span>
                </div>
              </Link>
              <button
                name="button"
                type="submit"
                id="continue_button"
                className="step__footer__continue-btn btn"
                onClick={handleClick}
              >
                <span className="btn__content">Continue to shipping</span>
              </button>
            </div>

            <div className="main__footer">
              <ul className="policy-list" role="list">
                <li className="policy-list__item ">
                  <Link href="/">Refund policy</Link>
                </li>
                <li className="policy-list__item ">
                  <Link href="/">Privacy policy</Link>
                </li>
                <li className="policy-list__item ">
                  <Link href="/">Terms of service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FormDiv>
  );
};

export default FormComp;
