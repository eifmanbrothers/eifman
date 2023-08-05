import styles from "./styles.module.scss";
import { MenuOnPage, NavBottomPage, myCarousel, MetaData } from "components";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import data from "constants/eifman";
import { metaInfo } from "constants/metaInfo";
import Image from "next/image";

const Eifman = () => {
  const router = useRouter();
  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "eifman")}
        locale={router.locale}
      />
      <MenuOnPage place="eifman" locale={router.locale} />
      <section className={styles.eifman__promo}>
        <div className={styles.eifman__title}>
          <ReactMarkdown>{data.title[router.locale]}</ReactMarkdown>
        </div>
        <Image
          src={data.titleImage}
          alt="Photo Boris Eifman"
          width={349}
          height={384}
        />
      </section>
      <ReactMarkdown className={styles.eifman__subtitle}>
        {data.subtitle[router.locale]}
      </ReactMarkdown>
      <section className={styles.eifman__about}>
        <div className={styles.eifman__aboutContent}>
          <Image
            src={data.subtitleImage}
            alt="Photo Boris Eifman"
            width={360}
            height={360}
            className={styles.eifman__subImage}
          />
          <div className={styles.eifman__aboutText}>
            <ReactMarkdown>{data.about[router.locale]}</ReactMarkdown>
          </div>
        </div>
      </section>
      <blockquote className={styles.eifman__bobrikina}>
        <ReactMarkdown>{data.bobrikinaText[router.locale]}</ReactMarkdown>
        <cite style={{ textAlign: "right", display: "block" }}>
          {data.srcBobrikinaText[router.locale]}
        </cite>
      </blockquote>
      <div className={styles.eifman__carusel}>
        <myCarousel.React arrImg={data.arrImg} />
      </div>
      <section className={styles.eifman__press}>
        <h3 className={styles.eifman__pressTitle}>
          {data.press.title[router.locale]}
        </h3>
        <ul className={styles.eifman__pressItems}>
          {data.press.items.map((el) => {
            return (
              <div
                className={styles.eifman__pressItem}
                key={el.src[router.locale]}
              >
                <blockquote className={styles.eifman__pressQuote}>
                  {el.quote[router.locale]}
                </blockquote>
                <cite className={styles.eifman__pressItemSrc}>
                  {el.src[router.locale]}
                </cite>
              </div>
            );
          })}
        </ul>
      </section>

      <NavBottomPage locale={router.locale} />
    </>
  );
};

export default Eifman;
