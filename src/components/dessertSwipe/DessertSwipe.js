import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import VeganDessertCard from '../dessertCards/VeganDessertCard.js'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style/Dessert.css";

import { EffectCoverflow, Pagination } from "swiper";

function DessertSwip() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <VeganDessertCard />
        </SwiperSlide>
        <SwiperSlide>
          <VeganDessertCard />
        </SwiperSlide>
        <SwiperSlide>
          <VeganDessertCard />
        </SwiperSlide>
        <SwiperSlide>
          <VeganDessertCard />
        </SwiperSlide>
        <SwiperSlide>
          <VeganDessertCard />
        </SwiperSlide>
        <SwiperSlide>
          <VeganDessertCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default DessertSwip;

