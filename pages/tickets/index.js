import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiBileter";
import threeMonth from "helpers/getThreeMonth";
import { navigations, ListEventsBileter } from "components";

const Tickets = ({ data }) => {
  const router = useRouter();
  const allMonth = Object.keys(data);
  const [currentList, setCurrentList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(allMonth[0]);
  const { t } = useTranslation();

  const month = moment(currentMonth);
  const str = month.locale(router.locale).format("MMMM");

  useEffect(() => {
    setCurrentList(Object.entries(data[currentMonth]));
  }, [currentMonth]);

  return (
    <section className={styles.tickets}>
      <h3>{t("tickets:titlePage")}</h3>
      <navigations.TicketsPage
        months={Object.keys(data)}
        changeMonth={(month) => setCurrentMonth(month)}
        currentMonth={currentMonth}
      />
      <h4 className={styles.tickets__month}>
        {str.replace(str[0], str[0].toUpperCase())}
      </h4>
      <ListEventsBileter list={currentList} locale={router.locale} />
    </section>
  );
};

export async function getServerSideProps() {
  // console.log("fetch");
  const res = await api.getData(threeMonth());
  return { props: { data: res } };
}

export default Tickets;
