import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import LogoutButton from './buttons/LogoutButton'

export default async function Header() {

  const session = await getServerSession(authOptions)

  return (
    <div>
      <header className="bg-white p-4">
        <div className='max-w-4xl flex justify-between mx-auto'>
          <div className="flex items-center gap-4">
            <Link className='font-bold' href={'/'}>StreamLink</Link>
            <nav className="flex gap-4 items-center text-blue text-sm">
              <Link href={'/about'}>Acerca</Link>
              <Link href={'/contact'}>Contacto</Link>
            </nav>
          </div>
          <div>
            <nav className="flex items-center gap-4 text-sm text-green">
              {session && (
                <>
                  <Link href="/account">
                    Hola, {session?.user?.name}
                  </Link>
                  <LogoutButton />
                </>
              )}

              {!session && (
                <>
                  <Link href={'/login'}>Login</Link>
                  <Link href={'/register'}>Crear cuenta</Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
