import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { FooterSection, Navbar } from "@/components";
import Sidebar from "@/components/ui/SideBar";
import useAuthAsServer from "@/hooks/useAuthAsServer";
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

export default async function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await useAuthAsServer();

  return (
    <>
      <Navbar />
      <main className="mx-auto relative max-w-full">
        {children}
        {session && <Sidebar />}
      </main>
      <FooterSection />
    </>
  );
}
