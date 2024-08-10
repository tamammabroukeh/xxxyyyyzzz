import Service from "./Service";
import _Swiper from "./_Swiper";

import { ServicesData } from "@/data";

export default function ServicesMobileMode() {
  return (
    <>
      <_Swiper numberOfSlides={1}>
        {ServicesData.slice(0, 3).map((skill, index) => (
          <Service key={index} {...skill} />
        ))}
      </_Swiper>
      <_Swiper numberOfSlides={1} reverseDirection={true}>
        {ServicesData.slice(3, 5).map((skill, index) => (
          <Service key={index} {...skill} />
        ))}
      </_Swiper>
      <_Swiper numberOfSlides={1}>
        {ServicesData.slice(5).map((skill, index) => (
          <Service key={index} {...skill} />
        ))}
      </_Swiper>
    </>
  );
}
