import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-primary">
      <div className="container mx-auto flex justify-between items-end">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            HT<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
