import { Button } from "@nextui-org/button";
import { IconChevronsRight } from "@tabler/icons-react";
import clsx from "clsx";
import React from "react";

import { IButton } from "@/interfaces";

const GetStartedButton = ({
  classes,
  IconClasses,
  children,
  ...rest
}: IButton) => {
  return (
    <Button
      className={clsx(
        "bg-transparent text-md text-black-200 getStartedBtn-hover-gradient ",
        classes,
      )}
      {...rest}
      endContent={<IconChevronsRight className={IconClasses} />}
    >
      {children}
    </Button>
  );
};

export default GetStartedButton;
