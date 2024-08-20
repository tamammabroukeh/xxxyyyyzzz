"use client";
import React, { useRef, useState } from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Image } from "@nextui-org/image";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import {
  childCheckboxes,
  fatherCheckboxValue,
  singleCheckboxValue,
} from "../data";

import { colors } from "@/components/ui/SpanCircle";
const ContentSection = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([
    fatherCheckboxValue,
    ...childCheckboxes,
    singleCheckboxValue,
  ]);
  const handleFatherCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // If father checkbox is checked, check all child checkboxes
      setCheckedItems([
        fatherCheckboxValue,
        ...childCheckboxes,
        ...(checkedItems.includes(singleCheckboxValue)
          ? [singleCheckboxValue]
          : []),
      ]);
    } else {
      // If father checkbox is unchecked, uncheck all checkboxes except the single checkbox
      setCheckedItems(
        checkedItems.filter((item) => item === singleCheckboxValue),
      );
    }
  };
  const handleCheckboxGroupChange = (selected: string[]) => {
    // Handle child checkboxes and father checkbox state
    if (!childCheckboxes.every((child) => selected.includes(child))) {
      selected = selected.filter((item) => item !== fatherCheckboxValue);
    } else if (childCheckboxes.every((child) => selected.includes(child))) {
      selected = [
        fatherCheckboxValue,
        ...childCheckboxes,
        ...(selected.includes(singleCheckboxValue)
          ? [singleCheckboxValue]
          : []),
      ];
    }
    setCheckedItems(selected);
  };
  const handleSingleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, singleCheckboxValue]);
    } else {
      setCheckedItems(
        checkedItems.filter((item) => item !== singleCheckboxValue),
      );
    }
  };
  const imageRef = useRef<HTMLImageElement | null>(null);
  const scrollToTop = () => {
    if (imageRef.current)
      imageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToBottom = () => {
    if (imageRef.current)
      imageRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  console.log(checkedItems);

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-5 md:gap-12 lg:gap-20">
      <div className="flex w-full h-auto md:w-auto flex-col">
        <div className="flex bg-white-100">
          <div className="flex gap-1">{colors}</div>
          <span className="text-center flex-1 text-blue-500 text-base font-[400]">
            Website Preview
          </span>
        </div>
        <div className="relative flex overflow-x-hidden">
          <ScrollShadow
            hideScrollBar
            className="w-full md:w-[400px] lg:w-[550px] xl:w-[634px] h-[300px] md:h-[400px]"
            size={10}
          >
            <Image
              ref={imageRef}
              // alt={title}
              className={`w-full h-auto rounded-2xl object-cover`}
              radius="none"
              shadow="sm"
              src={"https://nextui-docs-v2.vercel.app/images/album-cover.png"}
              width="100%"
            />
          </ScrollShadow>
          <div className="absolute z-10 flex flex-col h-full justify-between py-5 right-5">
            <button
              className="p-2 md:p-3 rounded-full bg-white-100"
              type="button"
              onClick={scrollToTop}
            >
              <IconChevronUp className="text-blue-200  w-7 h-7" />
            </button>
            <button
              className="p-2 md:p-3 rounded-full bg-white-100"
              type="button"
              onClick={scrollToBottom}
            >
              <IconChevronDown className="text-blue-200 w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center flex-col gap-5">
        <div className="flex flex-col gap-5 items-start">
          <CheckboxGroup
            color="secondary"
            size="lg"
            value={checkedItems}
            onChange={handleCheckboxGroupChange}
          >
            <Checkbox
              className="text-black-200 mb-2 flex gap-4  font-[500] text-lg"
              isSelected={checkedItems.includes(fatherCheckboxValue)}
              value={fatherCheckboxValue}
              onChange={(e) => handleFatherCheckboxChange(e.target.checked)}
            >
              All Content
            </Checkbox>
            <div className="flex flex-col gap-5 ml-10 justify-end">
              {childCheckboxes.map((child) => (
                <Checkbox
                  key={child}
                  className="flex gap-4 text-md text-black-200"
                  value={child}
                >
                  {child}
                </Checkbox>
              ))}
            </div>
          </CheckboxGroup>
          <Checkbox
            className="text-black-200 flex gap-4 font-[500] text-lg"
            color="secondary"
            isSelected={checkedItems.includes(singleCheckboxValue)}
            size="lg"
            value={singleCheckboxValue}
            onChange={(e) => handleSingleCheckboxChange(e.target.checked)}
          >
            Theme Options
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
