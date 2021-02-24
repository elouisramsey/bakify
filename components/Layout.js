import Head from './Head'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Head />
    <div className='md:hidden'>
      <Navigation />
      {children}
      <Footer />
    </div>
  </>
)

export default Layout
