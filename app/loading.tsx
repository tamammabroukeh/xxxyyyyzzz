"use client";
import Image from "next/image";

import { Loading } from "@/public";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-[10%]">
      <Image priority alt="Loading..." src={Loading} />
    </div>
  );
};

export default LoadingSpinner;
