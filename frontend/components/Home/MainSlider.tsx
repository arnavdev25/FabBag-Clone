/* eslint-disable react/no-unescaped-entities */
import React from "react";
import style from "../../styles/Home.module.css";
import Swipe from "./Swipe";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slido from "./Slido";
const MainSlider = () => {
 
  return (
    <>
      <div className={style.MainSlider}></div>
      <div className={style.h3}>
        <h3>
          <span>WHAT'S IN MY BEAUTY BUNDLE</span>
        </h3>
      </div>
      <div className={style.beauty}>
        <div>
          <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-1_914eb815-9c7e-4ca1-ad10-39708a1afb45_2048x.png?v=1656613248" />
          </a>
          <h5>BEAUTY BUNDLE 1</h5>
        </div>
        <div>
          <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-02_a0530e7f-1a15-4464-9352-b976da7c39ec_2048x.png?v=1656613307" />
          </a>
          <h5>BEAUTY BUNDLE 2</h5>
        </div>
        <div>
          <a href="#">
            <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-03_d1a367d9-0873-4e30-b3a6-434ad508a503_2048x.png?v=1656613363" />
          </a>
          <h5>BEAUTY BUNDLE 3</h5>
        </div>
      </div>
      <div className={style.h3}>
        <h3>
          <span>SUBSCRIPTION</span>
        </h3>
      </div>
      <div className={style.subscription}>
        <div>
          <div>
            <h4>1 MONTH</h4>
            <p>SUBSCRIPTION</p>
          </div>
          <div>
            <h4>Rs. 599.00</h4>
            <p>/per month</p>
          </div>
          <div>
            <p>ONE TIME PAYMENT</p>
            <h4>Rs. 599.00</h4>
          </div>
          <div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={style.h3}>
        <h3>
          <span>PREVIOUS BAG</span>
        </h3>
      </div>
      <div className={style.prev}>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_large.gif?v=1655088937" />
          <h3>Jun'22 The Make It Reign Fab Bag</h3>
          <p>
            <span>from</span> Rs. 599.00
          </p>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS_large.gif?v=1652238042"
            alt=""
          />
          <h3>May'22 The AweSummer May Fab Bag</h3>
          <p>
            <span>from</span> Rs. 599.00
          </p>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_1728264b-2e0f-4314-9a3c-0fde458d72a7_large.png?v=1649483317"
            alt=""
          />
          <h3>Apr'22 The Sassy Spring Fab Bag</h3>
          <p>
            <span>from</span> Rs. 599.00
          </p>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_large.png?v=1646971494"
            alt=""
          />
          <h3>Mar'22 The Empow-HER Fab Bag</h3>
          <p>
            <span>from</span> Rs. 599.00
          </p>
        </div>
      </div>
      <div className={style.test}>
        <div className={style.h3}>
          <h3>
            <span>TESTIMONIALS</span>
          </h3>
        </div>
        <div className={style.quote}>
          <Swipe />
        </div>
      </div>
      <div className={style.trend}>
        <p>#TRENDINGNOW AT THE GOSSIP CORNER</p>
        <div>
          <img src="https://scontent.cdninstagram.com/v/t51.2885-15/294012533_774496537083821_7636241921144176121_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uGEZBliZeB0AX9EdUWP&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT95Y5jXYx4VXv7T9XNzwTHpFGwgpWLD6Q7IOh9wg4uIEw&oe=62DCF1D0" />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/293959375_579020320285854_5244741477978574095_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=q9ytKsurdLkAX8bHEkG&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-_-PT9m9nc4K3TOOwsqnh1oTyLWuaBpEfeEOEevFtsuA&oe=62DD4EA1"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/294096759_450658463302958_4045206232575120004_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=BBSZmx87ZN4AX_VylCI&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_S5ngvqFe0CEhEmQ4OoWZldT294XqZ6gtC-DD89P2Anw&oe=62DCD267"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/293617207_5536613459723455_8499228947971252628_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=aKbuVQwQG9wAX-2e5Qt&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9r48xxokIB3Q-lKW3XpomPsreDMubA1Nu01etcR2RN2A&oe=62DC388C"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/293532479_5691905357489043_4455083400628979450_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ZbjzuWdsIh4AX_VhL7O&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_g91o5ZlQTnWKmuoZZ-OTuTNy7OwkHJbxyaYHCgBV4jQ&oe=62DD652B"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/293796907_719156479372990_2032374052008623233_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=_BYhzM9PPhcAX8EYZIx&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9B4WTRqJ8w0n0l_ZjgQWEEusILLckhLQAq_CyDZJKkFg&oe=62DBDF8B"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/293555444_5297172007040895_7963287136178689016_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=VjV_91G0yT8AX996VeF&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9Sr0h5-UTVVFgtrtEBvg8fAlZ-NYHFxFobMVTYTPOfVw&oe=62DC5628"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/292496827_2265658226924157_432551984701791306_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ng8aiVkOepkAX-om2Cd&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT86G_iN2wq0h70tFISInABIbWC71s6G-kvnwUBEhUYiSQ&oe=62DD02D5"
            alt=""
          />
        </div>
      </div>

      <div className={style.slido}>
        <Slido />
      </div>
    </>
  );
};

export default MainSlider;
