import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { NeededDate } from "components";
import { useRouter } from "next/router";
import { API_URL } from "configs/variables";

const ItemNewsPage = ({ data, id }) => {
  const router = useRouter();
  const {
    date,
    title,
    news,
    publishedAt,
    image: {
      data: {
        attributes: {
          url,
          formats: { thumbnail },
        },
      },
    },
  } = data;
  // console.log(publishedAt)
  return (
    <li className={styles.itemNews}>
      <div className={styles.itemNews__imgWrapper}>
        <Image
          // src={API_URL + thumbnail.url}
          src={API_URL + url}
          fill
          sizes="(max-width: 1920px) 100vw,
          (max-width: 2200px) 50vw"
          alt="alt text needs here"
          quality={75}
          className={styles.itemNews__image}
        />
      </div>
      <div className={styles.itemNews__content}>
        <Link href={`/news/${id}`} className={styles.itemNews__link}>
          {title}
        </Link>
        <NeededDate date={date} locale={router.locale} time={publishedAt} />
        <div className={styles.newsItem__description}>
          <p className={styles.itemNews__description}>
            {news.slice(0, 100)}...
          </p>
        </div>
      </div>
    </li>
  );
};

export default ItemNewsPage;
