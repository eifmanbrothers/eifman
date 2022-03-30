import '../styles/globals.css'
import { Header, Footer } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <div className='root'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
