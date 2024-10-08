/* eslint-disable prettier/prettier */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@nextui-org/checkbox";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { SubmitHandler } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

import InputWithLabel from "../InputWithLabel";

import { SignInSchema, SignInType } from "@/validations/SignInSchema";
import { SignInAdminAction } from "@/api/services/auth/admin/actions";
import { SignInOwnerAction } from "@/api/services/auth/owner/actions";

export default function SignInForm() {
  const [isSelected, setIsSelected] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignInType>({
    mode: "all",
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const pathname = usePathname();
  const isAdminPath = pathname === "/login" ? true : false  
  const { executeAsync, result, isExecuting } = useAction(isAdminPath ? SignInAdminAction : SignInOwnerAction, {
    onSuccess: ({ data }) => {
      console.log(data);
      toast.success(data?.message);
    },
    onError: ({ error }) => {
      setError(error.serverError);
      // console.log("error",error);
      toast.error(error?.serverError ?? "Invalid credientials");
    },
  });

  const submitHandler: SubmitHandler<SignInType> = async (data) => {
    // const response = await executeAsync(data);

    // console.log("submit",response)
    await signIn("credentials",{
        email:data.email,
        pasword:data.password,
        callbackUrl:"/",
        redirect:true
      })
  };

  return (
    <div>
      <form
        className="flex gap-2 justify-center flex-col"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5">
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
            description="Password should contain 8 letters at least"
            error={formErrors?.password?.message as string}
            fieldTitle="Password"
            nameInSchema="password"
            placeholder="ocean23!"
            register={register}
            serverError={error ?? ""}
          />
        </div>
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
            className={`text-black-200 text-md bg-slate-400 px-24 py-3 rounded-2xl ${formErrors?.password || formErrors?.email ? "cursor-not-allowed" : "cursor-pointer"}`}
            isLoading={isExecuting}
            type="submit"
          >
            Sign in
          </Button>
          <div className="flex gap-1">
            <p className="text-gray-600 text-sm">Don`t have an account?</p>
            <Link
              className="text-base font-[500] text-blue-500 underline"
              href={isAdminPath ? "/sign-up" : "/owner/sign-up"}
            >
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
