import Image from 'next/image'
import React from "react";

import { signInAction } from "@/app/lib/actions";
import iconDiscord from "@/assets/social--discord.svg";

function SignIn() {
  return (
    <form action={signInAction} className="inline-flex items-center">
      <Image
        src={iconDiscord}
        alt="Discord"
        className="block w-[42px] relative top-[5px]"
        height={42}
        width={42}
      />
      <button type="submit">Sign in with Discord</button>
    </form>
  );
}
export default SignIn;
