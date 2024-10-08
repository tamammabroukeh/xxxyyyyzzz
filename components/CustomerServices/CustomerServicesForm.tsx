"use client";
import { Textarea } from "@nextui-org/input";
import { IconChevronsRight } from "@tabler/icons-react";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { toast } from "react-toastify";

import { DisplayServerActionResponse } from "../auth/DisplayServerActionResponse";

import { ServiceSchema, ServiceType } from "@/validations/Services";
// import { sendServiceAction } from "@/actions/service-action";
export default function CustomerServicesForm() {
  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ServiceType>({
    mode: "all",
    resolver: zodResolver(ServiceSchema),
    defaultValues: {
      text: "",
    },
  });
  // const { executeAsync, isExecuting } = useAction(sendServiceAction, {
  //   onSuccess: ({ data }) => {
  //     toast.success(data?.message);
  //   },
  //   onError: ({ error }) => {
  //     toast.error(error.serverError);
  //   },
  // });
  const submitHandler: SubmitHandler<ServiceType> = async (data) => {
    // console.log(data);
    // await executeAsync(getValues());
  };
  
  const error = formErrors.text?.message;
  const errBorderInput = error ? "border-red-500" : "";

  return (
    <div className="md:ml-5 mt-10 md:mt-14 space-y-6">
      <h1 className="text-lg md:text-xl lg:text-3xl">How can we help ?</h1>
      <form
        className="relative max-w-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <Textarea
          {...register("text")}
          className="w-full relative shadow-md rounded-xl"
          classNames={{
            inputWrapper: `bg-white-100 ${errBorderInput} focus:border-none`,
            input: "placeholder:text-black-100 focus:border-none",
          }}
          isInvalid={!!error}
          minRows={6}
          placeholder="i need a typical type of theme for my website"
          variant="faded"
        />
        <IconChevronsRight
          className={`absolute rotate-[30deg] w-5 h-5 bottom-1 right-1 z-10 ${error ? "text-red-500" : "text-black-100"}`}
        />
        <DisplayServerActionResponse
          classes={`mt-1 absolute`}
          result={formErrors.text!}
        />
        <Button
          className={`absolute rounded-2xl bg-blue-500 text-background mt-6 lg:mt-6 px-14 text-md leading-[24px] ${error && "md:mt-12 cursor-not-allowed"}`}
          disabled={!!error}
          // isLoading={isExecuting}
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
