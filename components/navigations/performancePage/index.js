import styles from "./styles.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const PerformancePage = ({ name = "test" }) => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <Link href="/performances" className={styles.nav__link}>
        {t("common:nameLinkPerformancePage") + " " + "/"}
      </Link>
      <h1 className={styles.nav__span}>{name}</h1>
    </nav>
  );
};

export default PerformancePage;
