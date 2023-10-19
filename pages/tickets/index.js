import styles from "./styles.module.scss";
import cn from "classnames";
import { useState, useEffect } from "react";
import "moment/locale/ru";
import { useRouter } from "next/router";
import moment from "moment";
import useTranslation from "next-translate/useTranslation";
import api from "utils/ApiBileter";
import { list, MetaData } from "components";
import { metaInfo } from "constants/metaInfo";
import getTicketsList from "helpers/getTicketsList";
import getCoversForEvent from "helpers/getCoversForEvent";
import getNextYear from "helpers/getNextYear";
import getMonthForBileter from "helpers/getMonthForBileter";
import { FadeLoader } from "react-spinners";

const Tickets = ({ allData }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [data, setDate] = useState(allData);
  const [countMonth, setCountMonth] = useState(0);
  const [isReq, setIsReq] = useState(true);
  // console.log(data);

  const changeMonth = (evt) => {
    if (evt.target.name === "inc") {
      setIsReq(true);
      setCountMonth(countMonth + 1);
    }
    if (evt.target.name === "dec") {
      // console.log(countMonth);
      setIsReq(true);
      countMonth ? setCountMonth(countMonth - 1) : null;
    }
    // console.log(countMonth);
  };
  const date = moment(new Date());
  const month = date
    .add(countMonth, "month")
    .locale(router.locale)
    .format("MMMM YYYY");
  // console.log(month);
  useEffect(() => {
    api
      .getTickets(router.locale, getMonthForBileter(countMonth))
      .then((res) => {
        setDate(getCoversForEvent(getTicketsList(res), res[2].data));
        setIsReq(false);
      })
      .catch((error) => console.log(error));
  }, [countMonth, router.locale]);

  return (
    <section className={styles.tickets}>
      <MetaData
        {...metaInfo.find((el) => el.page === "tickets")}
        locale={router.locale}
      />
      <h3>{t("tickets:titlePage")}</h3>
      <div className={styles.tickets__changeMonth}>
        <button
          disabled={!countMonth}
          name="dec"
          className={cn(styles.tickets__btn, {
            [styles.tickets__btn_disabled]: !countMonth,
          })}
          onClick={(evt) => changeMonth(evt)}
        />
        <h4 className={styles.tickets__month}>
          {month.replace(month[0], month[0].toUpperCase())}
        </h4>
        <button
          className={cn(styles.tickets__btn, styles.tickets__btn_right)}
          name="inc"
          onClick={(evt) => changeMonth(evt)}
        />
      </div>
      <div className={styles.tickets__wrapper}>
        {isReq && (
          <div className={styles.target__spinner}>
            <FadeLoader color="#fff" />
          </div>
        )}
        <list.Cards list={data} locale={router.locale} />
      </div>
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
