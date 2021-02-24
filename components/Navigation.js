import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { IoPerson, IoCart } from 'react-icons/io5'
import {
  FaBirthdayCake,
  FaBreadSlice,
  FaHamburger,
  FaCookieBite,
  FaPhoneAlt,
  FaTimes
} from 'react-icons/fa'
import { GiDonut, GiPieSlice, GiHamburgerMenu } from 'react-icons/gi'
import CartContext from './context/context'

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { cart } = useContext(CartContext)
  return (
    <header className='w-full bg-nav'>
      <nav role='navigation'>
        <div className='px-4 flex flex-wrap items-center md:flex-no-wrap justify-between bg-white py-2'>
          <div className='md:ml-16  ml-2'>
            <Link href='/'>
              <a>
                <svg
                  width='50'
                  height='50'
                  viewBox='0 0 28 33'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  xlink='http://www.w3.org/1999/xlink'
                >
                  <rect width='28' height='33' fill='url(#pattern0)' />
                  <defs>
                    <pattern
                      id='pattern0'
                      patternContentUnits='objectBoundingBox'
                      width='1'
                      height='1'
                    >
                      <use
                        href='#image0'
                        transform='translate(-0.00695903) scale(0.00433298 0.00367647)'
                      />
                    </pattern>
                    <image
                      id='image0'
                      width='234'
                      height='272'
                      href='data:image/png;base64,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'
                    />
                  </defs>
                </svg>
              </a>
            </Link>
          </div>

          <div className='flex  mr-2'>
            <div className='sm:hidden mr-2'>
              <Link href='/cart'>
                <a className='text-2xl relative'>
                  <IoCart />
                  <div className='flex items-center justify-center h-4 absolute w-4 -top-2 left-3 bg-black rounded-full'>
                    <p className='text-tiny text-white '>{cart.length}</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className='md:flex mr-16 hidden'>
              <Link href='/login'>
                <a className='inline-flex justify-center py-2 px-4 text-base items-center text-navIcon hover:bg-about focus:outline-none hidden md:flex  mr-2'>
                  <IoPerson className='mr-2 text-navIcon text-base' /> Login
                </a>
              </Link>
              <Link href='/cart'>
                <a className='inline-flex justify-center py-2 px-4 border border-navigator text-base items-center rounded-sm text-navIcon bg-link hover:bg-about focus:outline-none hidden md:flex  relative'>
                  <IoCart className='mr-2 text-navIcon text-base' /> My Cart
                  <div className='flex items-center justify-center h-4 absolute w-4 -top-0.5 left-24 bg-black rounded-full'>
                    <p className='text-tiny text-black '>0</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className='ml-auto md:hidden'>
              <button
                className='flex items-center h-6 w-6 outline-none focus:outline-none'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaTimes className={navbarOpen ? 'block text-sm' : 'hidden'} />
                <GiHamburgerMenu
                  className={navbarOpen ? 'hidden' : 'block text-sm'}
                />
              </button>
            </div>
          </div>
          <div
            className={
              'w-full md:w-auto md:flex-grow md:items-center md:hidden md:h-full px-4' +
              (navbarOpen ? 'flex' : ' hidden')
            }
          >
            <div className='holder sm:hidden bg-bg'>
              <div className='py-4 flex justify-between  mx-2'>
                {/* do the logic for when the person is logged in */}
                <Link href='/Login'>
                  <a className='inline-flex justify-center py-2 pr-2 border border-login text-xs text-loginText bg-link hover:bg-about focus:outline-none w-1/2 mr-2'>
                    Login
                  </a>
                </Link>
                <Link href='/Signup'>
                  <a className='inline-flex justify-center py-2 px-4 border border-login text-xs text-loginText bg-link hover:bg-about focus:outline-none w-1/2'>
                    Create Account
                  </a>
                </Link>
              </div>
              <div className='border-b-2 border-white my-4' />
              <h1 className='text-login text-base capitalize   ml-2'>
                Categories
              </h1>
              <ul className='flex flex-col md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 justify-between lg:w-2/4 md:w-3/4 w-full h-1/3 md:h-full  ml-2'>
                <li className='mt-4 md:mt-0 mb-3'>
                  <Link href={'/category' + '/cake'}>
                    <a
                      className='text-navigation text-sm  flex items-center'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      <FaBirthdayCake className='mr-2 text-sm' /> Cake
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href={'/category' + '/donut'}>
                    <a
                      className='text-navigation text-sm  flex items-center'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      <GiDonut className='mr-2 text-sm' /> Donuts
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href={'/category' + '/bread'}>
                    <a
                      className='text-navigation text-sm  flex items-center'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      <FaBreadSlice className='mr-2 text-sm' /> Bread
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href={'/category' + '/burger'}>
                    <a
                      className='text-navigation text-sm  flex items-center'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      <FaHamburger className='mr-2 text-sm' /> Burger
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href={'/category' + '/biscuit'}>
                    <a
                      className='text-navigation text-sm  flex items-center'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      <FaCookieBite className='mr-2 text-sm' /> Biscuits
                    </a>
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link href={'/category' + '/pie'}>
                    <a
                      className='text-navigation text-sm  flex items-center'
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      <GiPieSlice className='mr-2 text-sm' /> Pie
                    </a>
                  </Link>
                </li>
              </ul>
              <div className='border-b-2 border-white my-4' />
              <ul className='flex flex-col mt-4 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 justify-between lg:w-2/4 md:w-3/4 w-full h-1/3 md:h-full  ml-2'>
                <li className='mt-2 md:mt-0 mb-3'>
                  <Link href='/contact'>
                    <a className='text-navigation text-sm  flex items-center'>
                      <FaPhoneAlt className='mr-2 text-sm' /> Contact
                    </a>
                  </Link>
                </li>
                {/* do the logic for when the user is logged in */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
