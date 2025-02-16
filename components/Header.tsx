'use client'

import { SignedIn, SignInButton, UserButton } from "@clerk/clerk-react";
import { SignedOut, useUser } from "@clerk/nextjs"

function Header() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1 className="text-2xl font-bold">
          {user?.firstName}
          {`'s`} Workspace
        </h1>
      )}

      
      <div >
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}
export default Header