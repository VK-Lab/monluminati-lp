"use server";

import { signIn } from "@/auth";

export const signInAction = async () => {
  const result = await signIn("discord");
  console.log(`🚀 ~ signInAction ~ result:`, result)
};
