"use client"

import Image from 'next/image'
import Link from "next/Link"
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Country({ country }) {
  const [ nativeName, setNativeName ] = React.useState('')
  const [ currency, setCurrency ] = React.useState('')
  const [ language, setLanguage ] = React.useState([])
  const searchParams = useSearchParams()
  console.log(searchParams.get("country"))
  const handleBorder = (e) => {
    const border = e.target.textContent;
    router.push(`/country/${border.toLowerCase()}`)
  }
  useEffect(() => {
    for (const key in country.name.nativeName) {
      const element = country.name.nativeName[key];
      setNativeName(element.official)
    } 
    for (const key in country.currencies) {
      const element = country.currencies[key];
      setCurrency(element.name)
    }
    
    country.languages && setLanguage(
      Object.values(country.languages).map(lang=>lang)
    )
  }, [country.name.nativeName, country.languages, country.currencies])

  return (
    <div
     className='p-3 flex flex-col md:flex-row md:space-x-16  mx-auto items-center justify-center gap-x-4 space-y-10 md:space-y-0'
    >
      <Image
      src={country.flags.png}
      alt={country.flags.alt}
      width={1000}
      height={500}
      placeholder='blur'
      blurDataURL='/spinner.svg'
      style={
        {
          maxWidth : '100%',
          height : '100%',
        }
      }
       />

       <div
       className="w-full"
       >
       <h1
       className="font-bold text-3xl mb-8"
       >{country.name.common}</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-x-3">
        <div className="py-2 text-sm">
          <span className='font-semibold'>Native name:{' '}</span>
          <span>{ nativeName ? `${nativeName}`: 'Nil' }</span>
        </div>
        <div className="py-2">
          <span  className="font-semibold">Population:{' '}</span> 
          <span>{ country.population.toLocaleString() }</span> 
        </div>
        <div className="py-2">
          <span className='font-semibold'>Region:{' '}</span> 
          <span>{ country.region }</span> 
        </div>
        <div className="py-2">
          <span className='font-semibold'>Sub Region:{' '}</span> 
          <span>{ country.subregion ? `${country.subregion}` : 'Nil' } </span>
        </div>
        <div className="py-2">
          <span className='font-semibold'>Capital:{' '}</span>
          {  country.capital ? `${country.capital.join(', ')}`: <span>Nil</span> }
        </div>  
        <div className="py-2 mt-10 md:mt-0">
          <span className='font-semibold'>Top Level Domain: {' '}</span>
          { country.tld.map(tld=>
          <span key={tld}>{ tld }</span>
          ) }
        </div>
        <div className="py-2">
          <span className='font-semibold'>Currencies: {' '} </span>
          <span>{ country.currencies ? `${currency}` : 'Nil' }</span>
        </div>
        <div className="py-2">
          <span className='font-semibold'>Languages:{' '}</span>
          <span>{!language.length <= 0 ? language.join(", ") : 'Nil'}</span>
        </div>
       </div>
       <div
      className='w-full flex flex-col md:flex-row md:space-x-16 space-y-2 md:space-y-0 mt-5 md:items-center justify-center md:justify-start'
      >
      <h2 className='font-semibold'>Border Countries:</h2>
      <div
      className='flex flex-wrap gap-x-2 gap-y-2'
      >
        {
          country.borders && country.borders.length > 0 ? country.borders.map(border=>(
            <button onClick={handleBorder} 
            key={border} className="py-1 px-3 bg-darkBlue rounded-sm text-sm mt-2 text-white">{border}</button>
          )) : <span>Nil</span> 
        }
      </div>
      </div>
      </div>
    </div>
  )
}
