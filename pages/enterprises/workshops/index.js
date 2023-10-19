import styles from "./styles.module.scss";
import { MenuOnPage, MetaData, myCarousel } from "components";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { metaInfo } from "constants/metaInfo";
import data from "constants/enterprises/workshop";

const Workshops = () => {
  const router = useRouter();

  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "workshop")}
        locale={router.locale}
      />
      <MenuOnPage place="workshop" locale={router.locale} />
      <div className={styles.workshop__content}>
        <myCarousel.React arrImg={data.images} place="dance" />
        <ReactMarkdown className={styles.workshop__text}>
          {data.text[router.locale]}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Workshops;
