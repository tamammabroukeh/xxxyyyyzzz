import { AuthPageLayout, Heading } from "..";

import NewPasswordForm from "./NewPasswordForm";

import { SignUpBackground } from "@/public";

export default function NewPassword() {
  return (
    <AuthPageLayout alt="Background New Password" img={SignUpBackground}>
      <div className="flex flex-col gap-6 w-full my-20 md:px-5 md:my-16 lg:my-12 lg:px-0 xl:mx-8 xl:my-20">
        <Heading
          classes="text-wrap md:text-nowrap"
          title="Set Your New Password"
        />
        <NewPasswordForm />
      </div>
    </AuthPageLayout>
  );
}
