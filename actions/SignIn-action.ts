"use server";
import { flattenValidationErrors } from "next-safe-action";

import { SignInSchema } from "@/validations/SignInSchema";
import { actionClient } from "@/lib/safe-action";

export const loginAction = actionClient
  .schema(SignInSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { email, password } }) => {
    const res = await fetch(`${process.env.END_POINT}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log(!res.ok);

    return { message: `login successfuly! ` };
  });
