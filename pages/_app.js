import '../styles/globals.css'
import { Header, Footer, GosWidget } from 'components'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <div className='root'>
      <Script src="https://pos.gosuslugi.ru/bin/script.min.js" strategy='beforeInteractive'/>
      <Script src="/gosWidget.js" strategy='afterInteractive' type='text/javascript'/>      
      <Script src="/widget.js" strategy='afterInteractive' type='text/javascript'/>      
      <Header />
      <Component {...pageProps} />
      <GosWidget/>
      <Footer />
    </div>
  )
}

export default MyApp
