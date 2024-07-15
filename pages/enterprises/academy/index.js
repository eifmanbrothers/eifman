import styles from "./styles.module.scss";
import { MenuOnPage, MetaData, myCarousel } from "components";
import { useRouter } from "next/router";
import { metaInfo } from "constants/metaInfo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import api from "utils/ApiPrincipals";
import { getLinks } from "helpers/getArrImages";

const Academy = ({ allData }) => {
  const router = useRouter();
  const { data } = allData;
  const arrayImagesLinks = getLinks(data?.attributes.images.data);

  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "danceAcademy")}
        locale={router.locale}
      />
      <MenuOnPage place="danceAcademy" locale={router.locale} />
      <h1 className={styles.academy__title}>{data?.attributes.title}</h1>
      <div className={styles.academy__content}>
        <myCarousel.React arrImg={arrayImagesLinks} place="danceAcademy" />
        <ReactMarkdown className={styles.academy__text}>
          {data?.attributes.text}
        </ReactMarkdown>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { locale } = context;
  const res = await api.getAcademy(locale);
  return { props: { allData: res } };
}

export default Academy;
