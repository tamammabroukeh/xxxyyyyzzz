"use client";
import Image from "next/image";

import { Loading } from "@/public";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image priority alt="Loading..." src={Loading} />
    </div>
  );
};

export default LoadingSpinner;
