import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Colfax } from "@/config/fonts";
import { FooterSection, Navbar } from "@/components";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/svgs/Logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("bg-background font-colfax", Colfax.className)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {/* <Navbar /> */}
          <main className="mx-auto max-w-full">{children}</main>
          {/* <FooterSection /> */}
        </Providers>
      </body>
    </html>
  );
}
