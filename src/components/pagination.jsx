import React from 'react'

export const Pagination = ({ postPerpage, totalPost, paginate }) => {
  const pageNumbers = [];
  console
  for(let i = 1; i <= Math.ceil(totalPost / postPerpage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav
    className='py-10'
    >
      <ul className='flex flex-wrap justify-center'>
        {
          pageNumbers.map(number => (
            <li className='dark:bg-darkBlue py-2 px-3 ml-2 mt-2 bg-white shadow-md cursor-pointer' onClick={()=>paginate(number)} key={number}>{number}</li>
          ))
        }
      </ul>
    </nav>
  )
}
