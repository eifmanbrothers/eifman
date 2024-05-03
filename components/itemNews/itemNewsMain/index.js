import styles from "./styles.module.scss";
import Link from "next/link";
import { NeededDate } from "components";
import { useRouter } from "next/router";

const ItemNewsMain = ({ data, id }) => {
  // console.log(data)
  const router = useRouter();
  const { date, title, publishedAt } = data;
  return (
    <li className={styles.itemNews}>
      <NeededDate
        date={date}
        time={publishedAt}
        locale={router.locale}
        format="LL"
        place="itemNewsMainPage"
      />
      <Link href={`/news/${id}`} className={styles.itemNews__link}>
        {title}
      </Link>
    </li>
  );
};

export default ItemNewsMain;
