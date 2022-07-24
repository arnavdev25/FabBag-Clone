import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./Swipe.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Swipe() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className={style.first}
      >
        <SwiperSlide> <FaQuoteLeft size={"40px"} ></FaQuoteLeft></SwiperSlide>
        <SwiperSlide><FaQuoteLeft size={"40px"} ></FaQuoteLeft></SwiperSlide>
        <SwiperSlide><FaQuoteLeft size={"40px"} ></FaQuoteLeft></SwiperSlide>
        <SwiperSlide><FaQuoteLeft size={"40px"} ></FaQuoteLeft></SwiperSlide>
        <SwiperSlide><FaQuoteLeft size={"40px"} ></FaQuoteLeft></SwiperSlide>
        
      </Swiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className={style.second}
      >
        <SwiperSlide>I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab bags and all the lovely products and cute little pouches that I get. I love Fab Bag.</SwiperSlide>
        <SwiperSlide>I&#39;ve been a regular Fab Bag subscriber for many years now and I must say that the Fab Bag team comes up with something or the other as a special attraction in the bag every month. As always, thank you Fab Bag for making my day with this bag!!!</SwiperSlide>
        <SwiperSlide>I like the fact that they offer high-quality products. Every single product from the bag stands out. It is a MUST TRY for every girl out there.</SwiperSlide>
        <SwiperSlide>I am highly impressed with the idea of surprising the customers by leaving them to guess, whats inside the Bag. Surprises brings excitement and I am always excited to receive my Fab Bag. First of all I should say that the Bags are awesome and each time I got my Fab Bag, I was really happy to find whats inside it. Really satisfied! :)</SwiperSlide>
        <SwiperSlide>This is my second month and I am already addicted. Can&#39;t wait for my third bag. It feels like someone with so much love who loves pampering you. Thank you Fab bag. Amazing products Thank you with gratitude.</SwiperSlide>
        <SwiperSlide>Who doesn&#39;t want to get pampered? And this bag is all you need when you want to show some extra love to yourself. Every other product is of the best quality. And top of it doesn&#39;t burn a hole in your pocket. Every month I just wait for my bag as a small kid waits for her favourite toy. This Fab Bag is an upright bliss.</SwiperSlide>
        <SwiperSlide>I am getting addicted to Fab Bag&#39;s. The first one I had ordered was simply to check it out as my friend had recommended. I am not someone who spends a lot of time thinking about beauty products and I am clueless when it comes to such matters. Which is why the Fab Bag&#39;s are perfect for me. This August Fab Bag had everything I needed! The product curation is perfect. It&#39;s like having my own personal shopper for beauty products and such pretty bags too.</SwiperSlide>
        <SwiperSlide>The products are amazing and I am just in love with the bag! Kudos to you team!</SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
       
        navigation={false}
        modules={[Autoplay,Navigation]}
        className={style.second}
        style={{marginTop:"10px"}}
      >
        <SwiperSlide>-- Munira</SwiperSlide>
        <SwiperSlide>-- Poonam</SwiperSlide>
        <SwiperSlide>-- Shikha</SwiperSlide>
        <SwiperSlide>-- Pratika</SwiperSlide>
        <SwiperSlide>-- Kirthana</SwiperSlide>
        <SwiperSlide>-- Anushree</SwiperSlide>
        <SwiperSlide>-- Shailena</SwiperSlide>
        <SwiperSlide>-- Niranjana</SwiperSlide>
      </Swiper>
    </>
  );
}
