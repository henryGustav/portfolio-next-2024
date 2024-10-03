'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet'
import Link from 'next/link'
import { Button } from './ui/button'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Trabajos', path: '/work' },
  { name: 'Experiencia', path: '/resume' },
  { name: 'contact', path: '/contact' },
]
const MobileNav = () => {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <SheetClose asChild>
            <Link href={'/'}>
              <h1 className="text-4xl font-semibold">
                HT<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`${link.path === pathName && 'text-accent border-b-2 border-accent'} 
                text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            )
          })}
        </nav>
        {/* <div className="flex items-center gap-8 justify-center mt-4">
          
          <Link href={'/contact'}>
            <Button>Contacto</Button>
          </Link>
        </div> */}
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
