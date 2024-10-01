'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'home', path: '/' },
  { name: 'Trabajos', path: '/work' },
  { name: 'Experiencia', path: '/resume' },
  { name: 'contacto', path: '/contact' },
]
const Nav = () => {
  const pathName = usePathname()
  return (
    <nav className="flex gap-16">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${pathName === link.path && 'text-accent border-b-2 border-accent'}
            capitalize font-medium hover:text-accent transition-all
            `}
          >
            <span className='text-sm text-accent'>{`0.${index + 1}`}</span> {`${link.name}`}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
