import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { metaInfo } from "constants/metaInfo";
import { MenuOnPage, MetaData, NavBottomPage } from "components";
import api from "utils/ApiPrincipals";
import ReactMarkdown from "react-markdown";

const Official = ({ data }) => {
  const router = useRouter();

  const {
    data: { attributes },
  } = data;

  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "official")}
        locale={router.locale}
      />
      <MenuOnPage place="official" locale={router.locale} />
      <section className={styles.official}>
        <ReactMarkdown>{attributes.content}</ReactMarkdown>
      </section>
      <NavBottomPage locale={router.locale} />
    </>
  );
};

export default Official;

export async function getServerSideProps(context) {
  const { locale } = context;
  const res = await api.getOfficial(locale);
  return { props: { data: res } };
}
