'use client'
//import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from "next-auth/react"

export default function LogoutButton() {
  return (
    <button
      className="border p-2 px-4"
      onClick={() => signOut()}
    >
      <span>Logout</span>
      {/* <FontAwesomeIcon icon={faRightFromBracket} /> */}
    </button>
  )
}