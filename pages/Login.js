import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import axios from 'axios'
import { getData } from '../utils/fetchData'
import Cookie from 'js-cookie'

const Login = ({ onSubmit }) => {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is Required'),
    password: Yup.string()
      .required('Please enter your password')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character'
      )
  })

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(values, { resetForm }) {
      try {
        fetch(
          'https://ali-express1.p.rapidapi.com/productsByCategory/205838503?from=0&country=CO',
          {
            method: 'GET',
            headers: {
              'x-rapidapi-key':
                '1859bd77aamsha9fbc957d07eca5p165acfjsna47e23e23350',
              'x-rapidapi-host': 'ali-express1.p.rapidapi.com'
            }
          }
        )
          .then((response) => {
            console.log(response)
          })
          .catch((err) => {
            console.error(err)
          })
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
        <h1 className='search text-sm text-navigation  mb-2'>
          Sign in to Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-light text-loginText  capitalize'
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
              htmlFor='password'
              className='block text-sm font-light text-loginText  capitalize'
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
          <button
            type='submit'
            className='inline-flex justify-center p-1.5 md:py-2 border border-login text-xs items-center rounded-sm text-white bg-login hover:bg-about focus:outline-none md:flex  md:w-1/2 my-2 w-full'
          >
            Login
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

export default Login
