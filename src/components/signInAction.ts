"use server"

import { signIn } from "@/auth";

export const signInAction = async () => {
  "use server"
  console.log(`🚀 ~ signInAction ~ signIn:`, signIn)
  await signIn("discord")
}

