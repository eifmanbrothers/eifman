import styles from './styles.module.scss'
import useTranslation from 'next-translate/useTranslation'
import api from 'utils/ApiNews'
import { listNews, NavNewsPages } from 'components'
import { useRouter } from 'next/router'

const News = ({ data }) => {
  const { t } = useTranslation()
  const router = useRouter()
  // console.log(router.asPath)

  const { query, meta: { pagination: { page, pageCount, pageSize, total } } } = data
  // console.log(query)
  // console.log(`size of page: ${pageSize}`)
  // console.log(`number of page: ${page}`)
  // console.log(`all pages: ${pageCount}`)
  // console.log(`total items: ${total}`)
  return (
    <section className={styles.news}>
      <h3 className={styles.news__title}>{t('news:titlePage')}</h3>
      <listNews.ListNewsPage listNews={data.data} />
      <NavNewsPages
        allPages={pageCount}
        currentPath={router.asPath}
      />
    </section>
  )
}

export async function getServerSideProps(context) {
  // console.log(context.query)
  const { locale, query: { page = '' } } = context

  const res = await api.getNews(locale, page)
  res.query = context.query
  return { props: { data: res } }
}

export default News