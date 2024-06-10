import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { listNews, Welcome } from "components";

const Main = ({ listNewsArr }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <Welcome locale={router.locale} />
      <h3 className={styles.main__newsTitle}>{t("news:titlePage")}</h3>
      <listNews.ListNewsMainPage listNews={listNewsArr} />
    </>
  );
};

export default Main;
