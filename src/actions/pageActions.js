'use server'

import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Page } from '@/models/Page'

export async function savePageSettings(formData) {
  mongoose.connect(process.env.MONGODB_URI)
  const session = await getServerSession(authOptions)

  if (session) {
    const displayName = formData.get('displayName')
    const location = formData.get('location')
    const bio = formData.get('bio')
    
    const result = await Page.updateOne(
      { owner:session?.user?.email }, 
      { displayName, location, bio }
    )
    return result
  } 
}
