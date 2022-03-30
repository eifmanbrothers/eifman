import styles from './styles.module.css'
import SocialLink from '/components/socialLink'
import { links } from '/configs/socialLinks'

const SocialLinks = () => {
  // console.log(links)

  return (
    <ul className={styles.socialLinks}>
      {
        links.map((el) =>
          <li
            key={el.href}
            className={styles.socialLinks__item}>
            <SocialLink {...el} />
          </li>)
      }
    </ul>

  )
}

export default SocialLinks