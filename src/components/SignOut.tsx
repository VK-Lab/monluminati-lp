import React from 'react';

function SignOut({ hideText }: { hideText?: boolean }) {
  return (
    <button
      onClick={async () => {
        await fetch(`${process.env.NEXT_PUBLIC_API_CMS}/api/auth/logout`, { method: 'POST', credentials: 'include' });
        window.location.href = '/';
      }}
    >
      {!hideText && 'Sign out'}
    </button>
  );
}
export default SignOut;
