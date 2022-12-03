import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { NeededDate } from 'components'
import { useRouter } from 'next/router'

const ItemNewsPage = ({ data, id }) => {
  const router = useRouter()
  // console.log(data)
  const { date, title, description, publishedAt, image: { data: { attributes: { formats: { thumbnail } } } } } = data
  // console.log(publishedAt)
  // const a = hook('2022-11-18').locale('fr')
  // console.log(hook('2022-11-18'))
  return (
    <li className={styles.itemNews}>
      <div className={styles.itemNews__imgWrapper}>
        <Image src={`http://localhost:1332${thumbnail.url}`}
          fill
          sizes="(max-width: 2000px) 100vw,
          (max-width: 2200px) 50vw,
          33vw"
          alt="#"
          className={styles.itemNews__image} />
      </div>
      <div className={styles.itemNews__content}>
        <Link href={`/news/${id}`} className={styles.itemNews__link}>{title}</Link>
        <NeededDate
          date={date}
          locale={router.locale}
          time={publishedAt}
        />
        <div className={styles.newsItem__description}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>

    </li>
  )
}

export default ItemNewsPage