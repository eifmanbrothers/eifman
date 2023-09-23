import styles from "./styles.module.scss";
import { MenuOnPage, MetaData, myCarousel } from "components";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { metaInfo } from "constants/metaInfo";
import data from "constants/enterprises/dance";

const Dance = () => {
  const router = useRouter();

  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "dance")}
        locale={router.locale}
      />
      <MenuOnPage place="dance" locale={router.locale} />
      <div className={styles.dance__content}>
        <myCarousel.React arrImg={data.images} place="dance" />
        <ReactMarkdown className={styles.dance__text}>
          {data.text[router.locale]}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Dance;
