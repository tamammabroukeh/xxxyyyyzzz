"use server";
/* eslint-disable prettier/prettier */
import { flattenValidationErrors } from "next-safe-action";

import { LOGIN_ROUTE, REGISTER_ROUTE } from "./constants";

import { SignUpSchema } from "@/validations/SignUpSchema";
import { actionClient } from "@/lib/safe-action";
import apiFetcher from "@/api/instance";
import { headers } from "@/api/constants";
import { TAdminSignUpResponse } from "@/api/types/auth/admin/types";
import { SignInSchema } from "@/validations/SignInSchema";
import { TOwnerResponse } from "@/api/types/auth/owner/types";
import { setCookie } from "@/api/cookie";

export const SignUpOwnerAction = actionClient
  .schema(SignUpSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(
    async ({
      parsedInput
    }) => {
      const { name, email, password,confirmpassword:
        password_confirmation } = parsedInput

      try {
        const res = await apiFetcher<TAdminSignUpResponse>(REGISTER_ROUTE, {
          method: "POST",
          headers,
          body: JSON.stringify({
            name,
            email,
            password,
            password_confirmation,
          }),
        });

        console.log("res", res);

        return { message: "Your account created successfully", res };
      } catch (error: any) {
        console.log("hi", error);
        console.log("error", error);
        // if(error.status === 404){
        throw new Error("Please try again");
        // }
      }
    },
  );
export const SignInOwnerAction = actionClient
  .schema(SignInSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(
    async ({
      parsedInput
    }) => {
      const { email, password } = parsedInput

      try {
        const res = await apiFetcher<TOwnerResponse>(LOGIN_ROUTE, {
          method: "POST",
          headers,
          body: JSON.stringify({
            email,
            password,
          }),
        });
        // await setCookie("data", JSON.stringify(res))

        console.log("res", res);

        return { message: "loggedin successfully", res };
      } catch (error: any) {
        console.log("hi", error);
        console.log("error", error);
        console.log(error?.status)
        console.log(error?.message)
        console.log(error?.info?.message)
        if(error.status === 401 && error.message === "Unauthorized"){
          throw new Error(error?.info?.message);
        }
      }
    },
  );