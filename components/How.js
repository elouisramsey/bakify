import React from 'react'

const How = () => {
  return (
    <div className='text-center py-12 px-8'>
      <h1 className='text-login text-base capitalize  mb-4'>
        How does Bakify Works
      </h1>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='flex items-center justify-center w-full mb-2 flex-col md:w-1/3'>
          <h1 className='text-login text-base md:text-4xl capitalize  mb-3'>
            1.
          </h1>
          <p className='text-search text-sm md:text-xl capitalize  mb-2 md:w-2/3'>
            Search from our collections of freshly baked pastries
          </p>
        </div>
        <div className='flex items-center justify-center w-full mb-2 flex-col md:w-1/3'>
          <h1 className='text-login text-base md:text-4xl capitalize  mb-3'>
            2.
          </h1>
          <p className='text-search text-sm md:text-xl capitalize  mb-2  md:w-2/3'>
            Choose the pastry you want to buy
          </p>
        </div>
        <div className='flex items-center justify-center w-full mb-2 flex-col md:w-1/3'>
          <h1 className='text-login text-base md:text-4xl capitalize  mb-3'>
            3.
          </h1>
          <p className='text-search text-sm md:text-xl capitalize  mb-2 md:w-2/3'>
            Pay and the pastries will be delivered to you
          </p>
        </div>
      </div>
    </div>
  )
}

export default How
