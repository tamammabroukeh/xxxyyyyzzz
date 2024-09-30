import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
// import { IconBaselineDensityMedium } from "@tabler/icons-react";
import { Divider } from "@nextui-org/divider";

import { LoginButton, NavigationLink, SignUpButton } from ".";

import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const navItems = () => {
    return siteConfig.navItems.map((item) => (
      <NavbarItem key={item.href} className="md:text-[15px] lg:text-[18px]">
        <NavigationLink href={item.href} isSection={item.isSection}>
          {item.label}
        </NavigationLink>
      </NavbarItem>
    ));
  };

  const navMenu = () => {
    return (
      <div className="mx-5 mt-2 font-[400] flex flex-col gap-4">
        {siteConfig.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavigationLink
              className="text-white-200 text-md"
              href={item.href}
              isSection={item.isSection}
            >
              {item.label}
            </NavigationLink>
          </NavbarMenuItem>
        ))}
        <Divider className="bg-white-200" />
        <div className="flex w-[60%] flex-col justify-start gap-5">
          <LoginButton classes="w-[80%]" />
          <SignUpButton />
        </div>
      </div>
    );
  };

  const authLinks = () => {
    return (
      <NavbarItem className="hidden sm:flex justify-end gap-3">
        <SignUpButton />
        <LoginButton />
      </NavbarItem>
    );
  };

  return (
    <NextUINavbar className="mx-auto lg:max-w-[900px] xl:max-w-[1080px] md:rounded-full py-2 bg-tranparent fixed">
      <NavbarContent className="flex lg:-ml-6 gap-10" justify="center">
        <NavbarBrand as="li" className="">
          <NextLink href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex md:gap-4 lg:gap-6 xl:gap-8  justify-start">
          {navItems()}
          {/* <ThemeSwitch /> */}
        </ul>
      </NavbarContent>
      {/* auth buttons */}
      <NavbarContent
        className="hidden lg:-mr-10 sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {authLinks()}
      </NavbarContent>
      {/* switch */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle
        // icon={<IconBaselineDensityMedium />}
        />
      </NavbarContent>
      {/* menu */}
      <NavbarMenu className="bg-sky-600 mt-4 opacity-95 py-12">
        {navMenu()}
      </NavbarMenu>
    </NextUINavbar>
  );
};
