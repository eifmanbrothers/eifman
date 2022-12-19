import styles from './styles.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import apiPerformance from 'utils/ApiPerformance'
import { myCarousel, Line, errors, navigations } from 'components'

const PerformancePage = ({ data }) => {
  const router = useRouter()
  // console.log(data)

  useEffect(() => {
    // console.log(1)
  }, [])

  if (data === null) return <errors.Performance />
  const { attributes: { images: { data: arrImg } } } = data

  const firstData = data.attributes
  const secondData = data.attributes.localizations.data[0].attributes
  const currentData = data.reqLocation === firstData.locale ? firstData : secondData

  return (
    <>
      <Line />
      <div className={styles.performancePage}>
        <navigations.PerformancePage name={currentData.name} />

        {/* <myCarousel.React arrImg={arrImg} /> */}
      </div>
    </>
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