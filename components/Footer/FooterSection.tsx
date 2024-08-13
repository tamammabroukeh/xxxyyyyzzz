import { Divider } from "@nextui-org/divider";

import { Logo } from "../icons";

import FooterItems from "./FooterItems";
import Icons from "./Icons";

export default function FooterSection() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-blue-500 mt-10 lg:mt-32 pt-5 md:pt-8 lg:pt-14 pb-10 md:pb-5 lg:pb-6 w-full flex flex-col items-center">
        <div className="w-[90%] flex flex-col items-center gap-8 lg:gap-10">
          <div className="flex w-[90%] flex-col gap-3 md:gap-5">
            <div className="flex justify-center items-end gap-2">
              <Logo />
              <h2 className="text-white-250 md:text-white-200 font-[500] -mb-1 leading-[2.55rem] text-lg md:text-2xl lg:text-3xl">
                ScriptsOcean
              </h2>
            </div>
            <Divider className="bg-white-700" />
          </div>
          <div className="flex flex-col gap-7 md:gap-5 lg:gap-7 items-center">
            <ul className="flex flex-wrap w-[80%] md:w-full justify-center gap-4">
              <FooterItems />
            </ul>
            <ul className="flex gap-7">
              <Icons />
            </ul>
          </div>
          <div>
            <p className="text-white-250 md:text-white-200 textbase leading-[1.2rem] font-[400]">
              &copy; 2024 ScriptsOcean
            </p>
          </div>
        </div>
      </div>
      {/* <div className="md:hidden bg-white-50 my-5">
        <Divider className="w-[30%] rounded-[10px] bg-[#17191C] h-[5px] mx-auto" />
      </div> */}
    </div>
  );
}
