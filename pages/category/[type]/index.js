import { useContext } from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { IoCart } from 'react-icons/io5'
import Navigation from '../../../components/Navigation'
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
      params: { type: item.fields.type }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  console.log(params)
  const data = await client.getEntries({
    content_type: 'bakify',
    order: 'sys.createdAt',
    'fields.type': params.type
  })

  return {
    props: {
      pastry: data.items
    }
  }
}

export default function Category({ pastry }) {
  const { addToCart } = useContext(CartContext)
  console.log(pastry.length, pastry[0].fields.type)
  return (
    <>
      <Navigation />
      <div className='py-4 bg-navigator px-2 w-full flex items-center mb-4'>
        <Link href='/'>
          <a className='text-white text-sm'>Home</a>
        </Link>
        <IoIosArrowForward className='text-white text-sm ml-1' />
        <IoIosArrowForward className='text-white text-sm' />
        <p className='text-white text-sm capitalize'>{pastry[0].fields.type}</p>
      </div>
      <div className='mb-4 text-center'>
        <h1 className='text-base w-full text-center text-cate capitalize mb-4 font-medium'></h1>
        <p className='text-sm text-search text-center '>
          We currently have {pastry.length} types of {pastry[0].fields.type}(s)
          available
        </p>
      </div>
      <div className='py-4 px-2  mb-4'>
        {pastry ? (
          pastry.map((paste) => (
            <div className='md:grid grid-cols-3 gap-4' key={paste.fields.slug}>
              <div className='mb-4'>
                <Link href={paste.fields.type + '/' + paste.fields.slug}>
                  <a>
                    <div className='img-holder'>
                      <img
                        src={paste.fields.images.fields.file.url}
                        alt={paste.fields.name}
                        className='object-cover w-full max-h-full'
                      />
                    </div>
                  </a>
                </Link>
                <div className='flex justify-between flex-row items-center py-4'>
                  <div className='flex flex-col'>
                    <h1 className='text-navIcon text-base capitalize font-sansreg mt-2 truncate'>
                      {paste.fields.name}
                    </h1>
                    <p className='text-price text-xs'>
                      {'\u20A6'}
                      {paste.fields.price}
                    </p>
                  </div>
                  <button
                    className='inline-flex justify-center p-1.5 md:py-2 px-2 border border-login text-base items-center rounded-sm text-navIcon bg-link hover:bg-about focus:outline-none md:flex font-sansreg'
                    onClick={() => {
                      addToCart(
                        paste.fields.slug,
                        paste.fields.name,
                        paste.fields.price,
                        paste.fields.images.fields.file.url,
                        paste.fields.count
                      )
                    }}
                  >
                    <IoCart className='mr-2 text-loginText text-sm md:text-base' />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
      <Footer />
    </>
  )
}
