'use client'

import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function AppSidebar() {
  const path = usePathname()

  return (
    <div>
      <nav className="flex flex-col text-center mt-8 gap-8">
              <Link 
                className={'bg-white shadow-custom-dark ' + (path === '/account' ? 'shadow-custom-pink font-bold' : '' )}
                href={'/account'}
                >
                  Configuración
              </Link>
              <Link 
                className={'bg-white shadow-custom-dark ' + (path === '/analytics' ? 'shadow-custom-pink font-bold' : '' )}
                href={'/analytics'}
                >
                  Analítica
              </Link>
              <Link 
                className='bg-light shadow-custom-dark text-black' 
                href={'/'}
                >
                  Inicio
              </Link>
            </nav>
    </div>
  )
}
