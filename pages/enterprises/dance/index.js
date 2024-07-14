import styles from "./styles.module.scss";
import { MenuOnPage, MetaData, myCarousel } from "components";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { metaInfo } from "constants/metaInfo";
import api from "utils/ApiPrincipals";
import { getLinks } from "helpers/getArrImages";

const Dance = ({ allData }) => {
  const { data } = allData;
  const router = useRouter();
  const arrayImagesLinks = getLinks(data?.attributes.images.data);
  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "dance")}
        locale={router.locale}
      />
      <MenuOnPage place="dance" locale={router.locale} />
      <div className={styles.dance__content}>
        <myCarousel.React arrImg={arrayImagesLinks} place="dance" />
        <ReactMarkdown className={styles.dance__text}>
          {data?.attributes.text}
        </ReactMarkdown>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { locale } = context;
  const res = await api.getDance(locale);
  return { props: { allData: res } };
}

export default Dance;
