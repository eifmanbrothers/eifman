import styles from './styles.module.scss'
import useTranslation from 'next-translate/useTranslation'
import api from 'utils/ApiNews'
import { listNews } from 'components'

const News = ({ data }) => {
  const { t } = useTranslation()
  // console.log(data)
  return (
    <section className={styles.news}>
      <h3 className={styles.news__title}>{t('news:titlePage')}</h3>
      <listNews.ListNewsPage listNews={data} />
    </section>
  )
}

export async function getServerSideProps({ locale }) {
  const res = await api.getNews(locale)
  return { props: { data: res.data } }
}

export default News