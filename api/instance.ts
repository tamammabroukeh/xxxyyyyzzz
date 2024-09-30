// export const apiFetcher = async <T>(
//   url: string,
//   options?: RequestInit,
// ): Promise<T> => {
//   const { headers, method, ...restOptions } = options || {};

//   // console.log(headers);
//   // console.log(restOptions);
//   // console.log(method);
//   const response = await fetch(`${process.env.END_POINT}${url}`, {
//     method: "GET" || method,
//     headers: {
//       // Authorization: `Bearer `,
//       ...(headers || {}),
//     },
//     ...restOptions,
//   });
//   // console.log(response)

//   if (!response.ok) {
//     const error = new Error("An error occurred while fetching the data.");

//     // @ts-ignore
//     error.info = await response.json();
//     // @ts-ignore
//     error.status = response.status;
//     throw error;
//   }
//   // console.log(response.json())

//   return response.json();
// };
import { ERRORS } from "@/utils/errors";
const apiFetcher = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  console.log(options)
  const { headers, method, ...restOptions } = options || {};
  const init = {
    method: method ?? "GET",
    headers: {
      ...(headers || {}),
    },
    ...restOptions,
  };
  console.log(`${process.env.END_POINT}${url}`)
  try {
    const response = await fetch(`${process.env.END_POINT}${url}`, init);
    console.log(response)
    if (!response.ok) {
      const error = new Error("error while fetching data");
      console.log("error",response)
      // @ts-ignore
      error.info = response.json();
      // @ts-ignore
      error.status = response.status;
      switch (response.status) {
        case 400:
          error.message = ERRORS[400];
          break;
        case 401:
          error.message = ERRORS[401];
          break;
        case 403:
          error.message = ERRORS[403];
          break;
        case 404:
          error.message = ERRORS[404];
          break;
        case 500:
          error.message = ERRORS[500];
          break;
        case 503:
          error.message = ERRORS[503];
          break;
        default:
          // @ts-ignore
          error.message = `Unhandled status code: ${error.status}`;
          break;
      }
      throw error;
    }

    return response.json();
  } catch (error) {
    console.log("Fetch error:", error);
    console.error("Fetch error:", error);
    throw error;
  }
};

export default apiFetcher;
// "use server";
// import { RequestInit } from "next/dist/server/web/spec-extension/request";

// import { ERRORS } from "@/utils/errors";
// const baseUrl = process.env.END_POINT;
// const apiFetcher = async <T>(
//   path: string,
//   options?: RequestInit,
// ): Promise<T> => {
//   // const init: RequestInit = {
//   //   method: requestInit?.method ?? "GET",
//   //   headers: [["Content-Type", "application/json"]] as HeadersInit,
//   //   ...requestInit,
//   // };
//   const { headers, method, ...restOptions } = options || {};
//   const init = {
//     method: "GET" || method,
//     headers: {
//       ...(headers || {}),
//     },
//     ...restOptions,
//   };

//   try {
//     const url = `${baseUrl}${path || ""}`;
//     const response = await fetch(url, init);

//     console.log(response)
//     if (!response.ok) {
//       const error = new Error("error while fetching data");

//       // @ts-ignore
//       error.info = await response.json();
//       // @ts-ignore
//       error.status = response.status;
//       // @ts-ignore
//       switch (error.status) {
//         case 400:
//           error.message = ERRORS[400];
//           break;
//         case 401:
//           error.message = ERRORS[401];
//           break;
//         case 403:
//           error.message = ERRORS[403];
//           break;
//         case 404:
//           error.message = ERRORS[404];
//           break;
//         case 409:
//           error.message = ERRORS[409];
//           break;
//         case 500:
//           error.message = ERRORS[500];
//           break;
//         case 503:
//           error.message = ERRORS[503];
//           break;
//         default:
//           // @ts-ignore
//           error.message = `Unhandled status code: ${error.status}`;
//           break;
//       }
//       throw error;
//     }
//     console.log(response.json())
//     return response.json();
//   } catch (error) {
//     console.error("Fetch error:", error);
//     throw error;
//   }
// };

// export default apiFetcher;
