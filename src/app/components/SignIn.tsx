import React from "react";

import { signIn } from "@/auth";

function SignIn() {
  return (
    <button
      onClick={() => {
        try {
          console.log(">>>>> CLICK");
          const result = signIn("discord");
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
      }}
    >
      Sign In
    </button>
  );
}

export default SignIn;
