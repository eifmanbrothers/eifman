import styles from './style.module.css'
import { Icon } from '/components'

const Header = () => {

  // console.log(Icon)
  return (
    <header className={styles.header}>
      html gheader
      <Icon.ExclamationMark />
      <Icon.ExclamationMark />
    </header>
  )
}

export default Header
