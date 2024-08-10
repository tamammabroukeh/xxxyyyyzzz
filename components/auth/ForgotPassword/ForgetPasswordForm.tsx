"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { SubmitHandler } from "react-hook-form";
import { redirect } from "next/navigation";

import InputWithLabel from "../InputWithLabel";

import {
  ForgetPasswordSchema,
  ForgetPasswordType,
} from "@/validations/ForgetPasswordSchema";
export default function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ForgetPasswordType>({
    mode: "all",
    resolver: zodResolver(ForgetPasswordSchema),
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const submitHandler: SubmitHandler<ForgetPasswordType> = async (data) => {
    setIsLoading(true);
    
    // setError("Invalid Email Or password");
    setIsLoading(false);

    redirect("/login");
  };

  console.log(error);

  return (
    <div>
      <form
        className="flex gap-5 justify-center flex-col"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5">
          <InputWithLabel
            description="Enter your email address like admin@admin.com"
            error={formErrors.email?.message as string}
            fieldTitle="Email Address"
            nameInSchema="email"
            placeholder="email@gmail.com"
            register={register}
            serverError={error}
          />
        </div>
        {error && <p className="text-sm text-danger">{error}</p>}
        <div className="flex flex-col mt-4 gap-4 justify-center items-center">
          <Button
            className={`text-black-200 text-md leading-[1.5rem] bg-slate-400 px-20 md:px-24 py-3 rounded-2xl ${formErrors?.email ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={!!formErrors?.email}
            isLoading={isLoading}
            type="submit"
          >
            Next
          </Button>
          <Link
            className="text-sm leading-[1.25rem] bg-transparent font-[500] text-gray-600"
            href={"/login"}
          >
            Cancel Request
          </Link>
        </div>
      </form>
    </div>
  );
}
