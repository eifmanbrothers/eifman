import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

const SwitcherLang = ({ place }) => {
  const router = useRouter();

  return (
    <ul className={cn(styles.switcher, [styles[place]])}>
      {router.locales.map((el) => (
        <li key={el} className={styles.switcher__item}>
          <Link
            href={router.asPath}
            locale={el}
            className={cn(styles.switcher__link, {
              [styles.switcher__link_active]: router.locale === el,
            })}
          >
            {el === "ru" ? "Русский" : "English"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SwitcherLang;
