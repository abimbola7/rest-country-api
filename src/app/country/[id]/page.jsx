import Country from '@/components/country';
import React from 'react'

export default async function CountryPage({ params }) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`)
  if (!res.ok) {
    throw new Error("Cannot fetch data")
  }
  const data = await res.json();
  console.log(data)
  return (
    <div
    className='w-full'
    >
      {
        data.map(country=><Country key={country.name.common} country={country}/>)
      }
    </div>
  )
}
