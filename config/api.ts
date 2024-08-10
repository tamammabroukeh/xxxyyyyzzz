/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
// Define the type for your global config object
type GlobalConfig = {
  baseURL: string;
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
};

// Define the type for the fetch options object
type FetchOptions = {
  method?: string;
  headers?: {
    [key: string]: string;
  };
  body?: string | FormData;
};

// Define the type for the error thrown
type FetchError = {
  message: string;
};

// Initial token value, you might want to store this securely
const token = "";

// Set up your global config
const globalConfig: GlobalConfig = {
  baseURL: process.env.END_POINT as string,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Correctly concatenate the token
  },
};

export async function fetchWithGlobalConfig<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T | FetchError> {
  // Merge global config headers with any custom headers provided in options
  const headers = { ...globalConfig.headers, ...options.headers };

  // Construct the full URL
  const url = `${globalConfig.baseURL}${endpoint}`; // Correctly concatenate the URL

  // Merge global options with custom options
  const fetchOptions: FetchOptions = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, fetchOptions);

    // Handle different status codes
    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error("Bad Request");
        case 401:
          throw new Error("Unauthorized");
        case 403:
          throw new Error("Forbidden");
        case 404:
          throw new Error("Not Found");
        case 500:
          throw new Error("Internal Server Error");
        // Add more cases as needed
        default:
          throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    // Parse and return JSON response if the status code is OK (200-299)
    return await response.json();
  } catch (error: unknown) {
    // Handle the error, providing more information
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);

      return { message: error.message }; // Return an error object
    }
    console.error("Fetch error:", error);

    return { message: "An unknown error occurred." }; // Return a generic error object
  }
}
