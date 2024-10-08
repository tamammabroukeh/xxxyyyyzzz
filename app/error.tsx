"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NotFound from "./not-found";

import { ERRORS } from "@/utils/errors";
import { ErrorPageLogo } from "@/components/icons";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log("error", error.message);
  const pathname = usePathname();

  switch (error.message) {
    case ERRORS[400]:
      return NotFound();
    case ERRORS[404]:
      return NotFound();
    default:
      return (
        <div className="fixed inset-0 flex items-center justify-center p-5 w-full">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-red-100 p-4">
              <div className="rounded-full stroke-red-600 bg-red-200 p-4">
                <ul>
                  <li>
                    <ErrorPageLogo />
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="mt-5 text-4xl font-bold lg:text-[50px]">
              500 - Server Error
            </h2>
            <div className="mt-5 lg:text-lg">
              Oops something went wrong. Try to refresh this page or <br /> feel
              free to contact us if the problem presists.
            </div>
            <div className="flex items-center justify-center space-x-4 my-10">
              <Link
                className="inline-block bg-cyan-500 p-2 text-white rounded-md"
                href={"/"}
                // onClick={() => router.refresh()}
              >
                Home
              </Link>
              <Link
                className="inline-block bg-cyan-500 p-2 text-white rounded-md"
                href={pathname}
                // onClick={() => router.refresh()}
                onClick={() => reset()}
              >
                Refresh
              </Link>
            </div>
          </div>
        </div>
      );
  }
}
