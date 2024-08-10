import { AuthPageLayout, Heading } from "..";

import TwoFactorAuthForm from "./TwoFactorAuthForm";

import { SignUpBackground } from "@/public";

const TwoFactorAuth = () => {
  return (
    <AuthPageLayout alt="Background SignIn Page" img={SignUpBackground}>
      <div className="translate-y-20 flex flex-col justify-center gap-5 xl:translate-x-10 xl:translate-y-32">
        <Heading
          classes="text-xl text-nowrap md:text-2xl lg:text-3xl"
          title="Two-Factor Authentication"
        />
        <p className="text-sm font-[400] text-gray-150 mx-auto text-center w-[70%]">
          A confirmation code has been sent to your Google Authenticator app.
        </p>
        <TwoFactorAuthForm />
      </div>
    </AuthPageLayout>
  );
};

export default TwoFactorAuth;
