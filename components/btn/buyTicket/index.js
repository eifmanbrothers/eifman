import styles from "./styles.module.scss";
import cn from "classnames";

const BuyTicket = ({ isTicket, btnName, id }) => {
  return (
    <button
      disabled={!isTicket}
      data-performance_id={id}
      style={{ cursor: !isTicket ? "default" : "pointer" }}
      className={cn(styles.buyTicket, "wb-button-root", {
        [styles.buyTicket_blocked]: !isTicket,
      })}
    >
      {btnName}
    </button>
  );
};

export default BuyTicket;
