import { useContext } from 'react'
import Navigation from '../../../components/Navigation'
import Link from 'next/link'
import { IoIosArrowForward, IoIosAdd, IoIosRemove } from 'react-icons/io'
import { IoCart } from 'react-icons/io5'
import CartContext from '../../../components/context/context'
import Footer from '../../../components/Footer'

const client = require('contentful').createClient({
  space: process.env.NEXT_APP_API_SPACE,
  accessToken: process.env.NEXT_APP_ACCESS_TOKEN
})

export async function getStaticPaths() {
  const data = await client.getEntries({
    content_type: 'bakify',
    order: 'sys.createdAt'
  })
  return {
    paths: data.items.map((item) => ({
      params: { type: item.fields.type, slug: item.fields.slug }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const data = await client.getEntries({
    content_type: 'bakify',
    order: 'sys.createdAt',
    'fields.slug': params.slug
  })

  return {
    props: {
      pastry: data.items[0]
    }
  }
}

export default function Pastry({ pastry }) {
  const { addToCart, increase, reduction, cart } = useContext(CartContext)
  return (
    <>
      <Navigation />
      {pastry ? (
        <>
          <div className='py-4 bg-navigator px-2 w-full flex items-center mb-4'>
            <Link href='/'>
              <a className='text-white text-sm'>Home</a>
            </Link>
            <IoIosArrowForward className='text-white text-sm ml-1' />
            <IoIosArrowForward className='text-white text-sm' />
            <Link href={pastry.fields.type}>
              <a className='text-white text-sm capitalize ml-1'>
                {pastry.fields.type}
              </a>
            </Link>
            <IoIosArrowForward className='text-white text-sm' />
            <IoIosArrowForward className='text-white text-sm' />
            <h1 className='text-white text-sm capitalize ml-1'>
              {pastry.fields.name}
            </h1>
          </div>
          <div className='mb-4'>
            <div className='img-holder'>
              <img
                src={pastry.fields.images.fields.file.url}
                alt={pastry.fields.name}
                className='object-cover w-full max-h-full'
              />
            </div>
            <div className='flex justify-between flex-col px-2 pt-2'>
              <div className='flex flex-col'>
                <h1 className='text-navIcon text-lg capitalize font-sansreg truncate'>
                  {pastry.fields.name}
                </h1>
                <p className='text-price text-base font-sansreg'>
                  {'\u20A6'}
                  {pastry.fields.price}
                </p>
              </div>
              <div className='flex items-center'>
                <h1 className='text-navIcon text-base capitalize font-sansreg truncate'>
                  Quantity:
                </h1>
                <div className='flex flex-row items-center ml-2'>
                  <button
                    className='inline-flex justify-center p-1.5 md:py-2 px-2 border border-navigation text-xs items-center text-navigation bg-transparent focus:outline-none md:flex font-sansreg'
                    onClick={() => reduction(pastry.fields.slug)}
                  >
                    <IoIosRemove className='text-xs text-navigation' />
                  </button>
                  <span className='block-flex justify-center px-4 py-1.5 md:py-2 px-2 border border-navigation text-tiny leading-3  items-center text-navigation bg-transparent focus:outline-none md:flex font-sansreg'>
                    {pastry.fields.count}
                  </span>
                  <button
                    className='inline-flex justify-center p-1.5 md:py-2 px-2 border border-navigation text-xs items-center text-navigation bg-transparent focus:outline-none md:flex font-sansreg'
                    onClick={() => increase(pastry.fields.slug)}
                  >
                    <IoIosAdd className='text-xs text-navigation' />
                  </button>
                </div>
              </div>
              <h1 className='text-sm text-price font-sansreg capitalize'>
                Description
              </h1>
              <p className='text-xs font-sansreg text-desc'>
                {pastry.fields.description}
              </p>
            </div>
            <button
              className='inline-flex justify-center p-1.5 md:py-2 px-2 border border-login text-xs items-center rounded-sm text-white bg-login hover:bg-about focus:outline-none md:flex font-sansreg w-1/2 m-2'
              onClick={() => {
                addToCart(
                  pastry.fields.slug,
                  pastry.fields.name,
                  pastry.fields.price,
                  pastry.fields.images.fields.file.url,
                  pastry.fields.count
                )
              }}
            >
              <IoCart className='mr-2 text-white text-xs md:text-base' />
              Add to Cart
            </button>
          </div>
        </>
      ) : (
        <p className='text-base font-sansreg capitalize'>loading</p>
      )}
      <Footer />
    </>
  )
}
