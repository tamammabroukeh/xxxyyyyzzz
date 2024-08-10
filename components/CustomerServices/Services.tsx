import _Swiper from "./_Swiper";
import Service from "./Service";

import { ServicesData } from "@/data/index";
export default function Services() {
  return (
    <>
      <_Swiper numberOfSlides={3}>
        {ServicesData.slice(0, 4).map((skill, index) => (
          <Service key={index} {...skill} />
        ))}
      </_Swiper>
      <_Swiper numberOfSlides={2} reverseDirection={true}>
        {ServicesData.slice(4).map((skill, index) => (
          <Service key={index} {...skill} />
        ))}
      </_Swiper>
    </>
  );
}
