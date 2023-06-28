import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiNews";
import { listNews, NavNewsPages, MetaData } from "components";
import { metaInfo } from "constants/metaInfo";
import { useRouter } from "next/router";

const News = ({ data }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const {
    query,
    meta: {
      pagination: { page, pageCount, pageSize, total },
    },
  } = data;

  return (
    <section className={styles.news}>
      <MetaData
        {...metaInfo.find((el) => el.page === "news")}
        locale={router.locale}
      />
      <h3 className={styles.news__title}>{t("news:titlePage")}</h3>
      <listNews.ListNewsPage listNews={data.data} />
      <NavNewsPages allPages={pageCount} currentPath={router.asPath} />
    </section>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query)
  const {
    locale,
    query: { page = "" },
  } = context;

  const res = await api.getNews(locale, page);
  res.query = context.query;
  return { props: { data: res } };
}

export default News;
