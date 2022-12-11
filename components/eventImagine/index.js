import styles from './styles.module.scss'
import cn from 'classnames'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { EventName } from 'components'

const EventImagine = ({ href, image, imageAlt, name, place }) => {
  const router = useRouter()
  const [isOver, setIsOver] = useState(false)

  return (
    <li className={styles.eventImagine}>
      <div className={styles.eventImagine__imageWrapper}>
        <Link href={href}
          className={cn(styles.eventImagine__link, styles[place])}
          onMouseOver={() => setTimeout(() => setIsOver(true), 1000)}
          onMouseLeave={() => setTimeout(() => setIsOver(false), 1000)}
        />
        <Image
          src={image}
          alt={imageAlt[router.locale]}
          className={styles.eventImagine__image}
          priority />
        <EventName
          name={name[router.locale]}
          place={place}
          isOver={isOver}
        />
      </div>
    </li >
  )
}

export default EventImagine