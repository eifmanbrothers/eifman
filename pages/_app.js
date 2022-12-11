import '../styles/globals.css'
import Script from 'next/script'
import { srcScript, srcStyle } from 'configs/bileter'
import { Layout } from 'components'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <link href={srcStyle.href} rel={srcStyle.rel} type={srcStyle.type} media={srcStyle.media} />
      <Script src={srcScript} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
