"use client"

import React from 'react'
import Card from './card'
import { Pagination } from './pagination'
import Searchbox from './searchbox'
import Selectbox from './selectbox'

const Results = ({ results }) => {
  const [ filteredValue, setFilteredValue ] = React.useState();
  const [ currentPage, setCurrentPage ] = React.useState(1)
  const [ postPerPage, setPostPerPage ] = React.useState(20)
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost =  filteredValue?.slice(indexOfFirstPost, indexOfLastPost);
  const onPaginate = (value) => {
    setCurrentPage(value);
  };
  const filterHandler = (value) => {
    if (value === "Choose a region") {
      setFilteredValue(results)
    } else{
      const filter = results.filter(result => result.region === value)
      setFilteredValue(filter)
      setCurrentPage(1);
    }
  }

  React.useEffect(() => {
    setFilteredValue(results)
  }, [results])
  return (
    <div
    className="mx-4 lg:mx-auto max-w-7xl"
    >
      <div className='flex flex-col items-start w-full md:items-center md:justify-between md:flex-row'>
        <Searchbox />
        <Selectbox
        onFilter={filterHandler}
         />
      </div>
      <div
      className='grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-12 place-items-center'
      >
        
        {
          currentPost?.map(result => (
            <Card key={result.area} countries={result}/>
          ))
        }
      </div>
      <Pagination postPerpage={postPerPage} totalPost={filteredValue?.length} paginate={onPaginate}/>
    </div>
  )
}

export default Results