import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiBileter";
import apiCover from "utils/ApiCover";
import threeMonth from "helpers/getThreeMonth";
import {
  navigations,
  ListEventsBileter,
  list,
  eventFullInfo,
} from "components";
import getTicketsList from "helpers/getTicketsList";
import getCoversForEvent from "helpers/getCoversForEvent";

const Tickets = ({ allData }) => {
  const [covers, setCovers] = useState([]);

  const router = useRouter();

  const { t } = useTranslation();

  return (
    <section className={styles.tickets}>
      <h3>{t("tickets:titlePage")}</h3>
      <h4 className={styles.tickets__month}>
        {/* {str.replace(str[0], str[0].toUpperCase())} */}
      </h4>
      <list.Cards list={allData} locale={router.locale} />
      {/* <list.Cards list={getTicketsList(allData)} covers={covers} /> */}
    </section>
  );
};

export async function getServerSideProps({ locale }) {
  console.log("fetch");
  console.log(locale);
  // const res = await api.getDataBileter(threeMonth());
  const res = await api.getTickets(locale);

  return {
    props: { allData: getCoversForEvent(getTicketsList(res), res[2].data) },
  };
}

export default Tickets;
