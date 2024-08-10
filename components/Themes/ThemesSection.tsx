import { SectionLayout, SubSectionLayout } from "..";

import AllThemeCards from "./AllThemeCards";
export default function ThemesSection() {
  return (
    <SectionLayout id="themes">
      <SubSectionLayout
        description="Access a diverse selection of cutting-edge, mobile-first templates
            that ensure flawless performance and appearance across all devices
            and screen sizes."
        header="Highly Responsive Templates"
        title="Themes"
      >
        <AllThemeCards />
      </SubSectionLayout>
    </SectionLayout>
  );
}
