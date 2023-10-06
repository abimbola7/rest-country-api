import Results from '@/components/results';
import Link from 'next/link'
import React from 'react'

export default async function SearchPage({ searchParams }) {
  console.log(searchParams);
  const res = await fetch(`https://restcountries.com/v3.1/name/${searchParams.search}`)
  if (!res.ok) {
    throw new Error("Cannot fetch data")
  }
  const data =  await res.json();
  console.log(data)
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
