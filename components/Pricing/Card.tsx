import { IItemLayout } from "@/interfaces";

export default function Card({ children }: IItemLayout) {
  return (
    <div className="cardgroup relative animate delay-500 ease-in-out duration-700 flex flex-col justify-between items-stretch gap-8 w-full px-7 lg:px-9 py-10 bg-white-100 shadow-black-500 shadow-xl rounded-lg">
      {children}
    </div>
  );
}


