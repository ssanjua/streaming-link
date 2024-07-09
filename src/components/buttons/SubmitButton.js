import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({ children }) {
  const {pending} = useFormStatus()

  return (
    <div>
      <button
            disabled={pending}
            className="bg-red flex disabled:bg-blue justify-center items-center gap-2 w-full text-white py-2 px-4 mx-auto"
            type="submit"
          >
            {children} 
          </button>
    </div>
  )
}
