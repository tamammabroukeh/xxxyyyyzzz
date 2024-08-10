/* eslint-disable prettier/prettier */
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { IconChevronsRight } from "@tabler/icons-react";
import { Avatar } from "@nextui-org/avatar";

import { ItemLayout } from "../Animation";

import { SocialIntegrationIcons } from "./SocialIcons";
import { ComingHome } from "./icons";

import { PhotoPost, PhotoPostSmall } from "@/public";

export default function SocialMediaIntegration() {
  return (
    <div className="pt-10 gap-8 md:gap-4 lg:gap-0 flex flex-col-reverse md:flex-row">
      <div className="basis-1/2 relative">
        <Image alt="Photpost" className="hidden md:block" src={PhotoPost} />
        <Image alt="Photpost" className="block md:hidden" src={PhotoPostSmall} />
        <div className="absolute z-10 right-0 md:right-[40%] lg:right-[10%] -top-5 md:top-[10%] flex gap-3 md:gap-4 flex-col">
          {SocialIntegrationIcons()}
        </div>
        <ItemLayout className="absolute px-7 py-3 md:px-4 md:py-2 lg:px-6 lg:py-4 shadow-2xl rounded-lg right-[0%] lg:right-[20%] -bottom-[8%] z-10 bg-white-500 flex flex-col gap-0 lg:gap-2">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Avatar
                className="w-7 h-7 lg:w-10 lg:h-10"
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              />
              <p className="font-[400] text-sm lg:text-base leading-[1.2rem]">Sarah E</p>
            </div>
            <p className="text-xs md:text-sm font-[400] text-gray-100">2min Ago</p>
          </div>
          <ComingHome className="w-52 lg:w-full"/>
        </ItemLayout>
      </div>
      <div className="md:mt-5 lg:mt-20 flex justify-center flex-col basis-1/2 gap-8 md:gap-3 lg:gap-6">
        <h2 className="font-[500] text-center md:text-start text-md lg:text-lg leading-[1.8rem] text-gradient-inspiring">
          Social Media Integration.
        </h2>
        <div className="w-full lg:w-[90%] flex flex-col gap-6 md:gap-4 lg:gap-8">
          <h1 className="font-[500] text-start text-black-200 text-3xl leading-[2.5rem] lg:text-6xl lg:leading-[3.6rem]">
            Cross post - with a single click.
          </h1>
          <p className="text-black-200 text-start md:text-base text-md leading-[24px] font-[400]">
            Choose which social channels you want to post to - create once,
            publish everywhere.
          </p>
          <Button
            className="hidden md:flex justify-start bg-transparent px-[8px] md:pr-4 py-[20px] md:py-8 text-md md:text-md lg:text-2xl text-black-200 w-[50%]"
            endContent={<IconChevronsRight className="md:w-12 md:h-12 lg:w-8 lg:h-8" />}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
