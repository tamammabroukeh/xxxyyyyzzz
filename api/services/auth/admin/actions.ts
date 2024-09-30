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

export const SignUpAdminAction = actionClient
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

        // @ts-ignore
        // if (!res.ok) {
        //   // @ts-ignore
        //   if (res?.status === 409) {
        //     return { message: `Duplicate Username` };
        //     // @ts-ignore
        //   } else if (res?.status === 400) {
        //     return { message: `Missing field` };
        //   } else {
        //     throw new Error("Invalid Email Or Password");
        //   }
        // }

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
export const SignInAdminAction = actionClient
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
        const res = await apiFetcher<TAdminSignUpResponse>(LOGIN_ROUTE, {
          method: "POST",
          headers,
          body: JSON.stringify({
            email,
            password,
          }),
        });
        console.log("res", res);

        return { message: "loggedin successfully", res };
      } catch (error: any) {
        console.log("hi", error);
        console.log("error", error);
        // if(error.status === 404){
        throw new Error("Please try again");
        // }
      }
    },
  );