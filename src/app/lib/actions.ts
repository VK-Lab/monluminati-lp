"use server";

import { signIn } from "@/auth";

export const signInAction = async () => {
  try {
    console.log(">>>>> signInAction CLICK");
    const result = await signIn("discord");
    console.log(`🚀 ~ signInAction ~ result:`, result);
    return result;
  } catch (error: any) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
};
