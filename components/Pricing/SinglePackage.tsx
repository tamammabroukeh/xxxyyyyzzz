import { IconCircleCheck } from "@tabler/icons-react";
import Link from "next/link";

import { Card, SingleDetail } from ".";

import { IPackages } from "@/interfaces";
export default function SinglePackage({
  GPTPlus,
  ImageTokens,
  Support,
  WordTokens,
  id,
  price,
  type,
}: IPackages) {
  const Icon = (
    <IconCircleCheck className="text-blue-500 w-8 h-8 md:w-10 md:h-10" />
  );
  const GPT = <SingleDetail>ChatGPT {GPTPlus ? "Plus" : "3.5"}</SingleDetail>;
  const isSupport = (
    <SingleDetail>{Support ? "Advanced" : "Basic"} Support</SingleDetail>
  );
  const isLimited = WordTokens.includes("Unlimited");
  const Words = isLimited ? (
    <SingleDetail {...{ isLimited }}>Word Tokens</SingleDetail>
  ) : (
    <SingleDetail>{WordTokens} Word Tokens</SingleDetail>
  );
  const Images = isLimited ? (
    <SingleDetail {...{ isLimited }}>Image Tokens</SingleDetail>
  ) : (
    <SingleDetail>{ImageTokens} Image Tokens</SingleDetail>
  );

  return (
    <Card>
      <div className="flex flex-col gap-3 md:gap-5 lg:gap-8">
        <h1 className="text-3xl md:text-xl lg:text-3xl text-center font-[500] leading-[2.5rem] bg-clip-text text-transparent text-gradient-inspiring">
          {type}
        </h1>
        <div className="flex font-[500] justify-start gap-1 text-black-200 ml-2">
          <h3 className="text-3xl leading-[2.55rem]">${price}</h3>
          <sub className="text-lg mt-1 leading-[1.8rem]">/Monthly</sub>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:gap-4 justify-center items-start">
        {[GPT, isSupport, Words, Images].map((info, idx) => (
          <div
            key={idx}
            className="flex gap-2 justify-start text-start items-center"
          >
            {Icon}
            {info}
          </div>
        ))}
      </div>
      <Link
        className={`${!type.includes("Standard") ? "bg-slate-400 text-black-200" : "bg-gray-900 text-slate-400"} animate transition-all duration-150 delay-150 ease-in-out rounded-2xl py-[0.625rem] text-md leading-[1.5rem] font-[400] hover:text-background z-10 relative cardButton`}
        href={id}
      >
        Select Free
      </Link>
    </Card>
  );
}
