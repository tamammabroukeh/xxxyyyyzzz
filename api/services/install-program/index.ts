/* eslint-disable prettier/prettier */
import { GET_REQUIRS_ROUTE } from "./constants";
import { headers } from "@/api/constants";
import apiFetcher from "@/api/instance";
import { IGetInstallationRequirements } from "@/api/types/install-program/types";
export const FetchRequirements = async () => {
  try {
    const response = await apiFetcher<IGetInstallationRequirements>(
      GET_REQUIRS_ROUTE,
      {
        headers,
        mode:"cors"
      },
    );
    return response;
  } catch (error: any) {
    // return error
    // console.error("catch",error)
    throw new Error(error.message);
  }
};
