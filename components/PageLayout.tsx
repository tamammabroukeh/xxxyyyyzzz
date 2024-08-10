/* eslint-disable prettier/prettier */
import clsx from "clsx";
import { ReactNode } from "react";
export interface PageLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={clsx("pt-20", className)}>
      {children}
    </div>
  );
}
