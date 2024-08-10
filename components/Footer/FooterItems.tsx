import { siteConfig } from "@/config/site";

const FooterItems = () => {
  return (
    <>
      {siteConfig.navItems.map((item, idx) => (
        <li
          key={idx}
          className="text-white-250 md:text-white-200 leading-[1.5rem] font-[400] md:text-[15px] lg:text-md cursor-pointer"
        >
          {item.label}
        </li>
      ))}
    </>
  );
};

export default FooterItems;
