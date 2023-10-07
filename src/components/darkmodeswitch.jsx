"use client"

import { MdLightMode } from "react-icons/md"
import { BsFillMoonFill } from "react-icons/bs"
import { useTheme } from "next-themes"

import React, { useState, useEffect } from 'react'



export const DarkModeSwitch = () => {
  const { systemTheme ,theme , setTheme }  = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])
  

  return (
    <>
      {
        mounted && (
          theme === "light" ? (
            <div
            className="flex space-x-2 cursor-pointer items-center text-sm"
            onClick={()=>setTheme('dark')}
            >
            <BsFillMoonFill/>
            <p>Dark Mode</p>
            </div>
          ) : (
            <div
            className="flex space-x-2 cursor-pointer items-center text-sm"
            onClick={()=>setTheme('light')}
            >
            <MdLightMode/>
            <p>Light Mode</p>
            </div>
          )
        )
      }
    </>
  )
}
