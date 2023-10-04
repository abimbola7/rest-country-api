import Image from 'next/image'
import React from 'react'

export default function Country({ country }) {
  return (
    <div
     className='p-4 flex flex-col md:flex-row md:space-x-6 max-w-6xl border mx-auto'
    >
      <Image
      src={country.flags.png}
      alt={country.flags.alt}
      width={500}
      height={300}
       />
    </div>
  )
}
