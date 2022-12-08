import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import image1 from '../../images/event/roden.png'

const EventImagine = ({ href, image, imageAlt, name }) => {
  const router = useRouter()
  // console.log(href)
  return (
    <li className={styles.eventImagine}>
      <Link href={href}>
        <div className={styles.eventImagine__imageWrapper}>
          <Image src={image} alt={imageAlt[router.locale]} className={styles.eventImagine__image} />
          <p>{name[router.locale]}</p>
        </div>
      </Link>
    </li>
  )
}

export default EventImagine