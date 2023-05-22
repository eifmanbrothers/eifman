import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiBileter";
import threeMonth from "helpers/getThreeMonth";
import { navigations, ListEventsBileter } from "components";

const Tickets = ({ data }) => {
  const allMonth = Object.keys(data);
  const [currentList, setCurrentList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(allMonth[0]);
  const { t } = useTranslation();

  useEffect(() => {
    // console.log('effect')
    setCurrentList(Object.entries(data[currentMonth]));
  }, [currentMonth]);
  // console.log(currentMonth);
  // const arr = Object.entries(data[currentMonth])
  // console.log(1, arr);
  return (
    <section className={styles.tickets}>
      <h3>{t("tickets:titlePage")}</h3>
      <navigations.TicketsPage
        months={Object.keys(data)}
        changeMonth={(month) => setCurrentMonth(month)}
      />
      <ListEventsBileter list={currentList} />
    </section>
  );
};

export async function getServerSideProps() {
  console.log("fetch")
  const res = await api.getData(threeMonth());
  return { props: { data: res } };
}

export default Tickets;
