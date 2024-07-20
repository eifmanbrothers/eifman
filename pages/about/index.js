import styles from "./styles.module.scss";
import api from "utils/ApiPrincipals";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { metaInfo } from "constants/metaInfo";
import { MenuOnPage, NavBottomPage, MetaData } from "components";

const About = ({ allData }) => {
  const router = useRouter();

  if (!!!allData.data)
    return <p style={{ textAlign: "center" }}>server error</p>;

  const {
    data: {
      attributes: { text, linkVideo, linkImage },
    },
  } = allData;

  return (
    <div className={styles.about}>
      <MetaData
        {...metaInfo.find((el) => el.page === "about")}
        locale={router.locale}
      />
      <MenuOnPage place="about" locale={router.locale} />
      <div className={styles.about__imgWrapper}>
        <Image
          src={linkImage}
          fill
          className={styles.about__image}
          alt="Theatre Ballet"
        />
      </div>
      <section className={styles.about__content}>
        <div className={styles.about__text}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        <iframe src={linkVideo} className={styles.about__video} />
      </section>
      <NavBottomPage locale={router.locale} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { locale } = context;
  const res = await api.getAbout(locale);
  return { props: { allData: res } };
}

export default About;
