import { SectionLayout, SubSectionLayout } from "..";

import Questions from "./Questions";

export default function FAQSection() {
  return (
    <SectionLayout id="FAQ">
      <SubSectionLayout
        description="Learn how our AI-driven design customization works to create a unique, personalized website that aligns perfectly with your vision."
        header="Frequently Asked Questions"
        title="FAQ"
      >
        <Questions />
      </SubSectionLayout>
    </SectionLayout>
  );
}
