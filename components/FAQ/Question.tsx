import { IconArrowDown } from "@tabler/icons-react";

import { ItemLayout } from "../Animation";

import { IQuestion } from "@/interfaces";

export default function Question({ title }: IQuestion) {
  return (
    <ItemLayout className="rounded-lg border-none bg-white-600 shadow-lg py-7 px-4 flex justify-between items-center gap-6">
      <p className="text-black-200 text-start w-[75%] md:w-[90%] font-[400] text-base md:text-md leading-[1.2rem] md:leading-[1.5rem]">
        {title}
      </p>
      <IconArrowDown className="text-blue-200 w-10 h-10" stroke={1} />
    </ItemLayout>
  );
}
