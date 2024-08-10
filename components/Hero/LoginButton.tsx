/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export default function LoginButton({classes}:{classes?:string}) {
  return (
    <Button
      as={Link}
      className={`${classes} bg-blue-500 cursor-pointer md:px-5 md:py-[4px] text-white-300 lg:px-6 text-md md:text-[15px] lg:text-md lg:py-0 rounded-2xl font-[400] leading-[24px] transition-all duration-1000 delay-200 ease-in-out hover:bg-custom-gradient`}
      href="/login"
      variant="light"
    >
      Login
    </Button>
  );
}
