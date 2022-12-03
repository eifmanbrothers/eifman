import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const ItemNewsPage = ({ data, id }) => {
  // console.log(data)
  const { date, title, description, image: { data: { attributes: { formats: { thumbnail } } } } } = data
  // console.log(new Date(date))
  // console.log(small)
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
        <p>{date}</p>
        <div className={styles.newsItem__description}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>

    </li>
  )
}

export default ItemNewsPage