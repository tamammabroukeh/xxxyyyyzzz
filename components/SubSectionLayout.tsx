import {
  CustomerServicesForm,
  Services,
  ServicesMobileMode,
} from "./CustomerServices";

import { ISubSectionLayout } from "@/interfaces";

export default function SubSectionLayout({
  children,
  description,
  header,
  title,
  subHeader,
  exception = false,
}: ISubSectionLayout) {
  return (
    <div
      className={`border-[1px] flex flex-col gap-10 rounded-[16px] border-white-400 py-10 px-6 md:px-14`}
    >
      <div
        className={`${exception ? "flex md:gap-5 lg:gap-10  flex-col-reverse md:flex-row" : "text-center"} space-y-5`}
      >
        {exception && (
          <div className="basis-1/2 flex flex-col">
            <CustomerServicesForm />
          </div>
        )}
        <div
          className={`${exception ? "basis-1/2 text-center md:text-start" : ""} flex flex-col gap-5`}
        >
          {title && (
            <p className="font-[500] leading-[24px] text-gradient-inspiring text-lg">
              {title}
            </p>
          )}
          {header && (
            <h1
              className={`md:w-[90%] w-[95%] animate-slide font-[500] text-black-200 text-6xl lg:text-7xl leading-[3.5rem] md:leading-none ${exception ? "md:text-start md:text-4xl md:w-full lg:w-[80%]" : "mx-auto md:text-5xl lg:w-[65%]"}`}
            >
              {header}
              {subHeader && <span className="text-social">{subHeader}</span>}
            </h1>
          )}
          {description && (
            <p
              className={`leading-[24px] w-[95%] text-black-200 font-[400] text-base text-center ${exception ? "text-center md:text-start md:w-full md:text-base lg:text-md lg:w-[80%]" : "mx-auto md:w-[75%] md:text-md lg:w-[60%]"}`}
            >
              {description}
            </p>
          )}
        </div>

        {children}
      </div>
      {exception && (
        <div className="mt-10">
          <div className="hidden md:flex flex-col justify-center gap-3 items-center">
            <Services />
          </div>
          <div className="flex md:hidden flex-col justify-center gap-3 items-center">
            <ServicesMobileMode />
          </div>
        </div>
      )}
    </div>
  );
}
