import React, { useContext, useState } from 'react'
import { PaystackButton } from 'react-paystack'
import CartContext from '../components/context/context'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const Delivery = () => {
  const { carttotal, cart } = useContext(CartContext)
  const publicKey = 'pk_test_22d7e80ba6b310dbbf3f986e26a415435b004159'
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const amount = carttotal

  const componentProps = {
    email,
    address,
    amount: (amount + 1000) * 100,
    items: cart,
    metadata: {
      name,
      phone
    },
    publicKey,
    text: 'Purchase',
    onSuccess: () => {
      setEmail('')
      setName('')
      setPhone('')
      setAddress('')
      alert('Your order is on the way')
    },
    onClose: () => alert('Kindly Checkout')
  }

  return (
    <>
      <Navigation />
      <section className='py-4 px-8 md:py-18 md:px-16'>
        <h1 className='search text-base text-navigation  capitalize mb-2'>
          Checkout
        </h1>
        <section className='border border-total'>
          <div className='bg-white p-2'>
            <h1 className='search text-base bg-white  capitalize text-navigation'>
              Delivery Details
            </h1>
          </div>
          <div className='bg-transparent p-2 flex items-center justify-between text-navigation'>
            <h1 className='text-xs text-navigation capitalize'>
              delivery charge
            </h1>
            <p className='text-xs text-navigation capitalize'>{'\u20A6'}1000</p>
          </div>
          <div className='bg-transparent p-2 flex items-center justify-between text-navigation'>
            <h1 className='text-xs text-navigation capitalize'>
              Pastries Purchased
            </h1>
            <p className='text-xs text-navigation capitalize'>
              {'\u20A6'}
              {carttotal}
            </p>
          </div>
          <form className='p-2' autoComplete='off' method='post'>
            <div className='flex mb-1 flex-col'>
              <label className='text-sm'>
                Name<span className='text-red-700'>*</span>
              </label>
              <input
                type='text'
                id='name'
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className=' border border-total text-xs rounded-sm md:flex  md:w-1/2 my-2 w-full py-2 px-2'
              />
            </div>

            <div className='flex mb-1 flex-col'>
              <label className='text-sm'>
                Address<span className='text-red-700'>*</span>
              </label>
              <input
                type='text'
                id='address'
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
                className=' border border-total text-xs rounded-sm md:flex  md:w-1/2 my-2 w-full py-2 px-2'
              />
            </div>

            <div className='flex mb-1 flex-col'>
              <label className='text-sm'>
                Email<span className='text-red-700'>*</span>
              </label>
              <input
                type='email'
                id='email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className=' border border-total text-xs rounded-sm md:flex  md:w-1/2 my-2 w-full py-2 px-2'
              />
            </div>

            <div className='flex mb-1 flex-col'>
              <label className='text-sm'>
                Phone<span className='text-red-700'>*</span>
              </label>
              <input
                type='tel'
                id='phone'
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
                className=' border border-total text-xs rounded-sm md:flex  md:w-1/2 my-2 w-full py-2 px-2'
              />
            </div>
          </form>
          <div className='p-2'>
            <PaystackButton
              className='paystack-button inline-flex justify-center p-1.5 md:py-2 border border-login
        text-xs items-center rounded-sm text-white bg-login hover:bg-about
        focus:outline-none md:flex  md:w-1/2 my-2 w-full'
              {...componentProps}
            />
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Delivery
