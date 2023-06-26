import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiNews";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "configs/variables";
import { NeededDate, myCarousel } from "components";
import { useRouter } from "next/router";

const NewsPage = ({ data }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const firstData = data.attributes;
  const secondData = data.attributes.localizations.data[0].attributes;
  const currentData =
    data.reqLocation === firstData.locale ? firstData : secondData;

  console.log(currentData);
  return (
    <div className={styles.newsPage}>
      <button
        className={styles.newsPage__button}
        onClick={() => router.push("/news")}
      >
        {t("common:nameBtnNewsPage")}
      </button>
      {/* <Link href="/news" className={styles.newsPage__link}>{t('common:nameLinkNewsPage')}</Link> */}
      <section className={styles.newsPage__container}>
        <h3 className={styles.newsPage__title}>{currentData.title}</h3>
        <NeededDate
          date={currentData.date}
          time={currentData.publishedAt}
          locale={router.locale}
          format="LL"
          place="newsPage"
        />
        {currentData?.images?.data ? (
          <myCarousel.React arrImg={currentData.images.data} place="news" />
        ) : (
          <Image
            src={API_URL + firstData.image.data.attributes.url}
            alt={currentData.image?.data.attributes.alternativeText || "photo"}
            width={firstData.image.data.attributes.width}
            height={firstData.image.data.attributes.height}
            className={styles.newsPage__image}
            priority
          />
        )}

        <div className={styles.newsPage__description}>
          <ReactMarkdown>{currentData.news}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const {
    params: { id },
    locale,
  } = context;
  const res = await api.getNewsSingle(id);
  res.data.reqLocation = locale;
  return { props: { data: res.data } };
}

export default NewsPage;
