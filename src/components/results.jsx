"use client"

import React from 'react'
import Card from './card'
import Searchbox from './searchbox'

const Results = ({ results }) => {
  return (
    <div
    className="mx-4 lg:mx-auto max-w-7xl"
    >
      <div className='flex items-center justify-between w-full'>
        <Searchbox />
      </div>
      <div
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-12 mt-20 place-items-center'
      >
        {
          results.map(result => (
            <Card key={result.area} countries={result}/>
          ))
        }
      </div>
    </div>
  )
}

export default Results