import FacebookSignInButton from "./FacebookSignInButton";
import GoogleSignInButton from "./GoogleSignInButton";

export default function AuthButtons() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center gap-1 md:gap-3 lg:gap-5">
        <FacebookSignInButton />
        <GoogleSignInButton />
      </div>
      <div className="flex justify-center items-center">
        <div className="h-[1px] bg-slate-200 w-full" />
        <div className="mx-5 text-black-200 text-md font-[400] leading-[24px]">
          or
        </div>
        <div className="h-[1px] bg-slate-200 w-full" />
      </div>
    </div>
  );
}
