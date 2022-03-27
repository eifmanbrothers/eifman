import styles from './style.module.css'
import { Icon } from '/components'
import Logo from '../logo'

const Header = () => {

  // console.log(Icon)
  return (
    <header className={styles.header}>
      <Logo />
      html gheader
      {/* <Icon.ExclamationMark /> */}
      <Icon.ExclamationMark />
    </header>
  )
}

export default Header
