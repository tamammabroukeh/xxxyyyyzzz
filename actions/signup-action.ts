"use server";

import { flattenValidationErrors } from "next-safe-action";

import { SignUpSchema } from "@/validations/SignUpSchema";
import { actionClient } from "@/lib/safe-action";

export const SignUpAction = actionClient
  .schema(SignUpSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { name, email, password } }) => {
    try {
      const response = await fetch(`${process.env.END_POINT}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        if (response?.status === 409) {
          return { message: `Duplicate Username` };
        } else if (response?.status === 400) {
          return { message: `Missing field` };
        } else {
          throw new Error("Invalid Email Or Password");
        }
      }
      const data = await response.json();

      return data;
    } catch (err) {
      if (err instanceof Error) return err.message;
    }

    return { message: `Your Account created🎉` };
  });

// "use server";

// import { SignUpSchema, SignUpType } from "@/validations/SignUpSchema";
// import { actionClient } from "@/lib/safe-action";

// export const SignUpAction = async (values: SignUpType) => {

//   const { email, password, name } = values;

//   const response = await fetch(`${process.env.END_POINT}/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ password, name, email }),
//   });
//   const data = await response.json()

//   if(!response.ok){
//     throw new Error("Invalid Email Or Password")
//   }

//   return { success: "Confirmation email sent!", data };
// };
