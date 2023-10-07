"use client"

import React, { useEffect } from 'react'
import { useRouter  } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter()
  useEffect(() => {
    console.log(error)
  }, [error])
  
  return (
    <div
    className="text-center mt-10 flex flex-col items-center"
    >
      <h1 className='text-3xl'>Cannot Fetch Data</h1>
      <div
      className='flex space-x-3 mt-5'
      >
        <button  className="hover:text-yellow-700" onClick={()=>reset()} >Try Again</button>
        <button  className="hover:text-yellow-700" onClick={()=>router.push("/")} >Go Back</button>
      </div>
    </div>
  )
}
