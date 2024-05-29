import React from "react";

import { signInAction } from "@/app/lib/actions";
// import { signIn } from "@/auth";

export function SignIn() {
  // return (
  //   <form
  //     action={async () => {
  //       "use server"
  //       console.log(">>>>> CLICK XXX");
  //       // await signInAction()
  //       await signIn("discord")
  //     }}
  //   >
  //     <button type="submit">Sign In XX</button>
  //   </form>
  // )

  return (
    <form action={signInAction}>
      <button type="submit">Sign in with Discord</button>
    </form>
  );
}
export default SignIn;
