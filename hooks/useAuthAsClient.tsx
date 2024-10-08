"use client";
import { useSession } from "next-auth/react";

const useAuthAsClient = () => {
  return useSession();
}

export default useAuthAsClient;
