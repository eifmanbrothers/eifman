import styles from './styles.module.scss'
import ReactMarkdown from 'react-markdown'
import useTranslation from 'next-translate/useTranslation'
import api from 'utils/ApiNews'
import Image from 'next/image'
import Link from 'next/link'
import { API_URL } from 'constants/variables'

const NewsPage = ({ data }) => {
  const { t } = useTranslation()
  const firstData = data.attributes
  const secondData = data.attributes.localizations.data[0].attributes
  const currentData = data.reqLocation === firstData.locale ? firstData : secondData

  // console.log(currentData)
  // console.log(API_URL + firstData.image.data.attributes.url)

  return (
    <div className={styles.newsPage}>
      <Link href="/news" className={styles.newsPage__link}>{t('common:nameLinkNewsPage')}</Link>
      <section className={styles.newsPage__container}>
        <h3 className={styles.newsPage__title}>{currentData.title}</h3>
        <time datetime={currentData.date} className={styles.newsPage__date}>{currentData.date}</time>
        {/* <div className={styles.newsPage__imgWrapper}> */}
        <Image
          src={API_URL + firstData.image.data.attributes.url}
          alt="#"
          width={firstData.image.data.attributes.width}
          height={firstData.image.data.attributes.height}
          className={styles.newsPage__image}
          priority
        />
        {/* </div> */}
        <div className={styles.newsPage__description}>
          <ReactMarkdown>{currentData.news}</ReactMarkdown>
        </div>

      </section>
    </div>

  )
}

export async function getServerSideProps(context) {
  const { params: { id }, locale } = context
  const res = await api.getNewsSingle(id)
  res.data.reqLocation = locale
  return { props: { data: res.data } }
}

export default NewsPage