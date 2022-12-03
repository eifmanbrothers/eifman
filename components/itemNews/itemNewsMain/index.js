import styles from './styles.module.scss'
import Link from 'next/link'

const ItemNewsMain = ({ data, id }) => {
  // console.log(data)
  const { date, title } = data
  return (
    <li className={styles.itemNews}>
      <p>{date}</p>
      <Link href={`/news/${id}`}>{title}</Link>
    </li>
  )
}

export default ItemNewsMain