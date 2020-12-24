import React, { useContext } from 'react'
import Navigation from '../components/Navigation'
import CartContext from './context'
import { IoIosArrowBack, IoIosAdd, IoIosRemove } from 'react-icons/io'
import Link from 'next/link'
import Footer from '../components/Footer'

const Cart = () => {
  const { carttotal, cart, increase, reduction, removeProduct } = useContext(
    CartContext
  )
  return (
    <>
      <Navigation />
      <section className='py-4 px-4 md:py-18 md:px-16'>
        <h1 className='text-base capitalize font-sansreg text-black'>
          My Cart
        </h1>
        <div className='py-2 bg-navigator px-2 w-full flex items-center mb-4 justify-between'>
          <h1 className='text-sm text-white capitalize font-sansreg'>
            Sub Total ( {cart.length} )
          </h1>
          <h1 className='text-sm capitalize font-sansreg text-red-800'>
            {'\u20A6'}
            {carttotal}
          </h1>
        </div>
        <Link href='/'>
          <a className='inline-flex justify-center p-1.5 md:py-2 px-2 border border-login text-base items-center rounded-sm text-navIcon bg-transparent hover:bg-about focus:outline-none md:flex font-sansreg'>
            <IoIosArrowBack className='mr-2 text-loginText text-sm md:text-base' />
            Continue Shopping
          </a>
        </Link>
        <section className='md:grid'>
          {cart.length === 0 ? (
            <p className='font-sansreg text-base text-center my-4'>
              Nothing in cart
            </p>
          ) : (
            cart.map((item) => (
              <div className='grid grid-cols-3 my-4' key={item.slug}>
                <div className='cart-holder'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='object-cover w-full max-h-full'
                  />
                </div>
                <div className='col-span-2 flex justify-between'>
                  <div className='flex px-4 flex-col'>
                    <h1 className='font-sansreg text-search text- truncate capitalize'>
                      {item.name}
                    </h1>
                    <p className='text-price text-xs font-sansreg'>
                      {'\u20A6'}
                      {(item.price * item.count).toLocaleString()}
                    </p>
                    <div className='flex flex-col'>
                      <h1 className='text-navIcon text-base capitalize font-sansreg my-1 truncate'>
                        Quantity:
                      </h1>
                      <div className='flex flex-row items-center'>
                        <button
                          className='inline-flex justify-center p-1.5 md:py-2 px-2 border border-navigation text-xs items-center text-navigation bg-transparent focus:outline-none md:flex font-sansreg'
                          onClick={() => reduction(item.id)}
                        >
                          <IoIosRemove className='text-xs text-navigation' />
                        </button>
                        <span className='block-flex justify-center px-4 py-1.5 md:py-2 px-2 border border-navigation text-tiny leading-3  items-center text-navigation bg-transparent focus:outline-none md:flex font-sansreg'>
                          {item.count}
                        </span>
                        <button
                          className='inline-flex justify-center p-1.5 md:py-2 px-2 border border-navigation text-xs items-center text-navigation bg-transparent focus:outline-none md:flex font-sansreg'
                          onClick={() => increase(item.id)}
                        >
                          <IoIosAdd className='text-xs text-navigation' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className='flex items-center justify-center h-4 w-4 bg-red-700 rounded-full focus:outline-none'
                    onClick={() => removeProduct(item.id)}
                  >
                    <p className='text-tiny text-white font-sansreg'>x</p>
                  </button>
                </div>
              </div>
            ))
          )}
        </section>

        <div className=' border border-total text-xs rounded-sm md:flex font-sansreg md:w-1/2 my-2 w-full py-2 px-2 flex items-center mb-4 justify-between'>
          <h1 className='text-sm text-black capitalize font-sansreg'>Total</h1>
          <h1 className='text-sm capitalize font-sansreg text-search'>
            {'\u20A6'}
            {carttotal}
          </h1>
        </div>
        <Link href='/delivery'>
          <a className='inline-flex justify-center p-1.5 md:py-2 border border-login text-xs items-center rounded-sm text-white bg-login hover:bg-about focus:outline-none md:flex font-sansreg md:w-1/2 my-2 w-full'>
            Checkout
          </a>
        </Link>
      </section>
      <Footer />
    </>
  )
}

export default Cart
