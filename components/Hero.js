import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='hero py-16 px-8 md:py-32 md:px-16 md:grid md:grid-cols-3 md:gap-6'>
      <div className='md:mt-0 py-4 md:mt-0 md:col-span-2'>
        <h1 className='text-login text-xl capitalize  mb-2'>
          Welcome to Bakify
        </h1>
        <p className='mb-2 text-sm  md:w-2/4'>
          Here you can purchase freshly baked pastries directly to your location
        </p>
        <Link href='/'>
          <a className='inline-flex justify-center py-2 px-4 text-xs items-center rounded-sm text-white bg-login hover:bg-about focus:outline-none md:flex  mt-4 md:w-1/4'>
            Order Now
          </a>
        </Link>
      </div>
      <div className='md:col-span-1 py-4' />
    </section>
  )
}

export default Hero
