import styles from "./styles.module.scss";
import "moment/locale/ru";

const DateEvent = ({ date, locale }) => {
  const month = date.locale(locale).format("MMMM");
  const day = date.locale(locale).format("dddd");
  return (
    <div className={styles.dateEvent}>
      <p className={styles.dateEvent__date}>{date.date()}</p>
      <p className={styles.dateEvent__month}>
        {month.replace(month[0], month[0].toUpperCase())}
      </p>
      <p className={styles.dateEvent__day}>
        {day.replace(day[0], day[0].toUpperCase())}
      </p>
    </div>
  );
};

export default DateEvent;
