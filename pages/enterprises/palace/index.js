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
      <section>
        <Image
          src={data.image}
          alt="Dance Palace"
          width={537}
          height={358}
          className={styles.palace__image}
        />
        <ReactMarkdown className={styles.palace__text}>
          {data.text[router.locale]}
        </ReactMarkdown>
      </section>
    </>
  );
};

export default Palace;
