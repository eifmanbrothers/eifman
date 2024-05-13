import styles from "./styles.module.scss";
import cn from "classnames";
import { btn, NavItem, SocialLinks, SwitcherLang } from "components";
import { navList } from "constants/navFooter";

const NavMobile = ({ isOpen, router, handler }) => {
  return (
    <nav
      className={cn(styles.navMobile, { [styles.navMobile_visible]: isOpen })}
    >
      <ul className={styles.navMobile__list}>
        {navList.map((el) => (
          <NavItem
            key={el.path}
            locale={router.locale}
            {...el}
            place="navMobile"
            handler={handler}
          />
        ))}
      </ul>

      <SocialLinks place="navMobile" />
      <SwitcherLang place="navMobile" />
    </nav>
  );
};

export default NavMobile;
