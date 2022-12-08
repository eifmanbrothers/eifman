import '../styles/globals.css'
import { Header, Footer, GosWidget, Nav, Gallery } from 'components'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // console.log('router.asPath')
  return (
    <div className='root'>
      {/* <Script src="https://pos.gosuslugi.ru/bin/script.min.js" strategy='beforeInteractive'/> */}
      {/* <Script src="/gosWidget.js" strategy='afterInteractive' type='text/javascript'/>       */}
      {/* <Script src="/widget.js" strategy='afterInteractive' type='text/javascript'/>       */}
      <Header />
      {router.asPath === '/' && <Gallery />}
      <Nav />
      <Component {...pageProps} />
      {/* <GosWidget /> */}
      <Footer />
    </div>
  )
}

export default MyApp
