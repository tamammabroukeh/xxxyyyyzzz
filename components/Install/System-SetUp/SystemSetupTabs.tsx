"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/modal";
import { useAction } from "next-safe-action/hooks";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCircleCheck } from "@tabler/icons-react";

import styles from "./SystemSetUp.module.css";
import EnviromentTab from "./EnviromentTab";
import DatabaseTab from "./DatabaseTab";

import {
  InstallationSchema,
  InstallationType,
  defaultValues,
} from "@/validations/InstallationSchema";
import { InstallProgramAction } from "@/api/services/install-program/actions";
import Modal from "@/components/ui/Modal";
import { Loader } from "@/components/icons";

const SystemSetupTabs = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeTab, setActiveTab] = useState<string>("enviroment");
  const [error, setError] = useState<Error | string>("");
  const [success, setSuccess] = useState<boolean | undefined>(false);
  const form = useForm<InstallationType>({
    mode: "all",
    resolver: zodResolver(InstallationSchema),
    defaultValues,
  });
  const { executeAsync, result, isExecuting } = useAction(
    InstallProgramAction,
    {
      onSuccess: ({ data }) => {
        setSuccess(data?.message);
      },
      onError: ({ error }) => {
        // console.log(JSON.stringify(error));
        if (error.validationErrors) {
          Object.entries(error.validationErrors).forEach(([key, value]) => {
            // @ts-ignore
            form.setError(key, value);
          });
        } else {
          toast.error(error.serverError ?? error?.fetchError);
          setError((error.serverError ?? error.fetchError) as string);
        }
      },
    },
  );
  const onSubmit: SubmitHandler<InstallationType> = async (data) => {
    // console.log(data);
    await executeAsync(data);
    // console.log(form.formState);
    // console.log(result);
    // router.push("/");
    form.reset(form.getValues());
    // console.log(form.formState);
  };
  // console.log(status);
  const classNames = { base: "bg-white-100" };
  const backdrop = "blur";
  const classes =
    "flex text-black-200 justify-center items-center p-5 md:p-10 max-w-md md:max-w-xl lg:max-w-2xl";
  const errors: boolean = Object.keys(form.formState.errors).length > 0;

  return (
    <>
      {!errors && !!!error && (
        <Modal
          placement="center"
          {...{ onOpenChange, isOpen, onOpen, classNames, backdrop, classes }}
        >
          {isExecuting && <Loader className="animate-spin delay-1000" />}
          {success && <IconCircleCheck className="w-32 h-32" stroke={1} />}
          <div className="flex items-center flex-col gap-5">
            <h3 className="font-[500] text-nowrap text-xl md:text-3xl">
              {isExecuting && "Installing your script"}
              {success && "Your Script is installed"}
            </h3>
            <p className="text-base md:text-md text-center">
              {isExecuting &&
                "This may take a second, please wait until the script is fully downloaded."}
            </p>
          </div>
        </Modal>
      )}
      <FormProvider {...form}>
        <form className="text-center" onSubmit={form.handleSubmit(onSubmit)}>
          <Tabs
            classNames={{
              tabList: styles.tabList,
              tab: `${styles.tabItem} mx-16`,
              cursor: styles.tabItemSelected,
              tabContent:
                "group-data-[selected=true]:text-gray-700 font-[500] text-sm md:text-base  px-3 lg:text-lg",
            }}
            radius="lg"
            selectedKey={activeTab}
            onSelectionChange={(key: React.Key) => setActiveTab(key as string)}
          >
            <Tab
              key={"enviroment"}
              className="py-6"
              title="Enviroment"
              value={"enviroment"}
            >
              <EnviromentTab
                error={error as Error}
                setSelectedKey={setActiveTab}
              />
            </Tab>
            <Tab
              key={"database"}
              className="py-6"
              title="Database"
              value={"database"}
            >
              <DatabaseTab error={error as Error} onOpen={onOpen} />
            </Tab>
          </Tabs>
        </form>
      </FormProvider>
    </>
  );
};

export default SystemSetupTabs;
