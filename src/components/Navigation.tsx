'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface IProps {
  navLinks : {
    href: string;
    name: string;
  }[]
}

export function Navigation({ navLinks } : IProps) {
  const pathname = usePathname()

  return (
    <div className={"navbar"}>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)

        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}