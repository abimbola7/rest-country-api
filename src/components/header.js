import Link from 'next/link'
import React from 'react'
import { DarkModeSwitch } from './darkmodeswitch'

export default function Header() {
  return (
    <header
    className="bg-white dark:bg-darkBlue shadow-md sticky -top-0 z-50"
    >
      <div
      className='flex mx-4 lg:max-w-6xl lg:mx-auto items-center justify-between py-5'
      >
        <Link
        href="/"
         className="">
          <h2
          className='font-bold'
          >Where in the world?</h2>
        </Link>
        <div className="">
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  )
}
