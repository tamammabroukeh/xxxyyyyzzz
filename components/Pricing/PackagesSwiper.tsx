"use client";
import "swiper/css/pagination";
import "./styles.css";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import React from "react";

export default function PackagesSwiper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Swiper
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 1,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
      }}
      className="packages"
      modules={[Pagination]}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      spaceBetween={16}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="mb-8 space-x-5 shadow-xl">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
