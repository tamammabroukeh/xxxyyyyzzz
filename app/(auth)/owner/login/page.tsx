// import SignIn from "@/components/auth/SignIn/SignIn";
import { redirect } from "next/navigation";

import { AuthButtons, AuthPageLayout, Heading } from "@/components/auth";
import SignInForm from "@/components/auth/SignIn/SignInForm";
import { SignInBackground } from "@/public";
import useAuthAsServer from "@/hooks/useAuthAsServer";
// import { getCookie } from "@/api/cookie";
export default async function OwnerSignInpage() {
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
