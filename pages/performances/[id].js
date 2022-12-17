import styles from './styles.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import apiPerformance from 'utils/ApiPerformance'
import { MyCarousel } from 'components'

const PerformancePage = ({ data }) => {
  const router = useRouter()
  // console.log(data)
  const { attributes: { images: { data: arrImg } } } = data
  // console.log(arrImg)
  // useEffect(() => {
  //   if (data === null) router.push('/404')
  // }, [router, data])
  return (
    <div className={styles.performancePage}>

      <p>page performance</p>
      <MyCarousel arrImg={arrImg} />

    </div>
  )
}


export async function getServerSideProps(context) {
  const { params: { id }, locale } = context
  const res = await apiPerformance.getPerformance(id)

  if (!!res.data) {
    res.data.reqLocation = locale
    return { props: { data: res.data } }
  }

  return { props: { data: res.data } }
}


export default PerformancePage