"use client"
import React from 'react'

export default function Selectbox(props) {
  const selectFilter = (e) => {
    props.onFilter(e.target.value);
  }

  return (
    <div>      
      <select 
      onChange={selectFilter}
      id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-darkBlue dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer focus:outline-none focus:border-none focus:ring-0 focus:ring-transparent outline-none border-none shadow-md mt-10 ">
        <option className='py-3 ' selected>Choose a region</option>
        <option className='py-3' value="Africa">Africa</option>
        <option className='py-3' value="Americas">America</option>
        <option className='py-3' value="Asia">Asia</option>
        <option className='py-3' value="Europe">Europe</option>
        <option className='py-3' value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
