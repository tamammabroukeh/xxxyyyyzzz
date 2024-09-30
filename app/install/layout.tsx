import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="mx-auto my-10 max-w-full">{children}</main>
    </>
  );
}
