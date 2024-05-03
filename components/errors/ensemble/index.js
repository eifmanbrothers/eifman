import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const EnsemblePage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.ensemblePage}>
      <p className={styles.ensemblePage__error}>
        {t("ensemble:errorNotMember")}
      </p>
      <span className={styles.ensemblePage__span}>{t("ensemble:message")}</span>
      <Link className={styles.ensemblePage__link} href="/ensemble">
        {t("ensemble:linkToEnsemble")}
      </Link>
    </div>
  );
};

export default EnsemblePage;
