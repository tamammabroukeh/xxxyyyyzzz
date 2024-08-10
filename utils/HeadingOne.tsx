import React from "react";

import { IHeading } from "@/interfaces";

export default function HeadingOne({ children, classes }: IHeading) {
  return <h1 className={classes}>{children}</h1>
}
