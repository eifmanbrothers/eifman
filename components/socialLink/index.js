import styles from './style.module.css'
import Link from 'next/link'
import Image from 'next/image'

const SocialLink = ({ href, title, image }) => {

  return (
    <Link
      href={href}
      className={styles.socialLink}>
      <a><Image src={image} alt={title} /></a>
    </Link>
  )
}

export default SocialLink
