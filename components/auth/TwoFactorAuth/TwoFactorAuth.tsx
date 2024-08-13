import { AuthPageLayout, Heading } from "..";

import TwoFactorAuthForm from "./TwoFactorAuthForm";

import { SignUpBackground } from "@/public";

const TwoFactorAuth = () => {
  return (
    <AuthPageLayout alt="Background SignIn Page" img={SignUpBackground}>
      <div className="my-16 md:mx-3 md:my-14 lg:mx-5 lg:my-20 xl:mx-8 xl:my-28 flex flex-col justify-center gap-4 lg:gap-5">
        <Heading
          classes="text-xl lg:text-nowrap text-wrap md:text-2xl lg:text-3xl"
          title="Two-Factor Authentication"
        />
        <p className="text-sm font-[400] text-gray-150 mx-auto text-center w-[85%] md:w-[70%]">
          A confirmation code has been sent to your Google Authenticator app.
        </p>
        <TwoFactorAuthForm />
      </div>
    </AuthPageLayout>
  );
};

export default TwoFactorAuth;
