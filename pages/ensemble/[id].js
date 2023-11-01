import styles from "./styles.module.scss";
import api from "utils/ApiEnsemble";
import useTranslation from "next-translate/useTranslation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { myCarousel, Line, navigations, MetaData, errors } from "components";
import { metaInfo } from "constants/metaInfo";
import { useRouter } from "next/router";
import { API_URL } from "configs/variables";

const Member = ({ data }) => {
  const { t } = useTranslation();
  const router = useRouter();
  if (!data) {
    return <errors.EnsemblePage />;
  }
  const {
    attributes: {
      images: { data: arrImg },
    },
  } = data;

  const firstData = data.attributes;
  const secondData = data.attributes.localizations.data[0].attributes;
  const currentData =
    data.reqLocation === firstData.locale ? firstData : secondData;

  const fullName = currentData.secondName + " " + currentData.firstName;
  const currentMetaData = () =>
    metaInfo.find((el) => el.page === "ensembleMember");

  return (
    <>
      <MetaData
        title={currentMetaData().title[router.locale] + " " + fullName}
        keywords={currentMetaData().keywords[router.locale]}
        description={currentMetaData().description[router.locale]}
        locale={router.locale}
      />
      <Line />
      <section className={styles.member}>
        <navigations.MemberPage nameMember={fullName} />
        <div className={styles.member__content}>
          <Image
            priority={true}
            src={API_URL + firstData.avatar.data.attributes.url}
            alt={`${t("common:photoMember")} ${fullName}`}
            width={firstData.avatar.data.attributes.width}
            height={firstData.avatar.data.attributes.height}
            className={styles.member__avatar}
          />
          <div className={styles.member__description}>
            <ReactMarkdown>{currentData.description}</ReactMarkdown>
          </div>
        </div>
        <myCarousel.React arrImg={arrImg} />
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const {
    params: { id },
    locale,
  } = context;
  const res = await api.getMember(id);
  if (res.data) {
    res.data.reqLocation = locale;
    return { props: { data: res.data } };
  }
  return { props: { data: res.data } };
}

export default Member;
