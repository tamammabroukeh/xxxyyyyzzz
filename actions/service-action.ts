"use server";

import { flattenValidationErrors } from "next-safe-action";

import { ServiceSchema } from "@/validations/Services";
import { actionClient } from "@/lib/safe-action";

export const sendServiceAction = actionClient
  .schema(ServiceSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { text } }) => {
    await fetch(`${process.env.END_POINT}/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .catch((err) => {
        if (err instanceof Error) return err.message;
      });

    return { message: `Your message was sent! 🎉` };
  });
