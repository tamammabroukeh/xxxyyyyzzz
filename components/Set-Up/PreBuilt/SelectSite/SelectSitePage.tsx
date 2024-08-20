import SearchBarWithCategories from "./SearchBarWithCategories";

import { Themes } from "@/data";
import ThemeCard from "@/components/Themes/ThemeCard";

const SelectSitePage = ({
  setSelectedKey,
}: {
  setSelectedKey: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <SearchBarWithCategories />
      <div className="gap-3 md:gap-3 lg:gap-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {Themes.map((theme) => (
          <ThemeCard
            key={theme?.id}
            setSelectedKey={setSelectedKey}
            themesCard={theme!}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectSitePage;
