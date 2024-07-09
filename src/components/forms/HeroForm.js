'use client'

import { signIn } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


export default function HeroForm({ user }) {
  const router = useRouter()

  useEffect(() => {
    if ('localStorage' in window 
      && window.localStorage.getItem('desiredUsername')
    ) {
      const username = window.localStorage.getItem('desiredUsername')
      window.localStorage.removeItem('desiredUsername')
      redirect("/account?desiredUsername=" + username)
    }
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.querySelector('input')
    const username = input.value
    if (username.length > 0) {
      if (user) {
        router.push("/account?desiredUsername="+username)
      } else {
        window.localStorage.setItem('desiredUsername', username)
        await signIn("google")
      }
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="inline-flex items-center shadow-sm">
        <span className="py-2 bg-white pl-4">streamlink.com/</span>
        <input
          type="text"
          className="py-2 outline-none"
          placeholder="nombredeusuario"
        />
        <button
          className="bg-green text-white py-2 px-6"
          type="submit"
        >
          Unete gratis
        </button>
      </form>
    </div>
  )
}
