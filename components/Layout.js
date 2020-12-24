import Head from './Head'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Head />
    <Navigation />
    {children}
    <Footer />
  </>
)

export default Layout
