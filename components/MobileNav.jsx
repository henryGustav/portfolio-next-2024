import { usePathname } from 'next/navigation'
import React from 'react'

const MobileNav = () => {
    const pathName= usePathname()
  return (
    <nav>MobileNav</nav>
  )
}

export default MobileNav