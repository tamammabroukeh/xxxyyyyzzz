import { AuthButtons, AuthPageLayout, Heading } from "..";

import SignInForm from "./SignInForm";

import { SignInBackground } from "@/public";

export default function SignIn() {
  return (
    <AuthPageLayout alt="Background SignIn Page" img={SignInBackground}>
      <Heading title="Sign in" />
      <AuthButtons />
      <SignInForm />
    </AuthPageLayout>
  );
}
