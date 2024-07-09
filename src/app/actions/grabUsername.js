'use server'
import mongoose from "mongoose"
import { Page } from "@/models/Page"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function grabUsername(formData) { 
  const username = formData.get('username')
  console.log("Connecting to MongoDB...");

  mongoose.connect(process.env.MONGODB_URI)

  console.log("Connected to MongoDB, finding document...");

  const existingPageDoc = await Page.findOne({ 
    uri: username })
  
  if (existingPageDoc) {
    console.log("Document found, returning false...");
    return false
  } else {
    // @ts-ignore
    const session = await getServerSession(authOptions)
    const newPage = await Page.create({ 
      uri: username, 
      owner: session?.user?.email 
    })
    console.log("Document created, returning newPage...");
    return { exists: false, data: { uri: newPage.uri, owner: newPage.owner } }
  }
}