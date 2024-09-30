/* eslint-disable prettier/prettier */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@nextui-org/checkbox";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { SubmitHandler } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import InputWithLabel from "../InputWithLabel";

import { SignUpSchema, SignUpType } from "@/validations/SignUpSchema";
import { SignUpAdminAction } from "@/api/services/auth/admin/actions";
export default function SignUpForm() {
  const [isSelected, setIsSelected] = React.useState<boolean | undefined>(
    false,
  );
  const [error, setError] = React.useState<string | undefined>("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors: formErrors, defaultValues },
  } = useForm<SignUpType>({
    mode: "all",
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  const { executeAsync, result, isExecuting } = useAction(SignUpAdminAction, {
    onSuccess: ({ data }) => {
      console.log(data);
      toast.success(data?.message);
    },
    onError: ({ error }) => {
      setError(error.serverError);
      console.log(error);
      toast.error(error.serverError);
    },
  });

  console.log(result);

  const submitHandler: SubmitHandler<SignUpType> = async (data) => {
    console.log(data);

    const response = await executeAsync(data);
    console.log(response)
    //router.push("/login");
    // reset(defaultValues);
    // setIsLoading(true);
    // startTransistion(() => {
    //   SignUpAction(data).then((res) => {
    //     setError(res?.toString());
    //     // setSuccess(data.success);
    //   });
    // });
  };

  return (
    <div>
      <form
        className="flex gap-2 justify-center flex-col"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5">
          <InputWithLabel
            description="Enter your name"
            error={formErrors.name?.message as string}
            fieldTitle="Name"
            nameInSchema="name"
            placeholder="Tammam"
            register={register}
            // disabled={isPending}
            serverError={error ?? ""}
          />
          <InputWithLabel
            description="Enter your email address like email@gmail.com"
            error={formErrors.email?.message as string}
            fieldTitle="Email Address"
            nameInSchema="email"
            placeholder="email@gmail.com"
            register={register}
            serverError={error ?? ""}
          />
          <InputWithLabel
            description="Password should contain 8 characters at least"
            error={formErrors?.password?.message as string}
            fieldTitle="Password"
            nameInSchema="password"
            placeholder="ocean23!"
            register={register}
            serverError={error ?? ""}
          />
          <InputWithLabel
            description="Confirm Password should match the password"
            error={formErrors?.confirmpassword?.message as string}
            fieldTitle="Confirm Password"
            nameInSchema="confirmpassword"
            placeholder="ocean23!"
            register={register}
            serverError={error ?? ""}
          />
        </div>
        {error && <p className="text-sm text-danger">{error}</p>}
        <div className="flex text-xs justify-between items-center">
          <Checkbox
            className="text-gray-600"
            color="default"
            isSelected={isSelected}
            size="sm"
            onValueChange={setIsSelected}
          >
            Remember me
          </Checkbox>
          <Link className="text-blue-500" href={"/forgot-password"}>
            Forgot Password?
          </Link>
        </div>
        <div className="flex flex-col mt-4 gap-2 justify-center items-center">
          <Button
            className={`text-black-200 text-md bg-slate-400 px-24 py-3 rounded-2xl `}
            isLoading={isExecuting}
            type="submit"
          >
            Sign Up
          </Button>
          <div className="flex gap-1">
            <p className="text-gray-600 text-sm">Already have an account?</p>
            <Link
              className="text-base font-[500] text-blue-500 underline"
              href={"/login"}
            >
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
