import styles from "./styles.module.scss";
import { useState } from "react";
import { card, eventFullInfo } from "components";
import getCoverForEvent from "helpers/getCoversForEvent";

const Cards = ({ list, locale, covers = [] }) => {
  const [buyEvent, setBuyEvent] = useState({});
  const clickHandler = (c) => setBuyEvent(c);
  const closeHandler = () => {
    setBuyEvent({});
    console.log("close");
  };

  list.sort((a, b) => {
    const aDate = Number(
      a.attributes?.PerfDate.slice(0, 2) || a.PerfDate.slice(0, 2)
    );
    const bDate = Number(
      b.attributes?.PerfDate.slice(0, 2) || b.PerfDate.slice(0, 2)
    );

    if (aDate < bDate) {
      return -1;
    }
    if (aDate > bDate) {
      return 1;
    }
  });

  return (
    <>
      <ul className={styles.cards}>
        {list.length === 0 && (
          <p className={styles.cards__no}>
            {locale === "ru"
              ? "Спектакли не запланированы"
              : "No performances scheduled"}
          </p>
        )}
        {list.map((c) => {
          return c.id ? (
            <card.TicketsPageLocal
              key={c.id}
              {...c}
              locale={locale}
              clickHandler={() => clickHandler(c)}
            />
          ) : (
            <card.TicketsPageBileter
              key={c.IdPerformance}
              {...c}
              locale={locale}
              clickHandler={() => clickHandler(c)}
            />
          );
        })}
      </ul>
      <eventFullInfo.Overlay
        locale={locale}
        {...buyEvent}
        closeHandler={closeHandler}
      />
    </>
  );
};

export default Cards;
