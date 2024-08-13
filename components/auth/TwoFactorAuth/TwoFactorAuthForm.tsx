"use client";
import { Button } from "@nextui-org/button";
import { redirect } from "next/navigation";
import React from "react";
import { Input } from "@nextui-org/input";
let currentOTPIndex: number = 0;

export default function TwoFactorAuthForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [otp, setOtp] = React.useState<string[]>(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = React.useState<number>(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("This code is not correct , please try again!");
    setIsLoading(false);
    redirect("/login");
  };

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOTP: string[] = [...otp];

    newOTP[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);
    setOtp(newOTP);
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    currentOTPIndex = index;
    if (e.key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const errBorderInput: string = error ? "border-red-500" : "";
  const isError: boolean =
    otp.join("").length !== 6 && otp.join("").length !== 0;

  return (
    <form
      className="flex gap-3 lg:gap-5 justify-center flex-col"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col items-center gap-1">
        <div
          className={"flex justify-center items-center space-x-2 md:space-x-4"}
        >
          {otp.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <Input
                  ref={activeOTPIndex === index ? inputRef : null}
                  className={
                    "w-10 h-10 md:w-12 md:h-12 rounded-lg outline-none font-[500] border-white-200 focus:border-gray-700 text-black-200 transition"
                  }
                  classNames={{
                    input: "text-md text-center",
                    inputWrapper: `h-full rounded-lg border-1 ${errBorderInput}`,
                  }}
                  isInvalid={isError}
                  value={otp[index]}
                  variant="bordered"
                  onChange={handleOnChange}
                  onKeyDown={(e) => handleOnKeyDown(e, index)}
                />
              </React.Fragment>
            );
          })}
        </div>
        {error && <p className="text-sm text-start text-danger">{error}</p>}
      </div>
      <div className="flex flex-col mt-4 gap-4 justify-center items-center">
        <Button
          className={`text-black-200 text-base md:text-md leading-[1.5rem] bg-slate-400 px-16 md:px-24 py-3 rounded-2xl ${isError ? "cursor-not-allowed" : "cursor-pointer"}`}
          disabled={isError}
          isLoading={isLoading}
          type="submit"
        >
          Confirm
        </Button>
        <Button
          className="text-sm leading-[1.25rem] bg-transparent font-[500] text-gray-600"
          type="submit"
        >
          Request a new code
        </Button>
      </div>
    </form>
  );
}
