import styles from './styles.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { EventName } from 'components'

const EventImagine = ({ href, image, imageAlt, name, place }) => {
  const router = useRouter()
  const [isOver, setIsOver] = useState(false)

  return (
    <li className={styles.eventImagine}
      onMouseOver={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}

    >
      <Link href={href}>
        <div className={styles.eventImagine__imageWrapper}>
          <Image src={image} alt={imageAlt[router.locale]} className={styles.eventImagine__image} />
          <EventName
            name={name[router.locale]}
            place={place}
            isOver={isOver}
          />
        </div>
      </Link>
    </li >
  )
}

export default EventImagine