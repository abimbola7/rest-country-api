import Results from '@/components/results';
import Link from 'next/link'
import React from 'react'

export default async function SearchPage({ searchParams }) {
  await new Promise(resolve=>setTimeout(resolve, 6000));
  const res = await fetch(`https://restcountries.com/v3.1/name/${searchParams.search}`)
  if (!res.ok) {
    throw new Error("Cannot fetch data")
  }
  const data =  await res.json();
  return (
    <>
      {
      data && (
        <Results results={data}/>
      )
      }
    </>
  )
}
