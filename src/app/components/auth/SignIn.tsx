import React from "react";

import { signInAction } from "@/app/lib/actions";
import { signIn } from "@/auth";

function SignIn() {
  return (
    <form
      // action={signInAction}
      action={async () => {
        "use server";
        console.log(">>>>> signInAction CLICK");
        const result = await signIn("discord");
      }}
    >
      <button type="submit">Signin XX /auth</button>
    </form>
  );
}

export default SignIn;
