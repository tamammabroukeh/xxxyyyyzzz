import "@/styles/globals.css";

export default function ErrorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="mx-auto max-w-full">{children}</main>
    </>
  );
}
