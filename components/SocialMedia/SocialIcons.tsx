/* eslint-disable prettier/prettier */
import { MotionSocial } from "../Animation";

import { SocialIconsArray, SocialMediaIcons } from "./icons";

export default function SocialIcons() {
  return <>
    {SocialIconsArray.map((Icon) => (
        <div
          key={Icon.id}
          className={`flex justify-center gap-4 md:gap-2 lg:gap-3 items-center`}
        >
          <div
            className="p-2.5 md:p-2 lg:p-4 rounded-lg"
            style={{ backgroundColor: Icon.bgColor }}
          >
            <Icon.Icon
              className="w-10 h-10 md:w-4 md:h-4 lg:w-7 lg:h-7"
              color="white"
              stroke={"1.5"}
            />
          </div>
          <span className="md:text-xs lg:text-md font-[400] text-black-200">
            {Icon.alt}
          </span>
        </div>
      )
    )};
  </>
}
export const SocialIntegrationIcons = () => {
  return <>
    {SocialMediaIcons.map((Icon) => (
      <MotionSocial key={Icon.id} className="
      shadow-lg py-1.5 px-4 md:py-2 md:px-3 lg:py-4 lg:px-6  rounded-3xl
      bg-white-500 hover:shadow-slate-300">
        <Icon.Icon className="w-44 lg:w-full"/>
      </MotionSocial>
    ))};
  </>
};
