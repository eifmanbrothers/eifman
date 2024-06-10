import styles from "./styles.module.scss";
import api from "utils/ApiPrincipals";
import { MenuOnPage, MetaData, NavBottomPage } from "components";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { metaInfo } from "constants/metaInfo";

const Principals = ({ data }) => {
  const router = useRouter();
  const {
    data: { attributes },
  } = data;

  return (
    <section className={styles.principals}>
      <MetaData
        {...metaInfo.find((el) => el.page === "principals")}
        locale={router.locale}
      />
      <MenuOnPage place="principals" locale={router.locale} />
      <h1 className={styles.principals__title}>
        {router.locale === "ru" ? "Руководство" : "Management"}
      </h1>
      <figure className={styles.principals__director}>
        <Image
          priority={true}
          alt={attributes.director}
          src={attributes.linkImageDirector}
          width={300}
          height={300}
          className={styles.principals__img}
        />
        <figcaption className={styles.principals__caption}>
          <ReactMarkdown>{attributes.director}</ReactMarkdown>
        </figcaption>
      </figure>
      <div className={styles.principals__members}>
        <ReactMarkdown>{attributes.principals}</ReactMarkdown>
      </div>
      <NavBottomPage locale={router.locale} />
    </section>
  );
};

export default Principals;

export async function getServerSideProps(context) {
  // console.log(context.query)
  const { locale } = context;
  const res = await api.getPrincipal(locale);
  return { props: { data: res } };
}
