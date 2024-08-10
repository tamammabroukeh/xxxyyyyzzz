import Image from "next/image";
import { Button } from "@nextui-org/button";
import { IconChevronsRight } from "@tabler/icons-react";

import { AITextGenerator, AITextGeneratorSmallScreens } from "@/public";
import { IAIContentTabs } from "@/interfaces";
export default function AIGeneratorContent({
  description,
  title,
}: IAIContentTabs) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-black-600 basis-1/2">
        <Image
          alt="Ai text generator"
          className="hidden md:block w-full h-full object-cover"
          src={AITextGenerator}
        />
        <Image
          alt="Ai text generator"
          className="block md:hidden w-full"
          src={AITextGeneratorSmallScreens}
        />
      </div>
      <div className="bg-white-100 md:px-4 px-7 basis-1/2 py-5 flex flex-col justify-around items-start space-y-4 md:space-y-0">
        <div className="bg-black-900 rounded-full">
          <p className="font-[500] py-5 px-[12px] md:py-[0.5rem] md:px-[1.25rem] text-xs md:text-md leading-[14px] md:leading-[1.5rem] text-gradient-inspiring text-nowrap">
            AI {title} Generator
          </p>
        </div>
        <div className="space-y-2 md:space-y-1 animate-slide-left lg:space-y-6 text-black-200">
          <h2 className="text-nowrap text-lg md:text-xl lg:text-5xl xl:text-6xl font-[500] leading-[29px] md:leading-[2.7rem] lg:leading-[57px]">
            Captivating AI {title}
          </h2>
          <p className="md:w-[95%] lg:w-[80%] ml-1 text-sm md:text-[17px] lg:text-md leading-[17px] md:leading-[1.5rem] font-[400]">
            {description}
          </p>
        </div>
        <Button
          className="bg-transparent px-[8px] md:px-[12px] py-[20px] md:py-[2rem] text-md md:text-[25px] lg:text-2xl text-black-200"
          endContent={<IconChevronsRight className="w-7 h-7 md:w-10 md:h-10" />}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
