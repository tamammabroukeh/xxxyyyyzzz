import "@/styles/globals.css";
import { Metadata } from "next";

export default function SetUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="mx-auto max-w-full bg-white-100 my-10">{children}</main>
    </>
  );
}
