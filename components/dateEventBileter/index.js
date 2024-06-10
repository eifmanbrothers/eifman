import styles from "./styles.module.scss";
// import moment from "moment";
// import "moment/locale/ru";

const DateEventBileter = ({ date, locale, time }) => {
  //   const month = date.locale(locale).format("MMMM");
  const day = date.locale(locale).format("dd");
  return (
    <div className={styles.dateEventBileter}>
      <p className={styles.dateEventBileter__date}>{date.date()}</p>
      <p className={styles.dateEventBileter__day}>
        {day.toUpperCase()}
        <time
          className={styles.dateEventBileter__time}
          dateTime={date.format()}
        >
          {time}
        </time>
      </p>
    </div>
  );
};

export default DateEventBileter;
