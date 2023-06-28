import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
import { Main, MetaData } from "components";
import { metaInfo } from "constants/metaInfo";
import apiNews from "utils/ApiNews";
import { useRouter } from "next/router";

const Home = ({ data }) => {
  const { t } = useTranslation();
  const router = useRouter();
  // console.log(data)
  return (
    <div className={styles.container}>
      <MetaData
        {...metaInfo.find((el) => el.page === "main")}
        locale={router.locale}
      />
      <Main listNewsArr={data} />
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  const res = await apiNews.getNewsPart(locale);

  return { props: { data: res.data } };
}

export default Home;
