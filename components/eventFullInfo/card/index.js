import styles from "./styles.module.scss";
import cn from "classnames";
import getEventInfoBileter from "helpers/getEventInfoBileter";
import getNameEventBileter from "helpers/getNameEventBileter";
import areasSpb from "configs/areasSpb";
import namesSpb from "configs/namesSpb";
import { addressEvent, eventTime } from "components";

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
  //   console.log(props);
  const currentTheatre = getEventInfoBileter(address, areasSpb, locale);
  const isLocalData = typeof currentTheatre === "string";
  // for local data
  const { hall = {}, Name: localName } = props;

  const currentName =
    getNameEventBileter(name, namesSpb, locale) ||
    localName ||
    props?.performance?.data?.attributes?.name;

  return (
    <div className={styles.card}>
      <h4
        className={cn(
          styles.card__title,
          { [styles.card__title_longName]: currentName?.length > 40 },
          { [styles.card__title_longNameMore]: currentName?.length > 90 }
        )}
      >
        {currentName}
      </h4>
      <eventTime.CardTicketsPage data={PerfDate} locale={locale} />
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
