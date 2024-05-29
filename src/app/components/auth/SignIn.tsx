import React from "react";

import { signInAction } from "@/app/lib/actions";

function SignIn() {
  return (
    <form action={signInAction}>
      <button type="submit">Signin XX /auth</button>
    </form>
  );
}

export default SignIn;
