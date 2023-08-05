import styles from "./styles.module.scss";
import { MenuOnPage, MetaData, myCarousel } from "components";
import { useRouter } from "next/router";
import { metaInfo } from "constants/metaInfo";
import data from "constants/enterprises/danceAcademy";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Academy = () => {
  const router = useRouter();
  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "danceAcademy")}
        locale={router.locale}
      />
      <MenuOnPage place="danceAcademy" locale={router.locale} />
      <div className={styles.academy__content}>
        <myCarousel.React arrImg={data.images} place="danceAcademy" />
        <ReactMarkdown className={styles.academy__text}>
          {data.text[router.locale]}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Academy;
