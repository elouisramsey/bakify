import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <section className='bg-navigator py-6'>
      <div className='grid grid-cols-5 px-4 md:py-18 md:px-16 '>
        <Link href='/'>
          <a className='flex'>
            <svg
              width='60'
              height='69'
              viewBox='0 0 60 69'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='60' height='69' fill='url(#pattern0)' />
              <defs>
                <pattern
                  id='pattern0'
                  patternContentUnits='objectBoundingBox'
                  width='1'
                  height='1'
                >
                  <use transform='translate(0 -0.00508788) scale(0.00425532 0.00370028)' />
                </pattern>
                <image
                  id='image0'
                  width='235'
                  height='273'
                  href='data:image/png;base64,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'
                />
              </defs>
            </svg>
          </a>
        </Link>
        <div className='flex px-4 md:py-18 md:px-16 col-span-2'>
          <h1 className='text-white text-base capitalize hidden md:block'>
            Quick Links
          </h1>
          <ul className='flex flex-col md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 justify-between lg:w-2/4 md:w-3/4 w-full h-1/3 md:h-full  ml-2'>
            <li className='md:mt-0 mb-3'>
              <Link href='/'>
                <a className='text-white text-xs font-sansreg flex items-center capitalize'>
                  Home
                </a>
              </Link>
            </li>
            <li className='mb-3'>
              <Link href='/cart'>
                <a className='text-white text-xs font-sansreg flex items-center capitalize'>
                  My cart
                </a>
              </Link>
            </li>
            <li className='mb-3'>
              <Link href='/contact'>
                <a className='text-white text-xs font-sansreg flex items-center capitalize'>
                  contact us
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex py-4 px-4 md:py-18 md:px-16 '>
          <h1 className='text-white text-base capitalize hidden md:block'>
            Categories
          </h1>
          <ul className='flex flex-col md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 justify-between lg:w-2/4 md:w-3/4 w-full h-1/3 md:h-full  ml-2'>
            <li className='mt-4 md:mt-0 mb-3'>
              <Link href='/'>
                <a className='text-white text-xl font-sansreg flex items-center'>
                  Cake
                </a>
              </Link>
            </li>
            <li className='mb-3'>
              <Link href='/donuts'>
                <a className='text-white text-xl font-sansreg flex items-center'>
                  Donuts
                </a>
              </Link>
            </li>
            <li className='mb-3'>
              <Link href='/breads'>
                <a className='text-white text-xl font-sansreg flex items-center'>
                  Bread
                </a>
              </Link>
            </li>
            <li className='mb-3'>
              <Link href='/burger'>
                <a className='text-white text-xl font-sansreg flex items-center'>
                  Burger
                </a>
              </Link>
            </li>
            <li className='mb-3'>
              <Link href='/biscuits'>
                <a className='text-navigation text-xl font-sansreg flex items-center'>
                  Biscuits
                </a>
              </Link>
            </li>
            <li className='mb-3'>
              <Link href='/'>
                <a className='text-white text-xl font-sansreg flex items-center'>
                  Pie
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col col-span-2'>
          <div className=''>
            <h1 className='text-white text-base capitalize hidden md:block'>
              Location
            </h1>
            <div className='flex'>
              <IoLocationOutline className='text-sm text-white mr-1' />
              <h2 className='text-tiny text-white flex items-center'>
                25 Durban street Wuse 2 F.C.T Abuja
              </h2>
            </div>
          </div>
          <div className='flex py-2 px-4 md:py-18 md:px-16 '>
            <h1 className='text-white text-base capitalize hidden md:block'>
              Connect With Us
            </h1>
            <div className='flex flex-row'>
              <div className='h-6 w-6 flex items-center rounded-full justify-center bg-white mr-4'>
                <a href=''>
                  <FaFacebookF className='text-xs text-total' />
                </a>
              </div>
              <div className='h-6 w-6 flex items-center rounded-full justify-center bg-white mr-4'>
                <a href=''>
                  <FaWhatsapp className='text-xs text-total' />
                </a>
              </div>
              <div className='h-6 w-6 flex items-center rounded-full justify-center bg-white mr-4'>
                <a href=''>
                  <FaTwitter className='text-xs text-total' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border w-full border-solid border-white' />
      <div className='flex justify-center mt-4 mb-8'>
        <p className='align-center text-tiny text-center text-white'>
          All Rights Reserved © 2020 bakify. All Rights Reserved
        </p>
      </div>
    </section>
  )
}

export default Footer
