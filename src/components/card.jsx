"use client"

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Card = ({ countries }) => {
  return (
    <div
    className='transition-transform duration-300 bg-white rounded-md shadow-md dark:bg-darkBlue rounded-b-md hover:scale-105'
    >
      <Link
      href={`/country/${(countries.cioc || countries.cca2 || countries.cca3).toLowerCase()}`}
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
        placeholder='blur'
        blurDataURL='/spinner.svg'
        />
      </div>
      <div
      className='px-3 pt-3 pb-8 space-y-3'
      >
      <h2
      className='text-sm font-bold'
      >
      { countries.name.common }</h2>
      <div
      className='text-sm'
      >
        <p className='font-semibold'>Population: <span className='font-light'>{  countries.population.toLocaleString() }</span></p>
        <p className='font-semibold'>Region: <span className='font-light'>{  countries.region }</span></p>
        <p className='font-semibold'>Capital: {  countries.capital ? <span className='font-light'>{countries.capital.join(', ')}</span>: <span>Nil</span> }</p>
        
      </div>
      </div>
      </Link>
    </div>
  )
}

export default Card