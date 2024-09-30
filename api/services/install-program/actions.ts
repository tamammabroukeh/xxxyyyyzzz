"use server";
import { flattenValidationErrors } from "next-safe-action";

import { InstallationSchema } from "@/validations/InstallationSchema";
import { actionClient } from "@/lib/safe-action";
import apiFetcher from "@/api/instance";
import { headers } from "@/api/constants";

export const InstallProgramAction = actionClient
  .schema(InstallationSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput }) => {
    try {
      const res = await apiFetcher(`install/environment/saveWizard`, {
        method: "POST",
        headers,
        body: JSON.stringify(parsedInput),
      });
      // console.log(!res.ok);
      console.log("response",res)
      return { message: true }

    } catch (error: any) {
      console.log("hi", error);
      console.log("error", error);
      // if(error.status === 404){
        throw new Error("Please try again")
      // }
    }
});
