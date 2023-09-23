import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import data from "constants/enterprises";
import Image from "next/image";
import Link from "next/link";
import { MetaData } from "components";
import { metaInfo } from "constants/metaInfo";

const Enterprises = () => {
  const router = useRouter();

  return (
    <section className={styles.enterprises}>
      <MetaData
        {...metaInfo.find((el) => el.page === "enterprises")}
        locale={router.locale}
      />
      <h1>{router.locale === "ru" ? "Проекты" : "Projects"}</h1>
      <ul className={styles.enterprises__list}>
        {data.map((item) => (
          <li
            className={styles.enterprises__item}
            key={item.title[router.locale]}
          >
            <Link href={item.href} className={styles.enterprises__link}>
              <div className={styles.enterprises__imgWrapper}>
                <Image
                  alt={item.title[router.locale]}
                  src={item.image || item.images[0]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className={styles.enterprises__itemTitle}>
                {item.title[router.locale]}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Enterprises;
