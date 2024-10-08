/* eslint-disable prettier/prettier */
import Image from "next/image";
import { IconTrendingUp } from "@tabler/icons-react";
import React from "react";

import { ItemLayout } from "../Animation";
import { SectionLayout, SubSectionLayout } from "..";

import { Tasks, CardsLayout} from ".";

import {
  InspiringRectangle1,
  InspiringRectangle21,
  InspiringRectangle7,
  InspiringRectangle5,
  InspiringRectangle6,
  InspiringRectangle41,
  InspiringRectangle42,
  InspiringRectangle31,
  InspiringRectangle32,
} from "@/public";


export default function FeatureSection() {
  const columnOne = () => {
    return <CardsLayout className="">
            {/* card 1 */}
            <ItemLayout  className="basis-[55%] md:basis-[50%] lg:basis-[45%] xl:basis-[55%] relative">
              <Image alt="InspiringRectangle" className="w-full" src={InspiringRectangle1}/>
              <div className="absolute w-[80%] top-8 mx-7 text-white-300 text-start">
              <h3 className="font-[500] text-lg">Maximum Creativity</h3>
              <p>Engage audience with your unique Style using AI.</p>
              </div>
            </ItemLayout>
            {/* card 2 */}
            <ItemLayout className="basis-[45%] md:basis-[50%] lg:basis-[45%] xl:basis-[55%] p-6 bg-white-100">
              <div className="flex justify-between mx-2 items-center">
                <h2 className="text-lg font-[500]">Task Manager</h2>
                <Image alt="InspiringRectangle" src={InspiringRectangle21}  />
              </div>
              <div className="flex flex-col justify-center">
                <Tasks />
              </div>
            </ItemLayout>
          </CardsLayout>
  }
  const columnTwo = () => {
    return <CardsLayout className="">
            {/* card 3 */}
            <ItemLayout className="basis-1/3 flex min-h-56 md:h-auto flex-col bg-white-100 relative">
              <div className="basis-1/3" />
              <div className="basis-1/3 -mt-3 relative flex justify-center items-center">
                <Image alt="InspiringRectangle" className=" absolute z-10" src={InspiringRectangle31} />
                <Image alt="InspiringRectangle" className="absolute -bottom-7 right-8" src={InspiringRectangle32} />
              </div>
              <div className="basis-1/3 absolute bottom-0">
                <h3 className="text-gradient-inspiring-3 p-3 md:p-4 text-base md:text-lg font-[600]">Invite People Over</h3>
              </div>
            </ItemLayout>
            {/* card 4 */}
            <ItemLayout className="basis-1/3 p-5 min-h-56 md:h-auto relative bg-white-100">
              <div className="flex justify-start">
                <Image alt="InspiringRectangle" src={InspiringRectangle41} />
              </div>
              <div className="flex justify-end">
                <Image alt="InspiringRectangle" src={InspiringRectangle42} />
              </div>
              <h3 className="font-[500] text-base md:text-md text-start absolute bottom-4">Multi-Language Support</h3>
            </ItemLayout>
            {/* card 5 */}
            <ItemLayout className="basis-1/3 w-full bg-white-100">
              <div className="flex justify-end p-2">
                <IconTrendingUp className="w-5 h-6 text-blue-200" />
              </div>
              <Image alt="InspiringRectangle" className="px-5" src={InspiringRectangle5}/>
              <h3 className="text-gradient-inspiring-5 font-[500] text-[18px] my-5">24/7 Customer Support</h3>
            </ItemLayout>
          </CardsLayout>
  }
  const columnThree = () => {
    return <CardsLayout className="lg:flex md:grid gap-5 md:grid-cols-2 lg:col-auto md:col-span-2">
            {/* card 6 */}
            <ItemLayout className="bg-white">
              <div  className="overflow-hidden max-h-[230px] xl:max-h-[300px]">
                <Image alt="InspiringRectangle" className="w-full rounded-2xl " src={InspiringRectangle6}/>
              </div>
              <div className="p-4 w-[90%] text-black-200 text-start flex flex-col gap-2 justify-center items-start">
                <h3 className="font-[500] text-lg">100% Integrated</h3>
                <p>Seamlessly Connect all your existing apps.</p>
              </div>
            </ItemLayout>
            {/* card 7 */}
            <ItemLayout className="relative">
              <Image alt="InspiringRectangle" className="h-full object-cover rounded-2xl w-full" src={InspiringRectangle7}/>
              <h3 className="absolute text-start top-5 text-black-200 text-[18px] mx-3 font-[500]">Advanced Dashboard</h3>
            </ItemLayout>
          </CardsLayout>
  }

  return (
    <SectionLayout>
      <SubSectionLayout header="Inspiring Feature Wating For you" title="Explore What's Include" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* column 1  */}
          {columnOne()}
          {/* column 2 */}
          {columnTwo()}
          {/* column 3 */}
          {columnThree()}
        </div>
      </SubSectionLayout>
    </SectionLayout>
  );
}