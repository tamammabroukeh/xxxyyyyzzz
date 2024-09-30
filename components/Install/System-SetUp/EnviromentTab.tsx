"use client";
import { useFormContext } from "react-hook-form";
import { IconAlertCircleFilled, IconArrowRight } from "@tabler/icons-react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Select, SelectItem } from "@nextui-org/select";
import { RadioGroup, Radio } from "@nextui-org/radio";
import React from "react";

import { InputWithLabel } from "@/components/auth";
import { MyButton } from "@/components/ui";

const EnviromentTab = ({
  error,
  setSelectedKey,
}: {
  error: Error;
  setSelectedKey: (value: string) => void;
}) => {
  const form = useFormContext();
  const itemClasses = {
    base: "py-0 w-full flex flex-col",
    title: "text-base mx-auto mr-2 md:mr-0",
    trigger: "py-0 rounded-lg h-full",
    indicator: "text-md mx-auto mr-20 md:mr-32 lg:mr-36",
  };
  const lineClass =
    "absolute w-[25%] md:w-[30%] h-0 md:h-[1.5px] bg-black-200 opacity-[61%] top-2.5";

  return (
    <div className="w-full md:w-[70%] mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex text-start flex-col gap-6">
          <InputWithLabel
            error={form.formState.errors.app_name?.message as string}
            fieldTitle="App name"
            nameInSchema="app_name"
            register={form.register}
            serverError={error.message ?? ""}
          />
          <InputWithLabel
            error={form.formState.errors.app_url?.message as string}
            fieldTitle="App Url"
            nameInSchema="app_url"
            register={form.register}
            serverError={error.message ?? ""}
          />
        </div>
        <div className="flex items-center border-1 border-blue-600 text-blue-600 px-2 py-1 rounded-lg">
          <div className="flex items-center gap-1 md:gap-2">
            <IconAlertCircleFilled className={`w-7 h-7`} />
            <p className="text-sm md:text-base w-[90%] md:w-[80%]">
              Please do not enter / at the end of the url. For Example;
              https://oceanScripts.com
            </p>
          </div>
          <div>
            <IconArrowRight className="-rotate-45" />
          </div>
        </div>
        <div className="relative flex flex-col gap-3 md:gap-5 justify-center">
          <div className={`${lineClass} left-0`} />
          <div className={`${lineClass} right-0`} />
          <Accordion
            className="flex flex-col justify-center w-full"
            itemClasses={itemClasses}
            variant="light"
          >
            <AccordionItem key="1" className="" title="Advanced Options">
              <div className="flex text-start flex-col gap-3 md:gap-5">
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-black-200 text-sm">App Environment</h3>
                  <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-3 md:mb-0 gap-4">
                    <Select
                      className="max-w-full"
                      defaultSelectedKeys={[form.watch("environment")]}
                      labelPlacement="outside"
                      size="lg"
                      value={form.watch("environment")}
                      variant="bordered"
                      onChange={(e) =>
                        form.setValue("environment", e.target.value)
                      }
                    >
                      <SelectItem key={"production"}>Production</SelectItem>
                      <SelectItem key={"development"}>Development</SelectItem>
                    </Select>
                  </div>
                </div>
                <div>
                  <RadioGroup
                    defaultValue={form.formState.defaultValues?.app_debug.toString()}
                    label="App Debug"
                    orientation="horizontal"
                    value={form.watch("app_debug") ? "true" : "false"}
                    onChange={(val) =>
                      form.setValue("app_debug", val.target.value === "true")
                    }
                  >
                    <Radio value="true">True</Radio>
                    <Radio value="false">False</Radio>
                  </RadioGroup>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-black-200 text-sm">App Log Level</h3>
                  <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-3 md:mb-0 gap-4">
                    <Select
                      className="max-w-full"
                      defaultSelectedKeys={[form.watch("app_log_level")]}
                      labelPlacement="outside"
                      size="lg"
                      value={form.watch("app_log_level")}
                      variant="bordered"
                      onChange={(e) =>
                        form.setValue("app_log_level", e.target.value)
                      }
                    >
                      <SelectItem key={"debug"}>Debug</SelectItem>
                      <SelectItem key={"info"}>Info</SelectItem>
                      <SelectItem key={"notice"}>Notice</SelectItem>
                      <SelectItem key={"warning"}>Warning</SelectItem>
                      <SelectItem key={"error"}>Error</SelectItem>
                    </Select>
                  </div>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
          <div className="mt-2 mx-auto">
            <MyButton
              classes="px-20 md:px-24 text-md py-2 rounded-2xl bg-slate-400"
              type="button"
              onClick={() => setSelectedKey("database")}
            >
              Next
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnviromentTab;
