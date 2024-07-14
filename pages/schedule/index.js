import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiBileter";
import getThreeMonths from "helpers/getThreeMonth";
// import getTicketsListBileter from "helpers/getTicketsListBileter";
import { ListEventsBileter, navigations, MetaData } from "components";
import { metaInfo } from "constants/metaInfo";

const Schedule = ({ data }) => {
  const [allMonths, setAllMonths] = useState(
    Array.from(new Set(data.map((el) => el.PerfDate.slice(3, 10)))) || []
  );
  const [currentMonth, setCurrentMonth] = useState(allMonths[0] || "");
  const [list, setList] = useState([]);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    setList(data.filter((el) => el.PerfDate.slice(3, 10) === currentMonth));
  }, [currentMonth]);

  return (
    <section className={styles.schedule}>
      <MetaData
        {...metaInfo.find((el) => el.page === "schedule")}
        locale={router.locale}
      />
      <h1 className={styles.schedule__title}>{t("common:schedulePage")}</h1>
      <navigations.TicketsPage
        months={allMonths}
        changeMonth={(month) => setCurrentMonth(month)}
        currentMonth={currentMonth}
      />
      <ListEventsBileter list={list} locale={router.locale} />
    </section>
  );
};

export default Schedule;

export async function getServerSideProps() {
  const res = await api.getDataBileter(getThreeMonths());
  return {
    // props: { data: getTicketsListBileter(res) },
    props: { data: res },
  };
}
