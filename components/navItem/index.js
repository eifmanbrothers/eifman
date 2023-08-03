import styles from "./styles.module.scss";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import { NavBottom } from "components";

const NavItem = ({ name, path, locale, place, submenu, column }) => {
  const router = useRouter();

  return (
    <li
      className={cn(styles.navItem, styles[place], {
        [styles.navItem_active]: path === router.pathname,
      })}
    >
      <Link href={path}>{name[locale]}</Link>
      {submenu ? (
        <div className={styles.navItem__submenu}>
          <NavBottom locale={locale} submenu={submenu} column={column} />
        </div>
      ) : null}
    </li>
  );
};

export default NavItem;
