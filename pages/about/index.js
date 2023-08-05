import styles from "./styles.module.scss";
import data from "constants/about";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { metaInfo } from "constants/metaInfo";
import { MenuOnPage, NavBottomPage, MetaData } from "components";

const About = () => {
  const router = useRouter();
  const { text, link, image } = data;
  return (
    <div className={styles.about}>
      <MetaData
        {...metaInfo.find((el) => el.page === "about")}
        locale={router.locale}
      />
      <MenuOnPage place="about" locale={router.locale} />
      <div className={styles.about__imgWrapper}>
        <Image
          src={image}
          fill
          className={styles.about__image}
          alt="Theatre Ballet"
        />
      </div>
      <section className={styles.about__content}>
        <ReactMarkdown>{text[router.locale]}</ReactMarkdown>
        <iframe src={link} className={styles.about__video} />
      </section>
      <NavBottomPage locale={router.locale} />
    </div>
  );
};

export default About;
