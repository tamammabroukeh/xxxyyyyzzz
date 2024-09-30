import { IconChevronRight } from "@tabler/icons-react";

import ActiveStep from "./ActiveStep";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const InstallPagesLayout = ({ children, description, title }: Props) => {
  return (
    <div className="mx-3 md:mx-16 lg:mx-20">
      <div className="flex gap-5 flex-col">
        <div className="md:w-full lg:w-[85%] xl:w-[70%] gap-1 text-black-200 mx-auto text-center flex flex-col">
          {title && <h2 className="font-[500] text-5xl">{title}</h2>}
          {description && (
            <p className="md:text-md lg:text-lg">{description}</p>
          )}
        </div>
        <div className="flex font-[500] text-black-200 text-sm md:text-md items-center gap-2 md:gap-4">
          <ActiveStep href="/install">Server Requirements</ActiveStep>
          <IconChevronRight className="text-black-200 w-5 h-5" />
          <ActiveStep href="/install/system">System Setup</ActiveStep>
          <IconChevronRight className="text-black-200 w-5 h-5" />
          <span>Install</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default InstallPagesLayout;
