import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";

const DateEvent = ({ date, locale }) => {
  const month = date.locale(locale).format("MMMM");
  const day = date.locale(locale).format("dddd");
  return (
    <div className={styles.dateEvent}>
      <p>{date.date()}</p>
      <p>{month.replace(month[0], month[0].toUpperCase())}</p>
      <p>{day.replace(day[0], day[0].toUpperCase())}</p>
    </div>
  );
};

export default DateEvent;
