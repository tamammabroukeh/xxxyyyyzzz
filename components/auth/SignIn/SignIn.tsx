import { redirect } from "next/navigation";

import { AuthButtons, AuthPageLayout, Heading } from "..";

import SignInForm from "./SignInForm";

import { SignInBackground } from "@/public";
import useAuthAsServer from "@/hooks/useAuthAsServer";
import { getCookie } from "@/api/cookie";

export default async function SignIn() {
  const session = await useAuthAsServer();

  if (session) redirect("/");

  // const data = JSON.parse((await getCookie("data"))!)
  // console.log(data?.token);

  return (
    <AuthPageLayout alt="Background SignIn Page" img={SignInBackground}>
      <Heading title="Sign in" />
      <AuthButtons />
      <SignInForm />
    </AuthPageLayout>
  );
}
