import React from 'react'
import NextHead from 'next/head'

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{title || ''}</title>
    <meta name='description' content={description || ''} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta httpEquiv='Accept-CH' content='DPR, Width' />
  </NextHead>
)

export default Head
