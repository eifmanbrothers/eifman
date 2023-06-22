import styles from "./styles.module.scss";
// import { useState } from "react";
import { card } from "components";
import getCoverForEvent from "helpers/getCoversForEvent";

const Cards = ({ list, locale, covers = [] }) => {
  return (
    <ul className={styles.cards}>
      {list.map((c) => {
        return c.id ? (
          <card.TicketsPageLocal key={c.id} {...c} locale={locale} />
        ) : (
          <card.TicketsPageBileter
            key={c.IdPerformance}
            {...c}
            locale={locale}
          />
        );
      })}
    </ul>
  );
};

export default Cards;
