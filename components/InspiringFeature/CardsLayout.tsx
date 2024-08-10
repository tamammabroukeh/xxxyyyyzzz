/* eslint-disable prettier/prettier */
import clsx from "clsx";
interface ICardsLayout extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
export default function CardsLayout({ children, className }: ICardsLayout) {
  return (
    <section className={clsx("flex flex-col gap-5", className)}>
      {children}
    </section>
  );
}
