import '../styles/globals.css'
import { Header, Footer, GosWidget, Nav } from 'components'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <div className='root'>
      {/* <Script src="https://pos.gosuslugi.ru/bin/script.min.js" strategy='beforeInteractive'/> */}
      {/* <Script src="/gosWidget.js" strategy='afterInteractive' type='text/javascript'/>       */}
      {/* <Script src="/widget.js" strategy='afterInteractive' type='text/javascript'/>       */}
      <Header />
      <Nav />
      <Component {...pageProps} />
      {/* <GosWidget /> */}
      <Footer />
    </div>
  )
}

export default MyApp
