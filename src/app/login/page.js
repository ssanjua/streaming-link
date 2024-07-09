'use client'
import LoginGoogle from '@/components/buttons/LoginGoogle'

export default function LoginPage() {
  return (
    <div>
      <div className="bg-white p-4 max-w-xs mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          Registro
        </h1>
        <p className='text-center mb-6'>
          Registrate bla bla bla
        </p>
        <LoginGoogle />
      </div>
    </div>
  )
}