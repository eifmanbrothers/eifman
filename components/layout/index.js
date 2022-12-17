import { Header, Nav, Footer, Gallery } from 'components'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  return (
    <div className='root'>
      <Header />
      {/* {router.asPath === '/' && <Gallery />} */}
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}