/* eslint-disable prettier/prettier */
import clsx from "clsx";
interface ISectionLayout extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?:string;
}
export default function SectionLayout({ children, className, id }: ISectionLayout) {
  return (
    <section className={clsx("my-10 px-1.5 md:px-3 lg:px-0 w-full", className)} id={id}>
      {children}
    </section>
  );
}
