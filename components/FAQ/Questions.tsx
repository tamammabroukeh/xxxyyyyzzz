"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { IconArrowDown } from "@tabler/icons-react";

import { FAQData } from "@/data";

export default function Questions() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion
        className="flex md:my-10 lg:my-16 gap-3 md:gap-5 space-y-3 flex-col"
        itemClasses={{
          title: "text-base md:text-md",
        }}
        variant="splitted"
      >
        {FAQData.map((Ques) => (
          <AccordionItem
            key={Ques.id}
            aria-label={Ques.title}
            className="text-start text-black-200 flex-1 shadow-2xl md:py-2 lg:py-3"
            indicator={
              <IconArrowDown
                className="text-blue-200 w-8 h-8 md:w-10 md:h-10"
                stroke={1}
              />
            }
            title={Ques.title}
          >
            {Ques.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
