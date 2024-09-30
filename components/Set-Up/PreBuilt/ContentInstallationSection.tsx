"use client";
import React, { FormEvent } from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useSearchParams, useRouter } from "next/navigation";
import { CircularProgress } from "@nextui-org/progress";
import { IconChevronLeft } from "@tabler/icons-react";

import {
  childCheckboxes,
  fatherCheckboxValue,
  singleCheckboxValue,
} from "../data";

import ContentInstallationLayout from "./ContentIntallationLayout";

import { MyButton, MyLink, Message } from "@/components/ui";

const ContentInstallationSection = ({
  setSelectedKey,
}: {
  setSelectedKey: (value: string) => void;
}) => {
  const [checkedItems, setCheckedItems] = React.useState<string[]>(
    localStorage.getItem("content")?.split(",") ?? [
      fatherCheckboxValue,
      ...childCheckboxes,
      singleCheckboxValue,
    ],
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [success, setSuccess] = React.useState<string>("");
  const router = useRouter();
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
  const searchParams = useSearchParams();
  const handleTabChange = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(name, value);
    window.history.pushState(null, "", `?${params.toString()}`);
    localStorage.setItem("content", checkedItems?.toString());
    setSelectedKey("installation");
    success && router.push("https://google.com");
  };

  React.useEffect(() => {
    localStorage.setItem("content", checkedItems?.toString());
  }, [checkedItems]);
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setIsLoading(true);
    // setError("Something went wrong, please try again.");
    setSuccess("Content installed successfully!");
  };
  const themeId = searchParams.get("themeId")?.toString();
  const tab = searchParams.get("tab")?.toString();
  const tabContent = tab === "content";
  const tabInstallation = tab === "installation";
  const buttonContent = tabContent ? "Confirm" : success ? "Open" : "Install";
  const buttonType = tabContent ? "button" : "submit";

  console.log(checkedItems);

  return (
    <>
      {error && (
        <div className="fixed top-4 text-black-200 justify-center items-center right-4 flex gap-0.5 md:gap-1">
          <IconChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          <MyLink
            classes="text-sm md:text-base lg:text-md"
            href="/"
            title="Back To Home"
          >
            Back To Home
          </MyLink>
        </div>
      )}
      {/* {!themeId && (
        <p className="text-center mt-[10%] text-md md:text-lg lg:text-xl text-danger">
          You have to choose a website <br /> please go back to &quot;Select
          Site&quot; tab and choose one.
        </p>
      )} */}
      {themeId && (
        <ContentInstallationLayout>
          <form
            className="flex flex-1 items-center flex-col gap-4"
            onSubmit={submitHandler}
          >
            <Message classes="text-base text-green-500" title={success} />
            <Message
              classes="lg:text-nowrap text-sm lg:text-base text-danger"
              title={error}
            />
            {/* {isLoading && <CircularProgress color="default" />} */}
            {tabInstallation && (
              <Message
                classes="text-nowrap"
                title={"The following Content Will be Install:"}
              />
            )}
            <div className="flex flex-col gap-5 items-start">
              <CheckboxGroup
                color={error ? "danger" : "default"}
                isDisabled={tabInstallation ? true : false}
                isInvalid={!!error ?? false}
                radius="full"
                size="lg"
                value={checkedItems}
                onChange={handleCheckboxGroupChange}
              >
                <Checkbox
                  className="text-black-200 mb-2 flex gap-4 font-[500] text-lg"
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
                color={error ? "danger" : "default"}
                isDisabled={tabInstallation ? true : false}
                isInvalid={!!error ?? false}
                isSelected={checkedItems.includes(singleCheckboxValue)}
                radius="full"
                size="lg"
                value={singleCheckboxValue}
                onChange={(e) => handleSingleCheckboxChange(e.target.checked)}
              >
                Theme Options
              </Checkbox>
            </div>
            <MyButton
              classes={`${isLoading || !!error ? "bg-slate-700 hover:cursor-not-allowed text-slate-400" : "bg-slate-400 text-black-200 hover:bg-inspiring-gradient"} hover:text-white-200 text-base lg:text-md px-12 md:px-16 lg:px-20 animate transition-all duration-150 delay-150 ease-in-out rounded-2xl`}
              disabled={isLoading || !!error ? true : false}
              isLoading={isLoading}
              type={buttonType}
              onClick={() => handleTabChange("tab", "installation")}
            >
              {buttonContent}
            </MyButton>
          </form>
        </ContentInstallationLayout>
      )}
    </>
  );
};

export default ContentInstallationSection;