"use server";

import { signIn,signOut } from "@/auth";

export const signInAction = async () => {
  await signIn("discord");
};

export const signOutAction = async () => {
  await signOut();
};