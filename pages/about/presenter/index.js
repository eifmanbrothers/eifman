import styles from "./styles.module.scss";
import api from "utils/ApiPrincipals";
import { MenuOnPage, MetaData, NavBottomPage } from "components";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { metaInfo } from "constants/metaInfo";

const Presenter = ({ data }) => {
  const router = useRouter();
  const {
    data: {
      attributes: { content },
    },
  } = data;

  return (
    <section className={styles.presenter}>
      <MetaData
        {...metaInfo.find((el) => el.page === "presenter")}
        locale={router.locale}
      />
      <MenuOnPage place="presenter" locale={router.locale} />
      <ReactMarkdown>{content}</ReactMarkdown>
      <NavBottomPage locale={router.locale} />
    </section>
  );
};

export default Presenter;

export async function getServerSideProps(context) {
  const { locale } = context;
  const res = await api.getPresenter(locale);
  return { props: { data: res } };
}
