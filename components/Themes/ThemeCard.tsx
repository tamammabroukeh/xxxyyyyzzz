/* eslint-disable prettier/prettier */
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

import { ItemLayout } from "../Animation";

import { IThemeCards } from "@/interfaces";
import { textSlicer } from "@/utils/functions";
export default function ThemeCard({ themesCard }: IThemeCards) {
  const {
    description,
    img,
    isFavourite,
    isPremium,
    numberOfFavourites,
    title,
    isAvailable,
  } = themesCard;
  const bgColor = isAvailable ? "bg-gray-500":"bg-gray-450";

  return (
    <ItemLayout>
      <Card isPressable className="relative bg-white-100" shadow="md">
        <CardHeader className="absolute z-10 top-3 right-3 md:top-7 md:right-7 flex-col !items-end">
          <div className={`px-4 md:px-6 py-2 ${bgColor} rounded-full`}>
            {isAvailable ? (
              <h4 className="text-theme opacity-100 leading-[24px] font-[500] text-[17px] md:text-md">
                {isPremium ? "Premium Theme" : "Free Theme"}
              </h4>
            ) : (
              <h4 className="text-gray-800 leading-[24px] opacity-100 font-[500] text-[17px] md:text-md">
                Not Available
              </h4>
            )}
          </div>
        </CardHeader>
        <CardBody className="overflow-visible p-0 z-0">
          <Image
            isZoomed
            alt={title}
            className="w-full h-[370px] lg:h-[486px] rounded-tr-2xl rounded-tl-2xl relative object-cover"
            radius="none"
            shadow="sm"
            src={img}
            width="100%"
          />
          {!isAvailable && <div className="absolute px-7 py-2 rounded-3xl flex justify-center items-center top-[45%] left-[20%] md:left-[30%] z-10 bg-blue-350 ">
            <p className="text-white-100 font-[500] text-md md:text-lg">In progress...</p>
          </div>}
        </CardBody>
        <CardFooter className="md:px-5 lg:px-8 bg-white-100 mb-5 mt-3 gap-2 justify-between flex-wrap">
          <div className="flex w-full justify-between items-center text-black-200">
            <p className="font-[500] text-lg">{title}</p>
            <p className="flex items-center justify-center">
              {isFavourite ? (
                <IconStarFilled
                  className="w-5 h-5 mb-1.5 mr-2"
                  fill="#FFF86BF2"
                />
              ) : (
                <IconStar className="w-5 h-5 mb-1.5 mr-2 text-yellow-300" />
              )}
              {Number(numberOfFavourites).toFixed(2)}k
            </p>
          </div>
          <Tooltip
            className="flex leading-tight text-[20px] justify-center items-center"
            color="foreground"
            content={description}
            delay={500}
            placement="top"
          >
            <p className="text-gray-200 font-[400] text-base">
              {textSlicer(description) === description
                ? description
                : textSlicer(textSlicer(description), 50)}
              {textSlicer(description) !== description && (
                <span className="text-blue-100 text-base font-[400]">
                  {" "}
                  , See More...
                </span>
              )}
            </p>
          </Tooltip>
        </CardFooter>
      </Card>
    </ItemLayout>
  );
}
