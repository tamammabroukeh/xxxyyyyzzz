"use client";
import { Button } from "@nextui-org/button";

import { FacebookIcon } from "./AuthIcons";
export default function FacebookSignInButton() {
  return (
    <Button
      className="text-black-300 text-wrap md:text-nowrap border-1 text-sm border-white-450 py-7 px-2 md:p-6 lg:p-7 rounded-xl bg-white"
      startContent={
        <FacebookIcon className="h-7 w-7 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      }
      // onClick={() => signIn("facebook")}
    >
      Sign in with Facebook
    </Button>
  );
}
