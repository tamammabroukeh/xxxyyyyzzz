import clsx from "clsx";
export default function Heading({
  title,
  classes,
}: {
  title: string;
  classes?: string;
}) {
  return (
    <h1
      className={clsx(
        "text-center text-black-200 text-3xl font-[500] leading-[2.55rem]",
        classes,
      )}
    >
      {title}
    </h1>
  );
}
