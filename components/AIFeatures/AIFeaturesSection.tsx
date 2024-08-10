/* eslint-disable prettier/prettier */
import React from "react";

import { SectionLayout, SubSectionLayout } from "..";

import AITabs from "./AITabs";
import AIGeneratorContent from "./AIGeneratorContent";

import { IAITab } from "@/interfaces";

export default function AIFeaturesSection() {
  return (
    <SectionLayout>
      <SubSectionLayout
        description="Elevate your website’s functionality with Ocean Script AI’s extensive suite of plugins and tools."
        header={`Cutting-Edge AI Features`}
        title="AI Features"
      >
        <AITabs tabs={tabs!}/>
      </SubSectionLayout>
    </SectionLayout>
  );
}

  const tabs: IAITab[] = [
    {
      id: crypto.randomUUID(),
      label: "AI Text Generator",
      content: (
        <AIGeneratorContent
          description="Generate high-quality content with the AI Text Generator, creating
            engaging and relevant text for your pages."
          title="Text"
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      label: "AI Image Generator",
      content: (
        <AIGeneratorContent
          description="Generate high-quality content with the AI Image Generator, creating
            engaging and relevant image for your pages."
          title="Image"
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      label: "AI Chatbot",
      content: (
        <AIGeneratorContent
          description="Generate high-quality content with the AI Chatbot Generator, creating
            engaging and relevant Chatbot for your pages."
          title="Chatbot"
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      label: "AI Speech To text",
      content: (
        <AIGeneratorContent
          description="Generate high-quality content with the AI Speech To Generator, creating
            engaging and relevant speech for your pages."
          title="Speech"
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      label: "AI Code Generator",
      content: (
        <AIGeneratorContent
          description="Generate high-quality content with the AI Code Generator, creating
            engaging and relevant code for your pages."
          title="Code"
        />
      ),
    },
  ];