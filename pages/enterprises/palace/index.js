import styles from "./styles.module.scss";
import { MenuOnPage, MetaData } from "components";
import { useRouter } from "next/router";
import { metaInfo } from "constants/metaInfo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import api from "utils/ApiPrincipals";
import { API_URL } from "configs/variables";
import Image from "next/image";

const Palace = ({ allData }) => {
  const router = useRouter();
  const { data } = allData;

  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "dancePalace")}
        locale={router.locale}
      />
      <MenuOnPage place="dancePalace" locale={router.locale} />
      <h1 className={styles.palace__title}>{data?.attributes.title}</h1>
      <section className={styles.palace}>
        <div className={styles.palace__imageWrapper}>
          <Image
            src={API_URL + data?.attributes.image.data.attributes.url}
            alt="Dance Palace"
            fill
            className={styles.palace__image}
          />
        </div>
        <ReactMarkdown className={styles.palace__text}>
          {data?.attributes.text}
        </ReactMarkdown>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { locale } = context;
  const res = await api.getPalace(locale);
  return { props: { allData: res } };
}

export default Palace;
