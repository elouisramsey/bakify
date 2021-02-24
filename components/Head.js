import React from 'react'
import NextHead from 'next/head'

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{title || ''}</title>
    <meta name='description' content={description || ''} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta httpEquiv='Accept-CH' content='DPR, Width' />
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;800&display=swap'
      rel='stylesheet'
    />
  </NextHead>
)

export default Head
