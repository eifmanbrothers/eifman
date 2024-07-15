import styles from "./styles.module.scss";
import { MenuOnPage, MetaData, myCarousel } from "components";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { metaInfo } from "constants/metaInfo";

import api from "utils/ApiPrincipals";
import { getLinks } from "helpers/getArrImages";

const Workshops = ({ allData }) => {
  const router = useRouter();
  const { data } = allData;
  const arrayImagesLinks = getLinks(data?.attributes.images.data);

  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "workshop")}
        locale={router.locale}
      />
      <MenuOnPage place="workshop" locale={router.locale} />
      <h1 className={styles.workshops__title}>{data?.attributes.title}</h1>
      <div className={styles.workshop__content}>
        <myCarousel.React arrImg={arrayImagesLinks} place="dance" />
        <ReactMarkdown className={styles.workshop__text}>
          {data?.attributes.text}
        </ReactMarkdown>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { locale } = context;
  const res = await api.getWorkshops(locale);
  return { props: { allData: res } };
}

export default Workshops;
