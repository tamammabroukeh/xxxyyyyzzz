/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export default function SignUpButton() {
  return (
    <Button
      as={Link}
      className="border-white-200 md:border-blue-500 text-white-200 md:text-blue-500 border-[2px] lg:px-6 lg:py-0 font-[400] text-md md:text-[15px] lg:text-md bg-transparent rounded-2xl md:px-[14px] md:py-[4px] leading-[24px] transition-all delay-200 ease-in-out duration-1000 hover:text-gradient hover:border-signupText"
      href="/sign-up"
      variant="light"
    >
      Sign Up
    </Button>
  );
}
