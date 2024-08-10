import { SectionLayout, SubSectionLayout } from "..";

import Packages from "./Packages";

export default function PricingSection() {
  return (
    <SectionLayout id="pricing">
      <SubSectionLayout
        description="Choose the perfect plan for your needs with Ocean Script AI’s flexible and transparent pricing"
        header="Flexible and Transparent Pricing."
        title="Pricing"
      >
        <Packages />
      </SubSectionLayout>
    </SectionLayout>
  );
}
