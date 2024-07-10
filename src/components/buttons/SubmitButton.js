import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({ children, className = '' }) {
  const { pending } = useFormStatus()

  return (
    <div>
      <button
        disabled={pending}
        className={"bg-green disabled:bg-blue justify-center block items-center gap-2 w-full text-white py-2 px-4 mx-auto" + className}
        type="submit"
      >
        {pending && (
          <span>guardando...</span>
        )}
        {!pending && children}
      </button>
    </div>
  )
}
