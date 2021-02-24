import '../styles/tailwind.css'
import Head from '../components/Head'
import State from '../components/State'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <State>
        <Component {...pageProps} />
      </State>
    </>
  )
}

export default MyApp
