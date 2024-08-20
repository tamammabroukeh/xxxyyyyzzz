import Link from "next/link";

import { ISetUpCard } from "@/interfaces";

const SetUpCard = ({
  Imgs,
  description,
  title,
  href,
  left,
  marginBottom,
  zIndex,
}: ISetUpCard) => {
  return (
    <div className="shadow-2xl hover:shadow-slate-500 flex flex-col  hover:rotate-effect transition-all duration-700">
      <div className="relative">
        <div className="lg:flex">
          <div className="md:relative flex justify-between md:justify-end items-end">
            <Imgs.img1
              className={`mb-${marginBottom} lg:static md:absolute  md:left-0 h-72 w-40 md:w-auto md:h-auto rotate-image-1 transition-transform duration-500 delay-150 ease-in-out`}
            />
            <Imgs.img3
              className={`rotate-image-3 md:w-auto md:h-auto h-full w-36 transition-transform mb-16 md:mb-0 duration-500 delay-150 ease-in-out z-${zIndex}`}
            />
            <div className={`absolute bottom-0 left-[25%] md:left-[${left}%]`}>
              <Imgs.img2 className="rotate-image-2 md:w-auto md:h-auto w-40 transition-transform delay-150 duration-500 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="shadow-lg bg-white-100 text-black-200 p-3 md:p-5 absolute -bottom-14 md:-bottom-20 w-full z-10 rounded-xl">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-md md:text-lg font-[500] leading-[1.8rem]">
              {title}
            </h3>
            <p className="text-sm md:text-base leading-[1.2rem] font-[400]">
              {description}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              className="flex cardButton relative z-10 rounded-2xl hover:text-background bg-white-350 mt-5 text-md leading-[1.5rem] px-10 md:px-14 py-2"
              href={href}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUpCard;
