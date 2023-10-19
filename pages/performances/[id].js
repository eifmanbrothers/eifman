import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import apiPerformance from "utils/ApiPerformance";
import {
  myCarousel,
  Line,
  errors,
  navigations,
  MetaData,
  PerfInfo,
} from "components";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { API_URL } from "configs/variables";

const PerformancePage = ({ data }) => {
  if (data === null) return <errors.Performance />;
  const {
    attributes: {
      images: { data: arrImg },
      introduce,
    },
  } = data;

  const firstData = data.attributes;
  const secondData = data.attributes.localizations.data[0].attributes;
  const currentData =
    data.reqLocation === firstData.locale ? firstData : secondData;

  return (
    <>
      <MetaData
        title={currentData.name}
        keywords={currentData.name}
        description={currentData.name}
      />
      <Line />
      <div className={styles.performancePage}>
        <navigations.PerformancePage name={currentData.name} />
        <section className={styles.performancePage__promo}>
          <div className={styles.performancePage__promoContent}>
            <div>
              <ReactMarkdown className={styles.performancePage__introduce}>
                {currentData.introduce}
              </ReactMarkdown>
            </div>
            <div className={styles.performancePage__imgWrapper}>
              <Image
                className={styles.performancePage__img}
                alt={currentData.name || "alt text needs here"}
                src={API_URL + (firstData.image.data?.attributes.url || "")}
                width={firstData.image.data?.attributes.width || 100}
                height={firstData.image.data?.attributes.height || 100}
              />
            </div>
          </div>
        </section>
        <PerfInfo data={currentData} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const {
    params: { id },
    locale,
  } = context;
  const res = await apiPerformance.getPerformance(id);

  if (!!res.data) {
    res.data.reqLocation = locale;
    return { props: { data: res.data } };
  }

  return { props: { data: res.data } };
}

export default PerformancePage;
