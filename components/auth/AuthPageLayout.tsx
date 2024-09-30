import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

import { Logo } from "../icons";
export default function AuthPageLayout({
  img,
  alt,
  children,
}: {
  img: StaticImport;
  children: React.ReactNode;
  alt: string;
}) {
  return (
    <div className="md:flex justify-between">
      <div className="px-5 lg:px-24 mt-3">
        <Link className="" href={"/"}>
          <Logo />
        </Link>
        <div className="flex gap-3 md:gap-5 lg:gap-6 lg:mt-2 flex-col justify-end">
          {children}
        </div>
      </div>
      <div className="hidden md:block basis-1/2">
        <Image
          priority
          alt={alt}
          className="w-full h-full object-cover"
          placeholder="blur"
          src={img}
          unoptimized={true}
        />
      </div>
    </div>
  );
}
