import { IconChevronRight } from "@tabler/icons-react";

const TabWithIcon = ({ title }: { title: string }) => {
  return (
    <>
      <div className="flex items-center space-x-0 md:space-x-3 lg:space-x-5">
        <span>{title}</span>
        <IconChevronRight className="text-black-200 w-5 h-5" />
      </div>
    </>
  );
};

export default TabWithIcon;