import React, { useContext } from 'react'
import Navigation from '../components/Navigation'
import { IoIosArrowBack, IoIosAdd, IoIosRemove } from 'react-icons/io'
import Link from 'next/link'
import Footer from '../components/Footer'
import CartContext from '../components/context/context'

const Cart = () => {
  const { carttotal, cart, increase, reduction, removeProduct } = useContext(
    CartContext
  )
  return (
    <>
      <Navigation />
      <section className='py-4 px-8 md:py-18 md:px-16'>
        <h1 className='text-sm capitalize  text-black mb-4'>My Cart</h1>
        <div className='py-2 bg-navigator px-2 w-full flex items-center mb-4 justify-between'>
          <h1 className='text-sm text-white capitalize '>
            Sub Total ( {cart.length} )
          </h1>
          <h1 className='text-sm capitalize  text-red-800'>
            {'\u20A6'}
            {carttotal}
          </h1>
        </div>
        <Link href='/'>
          <a className='inline-flex justify-center p-1.5 md:py-2 px-2 border border-login text-xs items-center rounded-sm text-navIcon bg-transparent hover:bg-about focus:outline-none md:flex '>
            <IoIosArrowBack className='mr-2 text-loginText text-xs md:text-base' />
            Continue Shopping
          </a>
        </Link>
        <section className='md:grid'>
          {cart.length === 0 ? (
            <p className=' text-sm text-center my-4'>Nothing in cart</p>
          ) : (
            cart.map((item) => (
              <div className='grid grid-cols-3 my-4' key={item.sys.id}>
                <div className='cart-holder'>
                  <img
                    src={item.fields.images.fields.file.url}
                    alt={item.fields.name}
                    className='object-cover w-full max-h-full'
                  />
                </div>
                <div className='col-span-2 flex justify-between'>
                  <div className='flex px-4 flex-col'>
                    <h1 className=' text-search text- truncate capitalize text-xs font-medium'>
                      {item.fields.name}
                    </h1>
                    <p className='text-price text-xs '>
                      {'\u20A6'}
                      {item.fields.price * item.fields.count}
                    </p>
                    <div className='flex flex-col'>
                      <h1 className='text-navIcon text-xs capitalize  my-1 truncate'>
                        Quantity:
                      </h1>
                      <div className='flex flex-row items-center'>
                        <button
                          className='inline-flex justify-center py-0.5  md:py-2 px-2 border border-navigation text-xs items-center text-navigation bg-transparent focus:outline-none md:flex '
                          onClick={() => reduction(item.sys.id)}
                        >
                          <IoIosRemove className='text-xs text-navigation' />
                        </button>
                        <span className='block-flex justify-center py-0.5 md:py-2 px-2 border border-navigation text-tiny leading-3  items-center text-navigation bg-transparent focus:outline-none md:flex '>
                          {item.fields.count}
                        </span>
                        <button
                          className='inline-flex justify-center py-0.5  md:py-2 px-2 border border-navigation text-xs items-center text-navigation bg-transparent focus:outline-none md:flex '
                          onClick={() => increase(item.sys.id)}
                        >
                          <IoIosAdd className='text-xs text-navigation' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className='flex items-center justify-center h-4 w-4 bg-red-700 rounded-full focus:outline-none'
                    onClick={() => removeProduct(item.sys.id)}
                  >
                    <p className='text-tiny text-white '>x</p>
                  </button>
                </div>
              </div>
            ))
          )}
        </section>

        {cart.length === 0 ? null : (
          <>
            <div className=' border border-total text-xs rounded-sm md:flex  md:w-1/2 my-2 w-full py-2 px-2 flex items-center my-7 justify-between'>
              <h1 className='text-sm text-black capitalize '>Total</h1>
              <h1 className='text-sm capitalize  text-search'>
                {'\u20A6'}
                {carttotal}
              </h1>
            </div>

            <Link href='/delivery'>
              <a className='inline-flex justify-center p-1.5 md:py-2 border border-login text-xs items-center rounded-sm text-white bg-login hover:bg-about focus:outline-none md:flex  md:w-1/2 my-2 w-full'>
                Checkout
              </a>
            </Link>
          </>
        )}
      </section>
      <Footer />
    </>
  )
}

export default Cart
