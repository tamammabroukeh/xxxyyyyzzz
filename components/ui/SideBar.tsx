import Link from "next/link";
import {
  IconDiamond,
  IconScreenShare,
  IconPalette,
  IconLetterCase,
  IconLanguage,
  IconContrastFilled,
} from "@tabler/icons-react";

import { Logo } from "../icons";
const menuItems = [
  { id: 1, label: "Tools", icon: IconDiamond, link: "/" },
  { id: 2, label: "Preview", icon: IconScreenShare, link: "/" },
  { id: 3, label: "Color", icon: IconPalette, link: "/" },
  { id: 4, label: "Font", icon: IconLetterCase, link: "/" },
  { id: 5, label: "Mode", icon: IconContrastFilled, link: "/" },
  { id: 6, label: "Language", icon: IconLanguage, link: "/" },
];

const Sidebar = () => {
  const wrapperClasses = `flex justify-between flex-col group py-2.5 fixed top-[18%] xl:top-[14%] z-50 border-2 border-[#44464A1F] rounded-r-3xl bg-gray-350 opacity-[80%] duration-300 w-20 md:w-24 hover:w-48 md:hover:w-56 lg:hover:w-64 px-1 md:px-3`;

  return (
    <div className={wrapperClasses}>
      <div className="flex px-3 flex-col gap-4 md:gap-4 xl:gap-6 justify-start items-start">
        <div className={`mt-2`}>
          <Logo />
        </div>
        <div className="flex flex-col gap-4 md:gap-4 xl:gap-6 items-start">
          {menuItems.map(({ icon: Icon, ...menu }) => (
            <div key={menu.id}>
              <Link
                className="flex gap-3 md:gap-5 items-center w-full h-full"
                href={menu.link}
              >
                <div>
                  <Icon
                    className="w-10 h-10 md:w-10 lg:w-11 xl:w-12 xl:h-12"
                    stroke={1}
                  />
                </div>
                <span
                  className={`text-md lg:text-lg font-[500] text-black-200 opacity-0 group-hover:opacity-100 duration-300`}
                >
                  {menu.label}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
