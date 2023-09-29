import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Gallery, nextEvents, Nav, MetaData } from "components";
import { metaInfo } from "constants/metaInfo";

const Performances = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "performances")}
        locale={router.locale}
      />
      {/* <Line />
      <h3 className={styles.performances__title}>{t('performances:titlePage')}</h3> */}
      <Gallery />
      <section className={styles.performances}>
        <Nav />
        {/* <nextEvents.Repertoire /> */}
      </section>
    </>
  );
};

export default Performances;
