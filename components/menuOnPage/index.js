import styles from "./styles.module.scss";
import Link from "next/link";
import config from "configs/menuOnPage";

const MenuOnPage = ({ place, locale }) => {
  const data = config.find((el) => el.place === place);
  // console.log(data);
  return (
    <nav className={styles.menuOnPage}>
      <Link href={data.href} className={styles.menuOnPage__link}>
        {data.nameLink[locale] + " " + "/"}
      </Link>
      <h1 className={styles.menuOnPage__span}>{data.span[locale]}</h1>
    </nav>
  );
};

export default MenuOnPage;
