import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiNews";
import Image from "next/image";
import { API_URL } from "configs/variables";
import { NeededDate, myCarousel, MetaData, errors } from "components";
import { useRouter } from "next/router";

const NewsPage = ({ data }) => {
  const { t } = useTranslation();
  const router = useRouter();
  if (!data) {
    return <errors.NewsPage />;
  }
  const firstData = data.attributes;
  const secondData = data.attributes.localizations.data[0].attributes;
  const currentData =
    data.reqLocation === firstData.locale ? firstData : secondData;

  return (
    <div className={styles.newsPage}>
      <MetaData
        title={currentData.title}
        keywords={currentData.date}
        description={currentData.title}
      />
      <button
        className={styles.newsPage__button}
        onClick={() => router.push("/news?page=1")}
      >
        {t("common:nameBtnNewsPage")}
      </button>
      <section className={styles.newsPage__container}>
        <h1 className={styles.newsPage__title}>{currentData.title}</h1>
        <NeededDate
          date={currentData.date}
          time={currentData.publishedAt}
          locale={router.locale}
          format="LL"
          place="newsPage"
        />
        {firstData?.images?.data ? (
          <myCarousel.React arrImg={firstData.images.data} place="news" />
        ) : (
          <div className={styles.newsPage__imageWrapper}>
            <Image
              src={API_URL + firstData.image.data.attributes.url}
              alt={
                currentData.image?.data.attributes.alternativeText || "photo"
              }
              fill
              sizes="(max-width: 1920px) 100vw"
              className={styles.newsPage__image}
              priority
              quality={100}
            />
          </div>
        )}

        <div className={styles.newsPage__description}>
          <ReactMarkdown>{currentData.news}</ReactMarkdown>
        </div>
        {currentData?.videoLink ? (
          <iframe
            className={styles.newsPage__video}
            src={currentData?.videoLink}
            allowFullScreen
          ></iframe>
        ) : null}
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
  if (res.data) {
    res.data.reqLocation = locale;
    return { props: { data: res.data } };
  }
  return { props: { data: res.data } };
}

export default NewsPage;
