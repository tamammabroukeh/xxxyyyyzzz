import { redirect } from "next/navigation";

import { AuthButtons, AuthPageLayout, Heading } from "..";

import SignUpForm from "./SignUpForm";

import useAuthAsServer from "@/hooks/useAuthAsServer";
import { SignUpBackground } from "@/public";

export default async function SignUp() {
  const session = await useAuthAsServer();

  if (session) redirect("/");

  return (
    <AuthPageLayout alt="Background SignIn Page" img={SignUpBackground}>
      <Heading title="Sign Up" />
      <AuthButtons />
      <SignUpForm />
    </AuthPageLayout>
  );
}
