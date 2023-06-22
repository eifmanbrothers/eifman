import styles from "./styles.module.scss";
import moment from "moment";
import cn from "classnames";
import getEventInfoBileter from "helpers/getEventInfoBileter";
import getNameEventBileter from "helpers/getNameEventBileter";
import areasSpb from "configs/areasSpb";
import namesSpb from "configs/namesSpb";
// import "moment/locale/ru";
// import "moment/locale/en";
import { NeededDate, addressEvent } from "components";

const Card = (props) => {
  const {
    IdPerformance,
    HasTickets,
    BuildingName,
    Address: address,
    Name: name,
    PerfDate,
    PushkinCard,
    locale,
    images,
  } = props;

  const regex = /\./g;
  const date =
    PerfDate?.length < 20
      ? moment(PerfDate?.replace(regex, "-"), "DD-MM-YYYY hh:mm:ss")
      : moment(PerfDate);
  const time = date.format("HH:mm");

  const currentTheatre = getEventInfoBileter(address, areasSpb, locale);
  const isLocalData = typeof currentTheatre === "string";
  //   console.log(isLocalData);
  // for local data
  const {
    // performance: { data: { attributes = {} } = {} } = {},
    hall = {},
    Name: localName,
  } = props;

  const currentName =
    getNameEventBileter(name, namesSpb, locale) ||
    localName ||
    props?.performance?.data?.attributes?.name;

  return (
    <div className={styles.card}>
      <h4
        className={cn(styles.card__title, {
          [styles.card__title_longName]: currentName?.length > 40,
        })}
      >
        {currentName}
      </h4>
      <div className={styles.card__date}>
        <div>
          <time
            dateTime={moment(date).locale(locale).format("LT")}
            className={styles.card__month}
          >
            {moment(date).locale(locale).format("Do MMMM,")}
          </time>
          <p className={styles.card__day}>
            {moment(date).locale(locale).format("dddd")}
          </p>
        </div>
        <time dateTime={date.format()} className={styles.card__time}>
          {time}
        </time>
      </div>
      <addressEvent.Card
        country={
          isLocalData
            ? hall?.country?.data?.attributes?.name
            : currentTheatre?.country
        }
        city={
          isLocalData
            ? hall?.city?.data?.attributes?.name
            : currentTheatre?.city
        }
        theatre={
          isLocalData
            ? hall?.theatre?.data?.attributes?.name
            : currentTheatre?.theatre
        }
      />
    </div>
  );
};

export default Card;
