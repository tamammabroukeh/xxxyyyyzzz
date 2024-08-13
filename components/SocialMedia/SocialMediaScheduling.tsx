/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

import GetStartedButton from "../ui/GetStartedButton";

import { SocialIcons } from ".";

import { SocialMediaSchedulingIcon } from "@/public";

export default function SocialMediaScheduling() {
  return (
    <div className="flex justify-between items-center pt-12 md:mt-0 flex-col md:flex-row md:gap-6 lg:gap-10">
      {/* left side */}
      <div className="basis-1/2 text-start flex flex-col justify-around items-start gap-5 lg:gap-10">
        <div className="w-[90%] flex flex-col gap-6 md:gap-2 lg:gap-6">
          <h2 className="text-2xl leading-[2.5rem] md:text-xl lg:text-6xl font-[500] md:leading-tight lg:leading-[3.6rem] text-black-200">
            Effortless Social Media Scheduling
          </h2>
          <p className="font-[400] leading-[1.5rem] md:text-sm lg:text-md">
            Visually plan and schedule your content delivery with click, drag
            and drop. It's as easy as that.
          </p>
        </div>
        {/* icons */}
        <div className="flex flex-wrap justify-start gap-4 md:gap-3 lg:gap-6 ">
          <SocialIcons />
        </div>
        <GetStartedButton
          IconClasses="w-7 h-7"
          classes="hidden md:flex px-2 md:px-[12px] py-[1.25rem] md:py-[2rem] lg:text-2xl"
        >
          Get Started
        </GetStartedButton>
      </div>
      {/* right side */}
      <div className="basis-1/2">
        <Image
          alt="Social Media Scheduling"
          className="w-full object-cover"
          src={SocialMediaSchedulingIcon}
        />
      </div>
      <GetStartedButton
        IconClasses="w-6 h-6"
        classes="flex justify-center items-center flex-1 mt-5 w-[50%] md:hidden py-[1rem]"
      >
        Get Started
      </GetStartedButton>
    </div>
  );
}
