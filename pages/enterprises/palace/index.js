import styles from "./styles.module.scss";
import { MenuOnPage, MetaData } from "components";
import { useRouter } from "next/router";
import { metaInfo } from "constants/metaInfo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "constants/enterprises/dancePalace";
import Image from "next/image";

const Palace = () => {
  const router = useRouter();
  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "dancePalace")}
        locale={router.locale}
      />
      <MenuOnPage place="dancePalace" locale={router.locale} />
      <h1 className={styles.palace__title}>{data.title[router.locale]}</h1>
      <section className={styles.palace}>
        <div className={styles.palace__imageWrapper}>
          <Image
            src={data.image}
            alt="Dance Palace"
            // width={537}
            fill
            // height={358}
            className={styles.palace__image}
          />
        </div>
        <ReactMarkdown className={styles.palace__text}>
          {data.text[router.locale]}
        </ReactMarkdown>
      </section>
    </>
  );
};

export default Palace;
