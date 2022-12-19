import styles from './styles.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { Gallery, Line, nextEvents, Nav } from 'components'
import api from 'utils/ApiBileter'
// import apiRepertires from 'utils/ApiRepertoire'

const Performances = ({ data }) => {
  const { t } = useTranslation()

  const allMonth = Object.keys(data)
  // console.log(allMonth)
  // console.log(data)
  // console.log(data['2023-02-01'])
  return (
    <>
      {/* <Line />
      <h3 className={styles.performances__title}>{t('performances:titlePage')}</h3> */}
      <Gallery />
      <section className={styles.performances}>
        {/* <p className="with_buy bileter_afisha_showhall" id={`perf${data['2023-02-01']['15-02-2023'][0].IdPerformance}`}>{data['2023-02-01']['15-02-2023'][0].Name}</p> */}
        {/* <div className="bileter_afisha"></div> */}
        <Nav />
        <nextEvents.Repertoire />
      </section>
    </>

  )
}

export async function getServerSideProps() {
  const res = await api.getData()
  return { props: { data: res } }
}

export default Performances