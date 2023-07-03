import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const NewsPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.newsPage}>
      <p className={styles.newsPage__error}> {t("news:errorNotNews")}</p>
      <span className={styles.newsPage__span}>
        {t("news:messageToAllNews")}
      </span>
      <Link className={styles.newsPage__link} href="/news">
        {t("news:linkToAllNews")}
      </Link>
    </div>
  );
};

export default NewsPage;
