import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiBileter";
import threeMonth from "helpers/getThreeMonth";
import { navigations, ListEventsBileter } from "components";

const Tickets = ({ data }) => {
  const [currentList, setCurrentList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");
  const { t } = useTranslation();
  const allMonth = Object.keys(data);

  useEffect(() => {
    setCurrentMonth(allMonth[0]);
  }, []);
  useEffect(() => {
    setCurrentList([]);
  }, [currentMonth]);
  // console.log(currentMonth);
  // console.log(currentList);
  return (
    <section className={styles.tickets}>
      <h3>{t("tickets:titlePage")}</h3>
      <navigations.TicketsPage
        months={Object.keys(data)}
        changeMonth={(month) => setCurrentMonth(month)}
      />
      {/* <ListEventsBileter list={data[currentMonth]} /> */}
    </section>
  );
};

export async function getServerSideProps() {
  const res = await api.getData(threeMonth());
  return { props: { data: res } };
}

export default Tickets;
