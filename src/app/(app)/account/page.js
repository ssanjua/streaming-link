
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import UserNameForm from '@/components/forms/UserNameForm'
import { Page } from '@/models/Page'
import mongoose from "mongoose"


export default async function Accountpage({ searchParams, ...rest }) {
  const session = await getServerSession(authOptions)
  const desiredUsername = searchParams.desiredUsername

  if (!session) {
    return redirect('/')
  }

  mongoose.connect(process.env.MONGODB_URI)
  const page = await Page.findOne({ owner: session?.user?.email })

  if (page) {
    return (
      <div>your page is: /{page.uri}</div>
    )
  }

  return (
    <div>
      <UserNameForm desiredUsername={desiredUsername} />
    </div>
  )
}
