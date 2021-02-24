import Bestsellers from '../components/Bestsellers'
import Category from '../components/Category'
import Hero from '../components/Hero'
import How from '../components/How'
import Layout from '../components/Layout'

const client = require('contentful').createClient({
  space: process.env.NEXT_APP_API_SPACE,
  accessToken: process.env.NEXT_APP_ACCESS_TOKEN
})

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'bakify',
    order: 'sys.createdAt'
  })

  return {
    props: {
      pastries: data.items
    }
  }
}

export default function Home({ pastries }) {
  const bestseller = pastries.filter((pastry) => {
    return pastry.fields.bestseller === true
  })

  // GET DIFFERENT CATEGORIES
  const uniqIds = {}
  const categories = pastries.filter(
    (o) => !uniqIds[o.fields.type] && (uniqIds[o.fields.type] = true)
  )
  return (
    <>
      <p className='text-sm text-search text-center w-full h-screen md:flex justify-center items-center hidden'>
        Please switch to mobile
      </p>
      <Layout className='md:hidden'>
        <Hero />
        <How />
        <Bestsellers bestseller={bestseller} />
        <Category categories={categories} />
      </Layout>
    </>
  )
}
