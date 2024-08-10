"use client";
import NextLink from "next/link";
import React, { ComponentProps, MouseEvent } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
type Props = ComponentProps<typeof Link> & {
  href: string;
  isSection: boolean;
  children: React.ReactNode;
};
export default function NavigationLink({
  children,
  href,
  isSection,
  ...rest
}: Props) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;
  const router = useRouter();
  const handleClick = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    href: string,
    isSection: boolean,
  ) => {
    e.preventDefault();
    if (isSection) {
      const element = document.getElementById(href);

      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  return (
    <NextLink
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "hover:text-sky-500",
        isActive ? "text-sky-500" : "text-navItem",
      )}
      href={href}
      onClick={(e) => handleClick(e, href, isSection)}
      {...rest}
    >
      {children}
    </NextLink>
  );
}
