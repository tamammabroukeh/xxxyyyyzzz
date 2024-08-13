import { NavigationLink } from "../Hero";

import { siteConfig } from "@/config/site";

const FooterItems = () => {
  return (
    <>
      {siteConfig.navItems.map((item, idx) => (
        // <li
        //   key={idx}
        //   className="text-white-250 md:text-white-200 leading-[1.5rem] font-[400] md:text-[15px] lg:text-md cursor-pointer"
        // >
        //   {item.label}
        // </li>
        <NavigationLink
          key={idx}
          classes="text-white-250 md:text-white-200 leading-[1.5rem] font-[400] md:text-[15px] lg:text-md cursor-pointer"
          href={item.href}
          isSection={item.isSection}
        >
          {item.label}
        </NavigationLink>
      ))}
    </>
  );
};

export default FooterItems;
