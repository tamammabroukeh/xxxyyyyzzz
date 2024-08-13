import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.navItems}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/svgs/Logo.svg",
  },
};

export default function SetUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="mx-auto max-w-full my-10">{children}</main>
    </>
  );
}
