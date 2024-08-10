"use server";

import { flattenValidationErrors } from "next-safe-action";

import { ServiceSchema } from "@/validations/Services";
import { actionClient } from "@/lib/safe-action";

export const sendServiceAction = actionClient
  .schema(ServiceSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { id, text } }) => {
    await fetch(`${process.env.END_POINT}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        text,
      }),
    });

    return { message: `Your message was sent! 🎉` };
  });
