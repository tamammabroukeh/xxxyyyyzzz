import { IParagraph } from "@/interfaces";

const Message = ({ title, classes, ...rest }: IParagraph) => {
  return (
    <>
      {title && (
        <p className={classes} {...rest}>
          {title}
        </p>
      )}
    </>
  );
};

export default Message;
