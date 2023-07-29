import styles from "./styles.module.scss";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";

const NavItem = ({ name, path, locale, place }) => {
  const router = useRouter();
  return (
    <li
      className={cn(styles.navItem, styles[place], {
        [styles.navItem_active]: path === router.pathname,
      })}
    >
      <Link href={path}>{name[locale]}</Link>
    </li>
  );
};

export default NavItem;
