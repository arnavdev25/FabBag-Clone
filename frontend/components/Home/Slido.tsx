import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Swipe.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay } from "swiper";

export default function Slido() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
       
        autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
        modules={[Autoplay]}
        className={style.third}
      >
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/sugar_1_160x160.jpg?v=1548837170" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Plum_Logo_For_Olive_and_Macadamia_Hair_Spa_Kit_160x160.png?v=1625063052" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Tru_hair_logo_160x160.png?v=1625063080" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/WOC_Beauty_Logo_160x160.jpg?v=1602225835" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Baiser_India_Logo_160x160.jpg?v=1625063066" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/6256280-43d286588b4beafb0e4a423acf72a620-medium_jpg_5e3480ef-0e7a-4aea-88d0-c48379ad9837_160x160.jpg?v=1599290601" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/brick-new-york-with-symbol-white_46f7f93d-9ac3-4a6b-8827-7341564c001c_160x160.png?v=1599126230" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/palmers-logo_33a73358-5f3d-4cd4-ac8c-ecf89a2c72b2_160x160.jpg?v=1597725541" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/LLW1vAyf_400x400_36a490d2-defb-4c90-898d-2af5215e8433_160x160.jpg?v=1578730298" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/719h_SoVZLL._SX466_160x160.jpg?v=1594029424" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
