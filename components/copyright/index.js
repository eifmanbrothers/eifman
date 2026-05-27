import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";

const Copyright = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.copyright}>
      <p className={styles.copyright__years}>
        &#169;2005-{new Date().getFullYear()}
      </p>
      <p className={styles.copyright__org}>{t("common:organization")}</p>

      <p className={styles.copyright__rules}>
        <a href="./rules.pdf" target="_blank" rel="noopener noreferrer">
          Правила приобретения и возврата электронных билетов
        </a>
      </p>
    </div>
  );
};

export default Copyright;
