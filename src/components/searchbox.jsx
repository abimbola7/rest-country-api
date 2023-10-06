"use client"

import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { useRouter } from 'next/navigation'


const Searchbox = (props) => {
  const router = useRouter()
  const [ search, setSearch ] = React.useState("")
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(search)
    router.push(`/search?search=${search}`)
    
  }
  return (
    <form
    onSubmit={searchHandler}
    className="relative mt-10 w-80 rounded-sm shadow-md focus:border-none"
    >
    <AiOutlineSearch
    className='absolute top-4 left-2 text-lg'
     />
    <input 
    onChange={(e)=>setSearch(e.target.value)}
    type="text "
    value={search}
    className='pl-8 py-3 flex-grow w-full dark:bg-darkBlue bg-white focus:outline-none outline-none'
    />
    </form>
  )
}

export default Searchbox