'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { signIn } from 'next-auth/react'

export default function LoginGoogle() {
  return (
    <div>
      <button 
        onClick={() => signIn('google')}
        className="bg-blue shadow-sm text-white rounded-lg text-center w-full py-2 flex gap-2 justify-center items-center">
        <FontAwesomeIcon className="w-6" icon={faGoogle} />
        <span>Registrate con google</span>
      </button>
    </div>
  )
}
