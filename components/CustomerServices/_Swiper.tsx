"use client";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import React from "react";
export default function _Swiper({
  numberOfSlides,
  reverseDirection = false,
  children,
}: {
  children: React.ReactNode;
  numberOfSlides?: number;
  reverseDirection?: boolean;
}) {
  return (
    <Swiper
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverseDirection,
      }}
      breakpoints={{
        0: {
          slidesPerView: numberOfSlides,
          slidesPerGroup: numberOfSlides,
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
          slidesPerView: numberOfSlides,
          slidesPerGroup: 1,
        },
      }}
      className="w-full flex justify-between items-center"
      loop={true}
      modules={[Autoplay]}
      spaceBetween={10}
      speed={3000}
    >
      {React.Children.map(children, (skill, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          {skill}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
