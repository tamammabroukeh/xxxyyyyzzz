import { Button } from "@nextui-org/button";

import { IButton } from "@/interfaces";

const MyButton = ({ classes, children, ...rest }: IButton) => {
  return (
    <Button className={classes} {...rest}>
      {children}
    </Button>
  );
};

export default MyButton;
