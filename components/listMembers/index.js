import styles from "./styles.module.scss";
import ItemMember from "components/itemMember";

const ListMembers = ({ list = [], position, locale }) => {
  list.sort((a, b) => (a.attributes.order <= b.attributes.order ? -1 : 1));

  return (
    <>
      <h4 className={styles.listMembers__title}>{position}</h4>
      <ul className={styles.listMembers}>
        {list.map((el) => (
          <ItemMember
            key={el.id}
            member={el}
            position={position}
            locale={locale}
          />
        ))}
      </ul>
    </>
  );
};

export default ListMembers;
