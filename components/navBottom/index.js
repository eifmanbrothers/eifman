import styles from "./styles.module.scss";
import cn from "classnames";
import { NavItem } from "components";

const NavBottom = ({ submenu = [], locale, column }) => {
  return (
    <ul
      className={cn(styles.navBottom, {
        [styles.navBottom_column]: column,
      })}
    >
      {submenu.map((el) => (
        <NavItem
          key={el.path[locale]}
          {...el}
          locale={locale}
          place="submenu"
        />
      ))}
    </ul>
  );
};

export default NavBottom;
