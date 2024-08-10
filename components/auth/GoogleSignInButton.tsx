"use client";
import { Button } from "@nextui-org/button";

import { GoogleIcon } from "./AuthIcons";
export default function GoogleSignInButton() {
  return (
    <Button
      className="border-1 text-black-300 text-wrap md:text-nowrap text-sm border-white-450 py-7 px-2 md:p-6 lg:p-7 rounded-xl bg-white"
      startContent={
        <GoogleIcon className="w-7 h-7 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      }
      // onClick={() => signIn("google")}
    >
      Sign in with Google
    </Button>
  );
}
