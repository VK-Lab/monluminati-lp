import React from "react";

import { signOutAction } from "@/app/lib/actions";

function SignOut() {
  return (
    <button
      onClick={async () => {
        await signOutAction();
        window.location.href = "/";
      }}
    >
      Sign out
    </button>
  );
}
export default SignOut;
