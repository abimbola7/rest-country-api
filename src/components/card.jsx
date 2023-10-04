"use client"

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Card = ({ countries }) => {
  return (
    <div
    className='dark:bg-darkBlue bg-white rounded-b-md shadow-md rounded-md transition-transform duration-300 hover:scale-105'
    >
      <Link
      href={`/country/${countries.name.common}`}
      className=""
      >
      <div
       className="h-36"
      >
        <Image
        src={countries.flags.png}
        alt={countries.flags.alt}
        width={260}
        height={150}
        className="h-full rounded-t-md"
        />
      </div>
      <div
      className='px-3 space-y-3 pt-3 pb-8'
      >
      <h2
      className='font-bold text-sm'
      >
      { countries.name.common }</h2>
      <div
      className='text-sm'
      >
        <p className='font-semibold'>Population: <span className='font-light'>{  countries.population }</span></p>
        <p className='font-semibold'>Region: <span className='font-light'>{  countries.region }</span></p>
        <p className='font-semibold'>Capital: <span className='font-light'>{  countries.capital }</span></p>
        
      </div>
      </div>
      </Link>
    </div>
  )
}

export default Card