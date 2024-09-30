/* eslint-disable prettier/prettier */
import Link from "next/link";

import { ILink } from "@/interfaces";
const MyLink = ({ href, classes, title, ...rest }: ILink) => {
  return (
    <>
      {title && (
        <Link className={classes} href={href} {...rest}>
          {title}
        </Link>
      )}
    </>
  );
};

export default MyLink;
