/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import './style.css'
import { HeroSection, HeroSectionMobile } from "@/public";
import { AiImages } from "@/data";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
const Header = () => {
  const backGroundImage = () => {
    return <>
    <Image
        priority
        alt="Hero section background"
        className="absolute hidden md:block top-0 left-0 lg:w-full h-full"
        placeholder="blur"
        src={HeroSection}
      />
    <Image
        priority
        alt="Hero section background Mobile"
        className="absolute block md:hidden top-0 left-0 w-full h-full"
        placeholder="blur"
        src={HeroSectionMobile}
      />
    </>
  }

  const content = () => {
    return <div className="absolute flex top-[18%] md:-top-5 flex-col md:justify-center gap-10 md:gap-5 lg:gap-7 lg: w-full h-full items-center text-center">
        <h1 className="text-black-200 md:ml-12 leading-[76px] md:leading-none text-8xl md:text-[55px] lg:text-9xl font-[500] w-[85%] md:w-[80%]">Build Models You Can Trust</h1>
        <p className="md:px-0 md:pt-[0px] lg:mt-[6px] w-[85%] md:w-full text-black-200 font-[400] text-md">Dive into Web Design Excellence with Ocean Scripts AI</p>
        {/* <Button className="gradient-border bg-gray-300 gap-2 md:gap-3 text-black-700 rounded-3xl px-[20px] py-[23px] font-[500] text-base border-l-1 border-blue-300 border-b-1
        " endContent={<IconPlayerPlayFilled fill="#4887A1" />}>
          <div>
            See how it works
          </div>
        </Button> */}
        <Button className="howItWorkBtn bg-gray-300 gap-2 md:gap-3 text-black-700 rounded-3xl px-[20px] py-[23px] font-[500] text-base border-l-1 border-blue-300 border-b-1
        " endContent={<IconPlayerPlayFilled fill="#4887A1" />}>
            See how it works
        </Button>
      </div>
  }

  const aiWebs = () => {
    return <div className="absolute grid place-items-center my-auto place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-20 md:space-y-0 md:gap-5 py-8 md:py-5 lg:p-8 w-full bg-gray-400 bottom-0">    
        {AiImages.map((Item) => 
          <React.Fragment key={Item.id}>
              <Item.Icon />
          </React.Fragment>
        )}
      </div>
  }

  return (
    <div className="relative h-[1182px] md:h-[606px] w-full">
      {backGroundImage()}
      {content()}
      {aiWebs()}
    </div>
  );
};

export default Header;