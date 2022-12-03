import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation'
import { Main } from 'components'
import apiNews from 'utils/ApiNews'

const Home = ({ data }) => {

  const { t } = useTranslation()
  // console.log(data)
  return (
    <div className={styles.container}>
      <h1>{t('common:namePage')}</h1>
      <Main listNewsArr={data} />
    </div>
  )
}

export async function getServerSideProps({ locale }) {

  const res = await apiNews.getNewsPart(locale)
  return { props: { data: res.data } }
}

export default Home