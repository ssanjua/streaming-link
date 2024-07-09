'use client'
import grabUsername from "@/actions/grabUsername"
import SubmitButton from "@/components/buttons/SubmitButton"
import {redirect} from "next/navigation"
import {useState} from "react"

export default function UsernameForm({desiredUsername}) {
  const [taken,setTaken] = useState(false)
  async function handleSubmit(formData) {
    const result = await grabUsername(formData)

    setTaken(result === false);
    if (result) {
      redirect('/account?created='+formData.get('username'));
    }
  }
  
  return (
    <form action={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2">
        Como quieres que te encuentren?
      </h1>
      <p className="text-center mb-6 text-gray-500">
        Elegi tu usuario
      </p>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          className="block p-2 mx-auto border w-full mb-2 text-center"
          defaultValue={desiredUsername}
          type="text"
          placeholder="username" />
        {taken && (
          <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center">
            Este usuario ya existe
          </div>
        )}
        <SubmitButton>
          <span>Elegir este usuario</span>
        </SubmitButton>
      </div>
    </form>
  )
}