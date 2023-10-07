import Country from '@/components/country';
import React from 'react'

export default async function CountryPage({ params, searchParams}) {
  await new Promise(resolve=>setTimeout(resolve, 6000));
  let countryObj;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.id}?fullText=true`)
  if (!res.ok) {
    throw new Error("Cannot fetch data")
  }
  const data = await res.json();
  if ( data.length  === 1 ){
    countryObj = data[0]
  }
  return (
    <div
    className='max-w-[90%] mx-5 md:mx-auto'
    >
      <Country country={countryObj}/>
    </div>
  )
}
