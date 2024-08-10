import { FooterIcons } from "@/data";

export default function Icons() {
  return (
    <>
      {FooterIcons.map((Item) => (
        <li
          key={Item.id}
          className="text-white-200 leading-[1.5rem] font-[400] md:text-[15px] lg:text-md cursor-pointer"
        >
          <Item.Icon className="w-6 h-6" />
        </li>
      ))}
    </>
  );
}
