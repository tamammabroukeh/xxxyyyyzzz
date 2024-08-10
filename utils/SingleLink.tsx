/* eslint-disable prettier/prettier */
import Link from "next/link";

import { ILink } from "@/interfaces";

export default function SingleLink({ children, classes, href }: ILink) {
  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
