import { IIcons } from "@/interfaces";

export default function Service({ Icon, alt }: IIcons) {
  return (
    <div className="mx-auto gap-1.5 w-fit rounded-lg p-2 justify-start items-center my-5 shadow-2xl flex bg-white-100">
      <Icon className="w-7 h-7 lg:w-10 lg:h-10" />
      <p className="text-md text-nowrap text-black-200 font-[400] leading-[24px]">
        {alt}
      </p>
    </div>
  );
}
