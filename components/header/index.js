import styles from './style.module.scss'
// import { Icon } from '/components'
import { Logo, BuyBilet, SocialLinks, SwitcherLang } from '/components'

const Header = () => {

  // console.log(SocialLinks)
  return (
    <header className={styles.header}>
      <Logo />
      <BuyBilet />
      <SocialLinks />
      <SwitcherLang />
      {/* <Icon.ExclamationMark /> */}
      {/* <Icon.ExclamationMark /> */}
    </header>
  )
}

export default Header
