import { SectionLayout, SubSectionLayout } from "..";

import { SocialMediaIntegration, SocialMediaScheduling } from ".";

export default function SocialMediaSection() {
  return (
    <SectionLayout>
      <SubSectionLayout
        description="We give you everything you need to build a dedicated fanbase, nurture your audience, create leads, and grow your business."
        header="One-stop platform - everything you need to "
        subHeader="grow on social"
        title="Social Media"
      >
        <SocialMediaScheduling />
        <SocialMediaIntegration />
      </SubSectionLayout>
    </SectionLayout>
  );
}
