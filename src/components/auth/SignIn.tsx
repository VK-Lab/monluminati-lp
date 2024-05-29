import React from "react";

import { signInAction } from "@/app/lib/actions";

function SignIn() {
  return (
    <form action={signInAction}>
      <button type="submit">Signin /auth</button>
    </form>
  );
}

export default SignIn;
