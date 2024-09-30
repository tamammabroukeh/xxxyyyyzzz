"use client";
import React, { ComponentProps } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = ComponentProps<typeof Link> & {
  href?: string;
  children: React.ReactNode;
  classes?: string;
};
const ActiveStep = ({
  children,
  href,
  classes,
  ...rest
}: Props): React.JSX.Element => {
  const router = usePathname();
  const isActive = router === href;
  const color = isActive ? "text-gradient-inspiring" : "text-black-200";

  return (
    <Link
      className={clsx("hover:text-black-300", color, classes)}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ActiveStep;
