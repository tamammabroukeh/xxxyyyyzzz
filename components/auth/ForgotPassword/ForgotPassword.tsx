import { AuthPageLayout, Heading } from "..";

import ForgetPasswordForm from "./ForgetPasswordForm";

import { SignUpBackground } from "@/public";

const ForgotPassword = () => {
  return (
    <AuthPageLayout alt="Background Forgot Password" img={SignUpBackground}>
      <div className="translate-y-20 flex flex-col gap-8 xl:translate-x-10 xl:translate-y-32">
        <Heading
          classes="text-xl text-nowrap md:text-2xl lg:text-3xl"
          title="Forget Your Password?"
        />
        <ForgetPasswordForm />
      </div>
    </AuthPageLayout>
  );
};

export default ForgotPassword;
