import { AuthPageLayout, Heading } from "..";

import ForgetPasswordForm from "./ForgetPasswordForm";

import { SignUpBackground } from "@/public";

const ForgotPassword = () => {
  return (
    <AuthPageLayout alt="Background Forgot Password" img={SignUpBackground}>
      <div className="flex flex-col gap-8 my-20 lg:my-24 xl:mx-10 xl:my-20">
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
