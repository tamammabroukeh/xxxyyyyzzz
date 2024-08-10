import { AuthButtons, AuthPageLayout, Heading } from "..";

import SignUpForm from "./SignUpForm";

import { SignUpBackground } from "@/public";

export default function SignUp() {
  return (
    <AuthPageLayout alt="Background SignIn Page" img={SignUpBackground}>
      <Heading title="Sign Up" />
      <AuthButtons />
      <SignUpForm />
    </AuthPageLayout>
  );
}
