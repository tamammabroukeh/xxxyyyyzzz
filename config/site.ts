export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Scripts Ocean",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
      isSection: false,
    },
    {
      label: "Theme",
      href: "themes",
      isSection: true,
    },
    {
      label: "Plugins",
      href: "/plugins",
      isSection: false,
    },
    {
      label: "Customer Services",
      href: "services",
      isSection: true,
    },
    {
      label: "Pricing",
      href: "pricing",
      isSection: true,
    },
    {
      label: "FAQ",
      href: "FAQ",
      isSection: true,
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
      isSection: false,
    },
    {
      label: "Theme",
      href: "theme",
      isSection: true,
    },
    {
      label: "Plugins",
      href: "/plugins",
      isSection: false,
    },
    {
      label: "Customer Services",
      href: "services",
      isSection: true,
    },
    {
      label: "Pricing",
      href: "pricing",
      isSection: true,
    },
    {
      label: "FAQ",
      href: "FAQ",
      isSection: true,
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
