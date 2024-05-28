import React from "react";

import { signInAction } from "./signInAction";

function SignIn() {
  return (
    <form
      action={signInAction}
    >
      <button type="submit">Signin with Discord</button>
    </form>
  )
} 

export default SignIn;
