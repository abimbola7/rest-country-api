"use client"

import React from 'react'
import Card from './card'
import Searchbox from './searchbox'
import Selectbox from './selectbox'

const Results = ({ results }) => {
  const [ filteredValue, setFilteredValue ] = React.useState()
  const filterHandler = (value) => {
    console.log(filteredValue ? "works" : "not working")
    const filter = results.filter(result => result.region === value)
    setFilteredValue(filter)
  }
  return (
    <div
    className="mx-4 lg:mx-auto max-w-7xl"
    >
      <div className='flex md:items-center md:justify-between w-full flex-col md:flex-row items-start'>
        <Searchbox />
        <Selectbox
        onFilter={filterHandler}
         />
      </div>
      <div
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-12 mt-20 place-items-center'
      >
        {
          !filteredValue ? results.map(result => (
            <Card key={result.area} countries={result}/>
          )) : filteredValue.map(result => (
            <Card key={result.area} countries={result}/>
          ))
        }
      </div>
    </div>
  )
}

export default Results