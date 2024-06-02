import Image from 'next/image';
import React from 'react';

import { signInAction } from '@/app/lib/actions';
import iconDiscord from '@/assets/social--discord.svg';

function SignIn() {
  const onSignIn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_CMS}/api/auth/discord`;
  };
  return (
    <form action={onSignIn} className="flex items-center gap-2">
      <Image src={iconDiscord} alt="Discord" className="block w-7 relative" />
      <button type="submit">Sign in with Discord</button>
    </form>
  );
}
export default SignIn;
