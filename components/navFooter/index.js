import styles from "./styles.module.scss";
import { NavItem } from "components";
import { navList } from "constants/navFooter";
import { useRouter } from "next/router";

const NavFooter = () => {
  const router = useRouter();
  return (
    <ul className={styles.navFooter}>
      {navList.map((el) => (
        <NavItem key={el.path} locale={router.locale} {...el} place="footer" />
      ))}
    </ul>
  );
};

export default NavFooter;
