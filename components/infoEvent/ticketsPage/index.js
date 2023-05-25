import styles from "./styles.module.scss";

const TicketsPage = ({ name, buildingName }) => {
  return (
    <div className={styles.iTicketsPage}>
      <p className={styles.iTicketsPage__name}>{name}</p>
      <p className={styles.iTicketsPage__building}>{buildingName}</p>
    </div>
  );
};

export default TicketsPage;
