"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@nextui-org/checkbox";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { SubmitHandler } from "react-hook-form";

import InputWithLabel from "../InputWithLabel";

import {
  NewPasswordSchema,
  NewPasswordType,
} from "@/validations/NewPasswordSchema";
export default function NewPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<NewPasswordType>({
    mode: "all",
    resolver: zodResolver(NewPasswordSchema),
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);
  const [error, setError] = React.useState("");
  const submitHandler: SubmitHandler<NewPasswordType> = async (data) => {
    setIsLoading(true);

    setError("Invalid Email Or password");
  };

  console.log(error);

  return (
    <div>
      <form
        className="flex gap-2 justify-center flex-col"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5">
          <InputWithLabel
            description="Password should contain 8 characters at least"
            error={formErrors?.password?.message as string}
            fieldTitle="Password"
            nameInSchema="password"
            placeholder="ocean23!"
            register={register}
            serverError={error}
          />
          <InputWithLabel
            description="Confirm Password should match the password"
            error={formErrors?.confirmpassword?.message as string}
            fieldTitle="Confirm Password"
            nameInSchema="confirmpassword"
            placeholder="ocean23!"
            register={register}
            serverError={error}
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
        <div className="flex flex-col mt-4 gap-4 justify-center items-center">
          <Button
            className={`text-black-200 text-base md:text-md bg-slate-400 px-20 md:px-24 py-3 rounded-2xl ${formErrors?.password || formErrors?.confirmpassword ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={!!formErrors?.password || !!formErrors?.confirmpassword}
            isLoading={isLoading}
            type="submit"
          >
            Confirm
          </Button>
          <div className="flex gap-1">
            <Link
              className="text-sm font-[500] bg-transparent text-gray-600"
              href={"/login"}
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
