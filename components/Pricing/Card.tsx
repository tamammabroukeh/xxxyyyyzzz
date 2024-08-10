import { IItemLayout } from "@/interfaces";

export default function Card({ children }: IItemLayout) {
  return (
    <div className="flex flex-col justify-between items-stretch gap-8 w-full px-7 lg:px-9 py-10 bg-white-100 shadow-black-500 shadow-2xl rounded-lg">
      {children}
    </div>
  );
}
