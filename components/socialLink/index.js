import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const SocialLink = ({ href, title, image }) => {

  return (
    <Link
      href={href}
      passHref
      className={styles.socialLink}>
      <Image
        priority
        src={image}
        alt={title}
        className={styles.image}
      />
    </Link>
  )
}

export default SocialLink
