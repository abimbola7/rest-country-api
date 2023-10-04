"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }) => {
  return (
    <ThemeProvider
    enableSystem={true}
    attribute='class'
    >
      <div
      className='dark:bg-veryDarkBlue dark:text-gray-200 text-veryDarkBlue2 transition-colors duration-300 min-h-screen select-none'
      >
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers