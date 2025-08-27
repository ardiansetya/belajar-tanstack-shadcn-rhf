import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  return (
    <nav className='w-full h-16 bg-background flex items-center justify-between px-4 border-b mb-4'>
        <div className='text-lg font-bold'>MyApp</div>
        <div className='space-x-8'>
            <Link href="/" className='hover:underline'>Home</Link>
            <Link href="/products" className='hover:underline'>Products</Link>
            <Link href="/register" className='hover:underline'>Register</Link>
        </div>
        <div>
            <ModeToggle/>
        </div>
    </nav>
  )
}

export default Navbar