import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import Script from "next/script";
import { srcScript, srcScriptEn } from "configs/bileter";

const SwitcherLang = () => {
  const router = useRouter();
  const isTicketsPage = router.pathname.includes("/tickets");

  return (
    <>
      <ul className={styles.switcher}>
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
      {isTicketsPage && (
        <Script
          onLoad={() => router.reload()}
          strategy="beforeInteractive"
          src={router.locale === "ru" ? srcScript : srcScriptEn}
        />
      )}
    </>
  );
};

export default SwitcherLang;
