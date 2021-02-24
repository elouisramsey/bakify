import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import axios from 'axios'
import { postData } from '../utils/fetchData'

const Signup = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
    address: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(15, 'Maximum 15 characters')
      .required('Name is Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is Required'),
    address: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(40, 'Maximum 15 characters')
      .required('Address is Required'),
    phone: Yup.string()
      .min(10, 'Mininum 10 characters')
      .max(14, 'Maximum 14 characters')
      .required('Phone is Required'),
    password: Yup.string()
      .required('Please enter your password')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character'
      ),
    passwordConfirmation: Yup.string()
      .required('Please confirm your password')
      .when('password', {
        is: (password) => (password && password.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          "Password doesn't match"
        )
      })
  })

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(values, { resetForm }) {
      try {
        const res = await postData('/api/auth/register', values)
        const data = await res
        console.log(data)
      } catch (err) {
        console.log(err)
      }
      resetForm()
    }
  })

  return (
    <>
      <Navigation />
      <section className='py-12 px-8 md:py-18 md:px-16'>
        <h1 className='search text-sm text-navigation  capitalize mb-2'>
          Create your account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-xs mb-2 font-light text-loginText '
            >
              Name
              <span className='text-sm capitalize  text-red-700'>*</span>
            </label>
            <input
              type='text'
              onChange={handleChange}
              name='name'
              id='name'
              values={values.name}
              autoComplete='given-name'
              className=' border border-total text-xs rounded-sm md:flex  md:w-1/2  w-full py-2 px-2 flex items-center  justify-between text-search bg-transparent focus:outline-none'
            />
            <p className='text-red-600 text-sm'>
              {errors.name && touched.name ? errors.name : null}
            </p>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-xs mb-2 font-light text-loginText  capitalize'
            >
              email
              <span className='text-sm capitalize  text-red-700'>*</span>
            </label>
            <input
              type='text'
              onChange={handleChange}
              name='email'
              id='email'
              values={values.email}
              autoComplete='given-email'
              className=' border border-total text-xs rounded-sm md:flex  md:w-1/2  w-full py-2 px-2 flex items-center  justify-between text-search bg-transparent focus:outline-none'
            />
            <p className='text-red-600 text-sm'>
              {errors.email && touched.email ? errors.email : null}
            </p>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='phone'
              className='block text-xs mb-2 font-light text-loginText  capitalize'
            >
              phone
              <span className='text-sm capitalize  text-red-700'>*</span>
            </label>
            <input
              type='text'
              onChange={handleChange}
              name='phone'
              id='phone'
              values={values.phone}
              autoComplete='given-phone'
              className=' border border-total text-xs rounded-sm md:flex  md:w-1/2  w-full py-2 px-2 flex items-center  justify-between text-search bg-transparent focus:outline-none'
            />
            <p className='text-red-600 text-sm'>
              {errors.phone && touched.phone ? errors.phone : null}
            </p>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='address'
              className='block text-xs mb-2 font-light text-loginText  capitalize'
            >
              address
              <span className='text-sm capitalize  text-red-700'>*</span>
            </label>
            <input
              type='text'
              onChange={handleChange}
              name='address'
              id='address'
              values={values.address}
              autoComplete='given-address'
              className=' border border-total text-xs rounded-sm md:flex  md:w-1/2  w-full py-2 px-2 flex items-center  justify-between text-search bg-transparent focus:outline-none'
            />
            <p className='text-red-600 text-sm'>
              {errors.address && touched.address ? errors.address : null}
            </p>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-xs mb-2 font-light text-loginText  capitalize'
            >
              password
              <span className='text-sm capitalize  text-red-700'>*</span>
            </label>
            <input
              type='password'
              onChange={handleChange}
              name='password'
              id='password'
              values={values.password}
              autoComplete='given-password'
              className=' border border-total text-xs rounded-sm md:flex  md:w-1/2  w-full py-2 px-2 flex items-center  justify-between text-search bg-transparent focus:outline-none'
            />
            <p className='text-red-600 text-sm'>
              {errors.password && touched.password ? errors.password : null}
            </p>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='passwordConfirmation'
              className='block text-xs mb-2 font-light text-loginText  capitalize'
            >
              confirm password
              <span className='text-sm capitalize  text-red-700'>*</span>
            </label>
            <input
              type='password'
              onChange={handleChange}
              name='passwordConfirmation'
              id='passwordConfirmation'
              values={values.passwordConfirmation}
              autoComplete='given-passwordConfirmation'
              className=' border border-total text-xs rounded-sm md:flex  md:w-1/2  w-full py-2 px-2 flex items-center  justify-between text-search bg-transparent focus:outline-none'
            />
            <p className='text-red-600 text-sm'>
              {errors.passwordConfirmation && touched.passwordConfirmation
                ? errors.passwordConfirmation
                : null}
            </p>
          </div>
          <button
            type='submit'
            className='inline-flex justify-center p-1.5 md:py-2 border border-login text-xs items-center rounded-sm text-white bg-login hover:bg-about focus:outline-none md:flex  md:w-1/2 my-2 w-full'
          >
            Create Account
          </button>
        </form>
        <div className='py-4 flex items-center justfiy-center'>
          <div className='border border-b solid border-total w-3/5' />
          <p className='px-2 text-cate text-base  w-1/5'>OR</p>
          <div className='border border-b border-total w-3/5' />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Signup
