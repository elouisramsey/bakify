import Link from 'next/link'
import React, { useContext } from 'react'
import { IoCart } from 'react-icons/io5'
import CartContext from './context/context'

const Bestsellers = ({ bestseller }) => {
  const { addToCart } = useContext(CartContext)
  return (
    <section className='py-4 px-8 md:py-18 md:px-16'>
      <h1 className='text-login text-sm capitalize  mb-4'>our bestsellers</h1>
      <div className='md:grid grid-cols-3 gap-4'>
        {bestseller.map((bestseller) => (
          <div className='mb-4' key={bestseller.fields.slug}>
            <Link
              href={
                '/category/' +
                bestseller.fields.type +
                '/' +
                bestseller.fields.slug
              }
            >
              <a>
                <div className='img-holder'>
                  <img
                    src={bestseller.fields.images.fields.file.url}
                    alt={bestseller.fields.name}
                    className='object-cover w-full max-h-full'
                  />
                </div>
              </a>
            </Link>
            <div className='flex justify-between flex-row items-center py-4'>
              <div className='flex flex-col'>
                <h1 className='text-navIcon text-sm capitalize  mt-2 truncate'>
                  {bestseller.fields.name}
                </h1>
                <p className='text-price text-xs'>
                  {'\u20A6'}
                  {bestseller.fields.price}
                </p>
              </div>
              <button
                className='inline-flex justify-center p-1.5 md:py-2 px-2 border border-login text-xs items-center rounded-sm text-navIcon bg-link hover:bg-about focus:outline-none md:flex '
                onClick={() => {
                  addToCart(bestseller.sys.id)
                }}
              >
                <IoCart className='mr-2 text-loginText text-xs md:text-base' />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bestsellers
