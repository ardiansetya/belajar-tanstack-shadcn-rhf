import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  
  return (
    <nav className="w-full h-16 bg-background flex items-center justify-between px-4 border-b mb-4">
      <div className="text-lg font-bold">Kontol Kuda</div>
      <div className="space-x-8">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
      </div>
      <div>
        <header className="flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        <ModeToggle />
        </header>
      </div>
    </nav>
  );
}

export default Navbar