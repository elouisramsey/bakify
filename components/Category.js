import React from 'react'
import Link from 'next/link'

const Category = ({ categories }) => {
  return (
    <section className='py-4 px-4 md:py-18 md:px-16'>
      <h1 className='text-login text-xl capitalize font-sansreg mb-2'>
        Categories
      </h1>
      <div className='text-center md:grid grid-cols-3 gap-4'>
        {categories.map((category) => (
          <Link key={category.fields.slug} href={'/' + category.fields.type}>
            <a>
              <div className='img-holder'>
                <img
                  src={category.fields.images.fields.file.url}
                  alt={category.fields.name}
                  className='object-cover w-full max-h-full'
                />
              </div>
              <h1 className='text-base w-full text-center text-cate capitalize mb-4 font-medium'>
                {category.fields.type}
              </h1>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Category
