import styles from "./styles.module.scss";
import "moment/locale/ru";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiBileter";
import { list, MetaData } from "components";
import { metaInfo } from "constants/metaInfo";
import getTicketsList from "helpers/getTicketsList";
import getCoversForEvent from "helpers/getCoversForEvent";
import getNextYear from "helpers/getNextYear";
import getMonthForBileter from "helpers/getMonthForBileter";

const Tickets = ({ allData }) => {
  const router = useRouter();
  const { t } = useTranslation();
  console.log(allData);

  return (
    <section className={styles.tickets}>
      <MetaData
        {...metaInfo.find((el) => el.page === "tickets")}
        locale={router.locale}
      />
      <h3>{t("tickets:titlePage")}</h3>
      <h4 className={styles.tickets__month}>
        {/* {str.replace(str[0], str[0].toUpperCase())} */}
      </h4>
      <list.Cards list={allData} locale={router.locale} />
    </section>
  );
};

export async function getServerSideProps({ locale }) {
  // console.log(locale);
  const res = await api.getTickets(locale, getMonthForBileter());
  // const res = await api.getTickets(locale, getNextYear());
  // console.log(nextYear);
  return {
    props: { allData: getCoversForEvent(getTicketsList(res), res[2].data) },
  };
}

export default Tickets;
