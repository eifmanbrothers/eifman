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
  // console.log(list);
  return (
    <>
      <ul className={styles.cards}>
        {/* {list.length === 0 && <p>нет событий</p>} */}
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
