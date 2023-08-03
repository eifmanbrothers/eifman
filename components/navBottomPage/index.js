import styles from "./styles.module.scss";
import items from "configs/navBottomPage";
import Image from "next/image";
import Link from "next/link";

const NavBottomPage = ({ locale }) => {
  return (
    <nav>
      <ul className={styles.navBottomPage}>
        {items.map((el) => (
          <li className={styles.navBottomPage__item} key={el.path}>
            <Link href={el.path} className={styles.navBottomPage__link}>
              <Image
                src={el.image}
                alt={el.name[locale]}
                fill
                className={styles.navBottomPage__image}
                sizes="(max-width: 2000px) 100vw"
              />
            </Link>
            <span className={styles.navBottomPage__span}>
              {el.name[locale]}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBottomPage;
