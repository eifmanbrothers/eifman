import styles from "./styles.module.scss";
import api from "utils/ApiPrincipals";
import { MenuOnPage, MetaData, NavBottomPage } from "components";
import { useRouter } from "next/router";
import { metaInfo } from "constants/metaInfo";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "configs/variables";

const Partners = ({ data }) => {
  const router = useRouter();
  const { data: partners } = data;
  const typesPartners = [];
  partners.forEach((el) =>
    typesPartners.find((p) => p === el.attributes.type)
      ? null
      : typesPartners.push(el.attributes.type)
  );

  return (
    <section className={styles.partners}>
      <MetaData
        {...metaInfo.find((el) => el.page === "partners")}
        locale={router.locale}
      />
      <MenuOnPage place="partners" locale={router.locale} />
      {typesPartners.map((item) => {
        const arr = partners.filter((t) => t.attributes.type === item);
        return (
          <div key={item}>
            <h2 className={styles.partners__title}>{item}</h2>
            <ul className={styles.partners__list}>
              {arr.map((r) => (
                <li key={item.id}>
                  <Link href={r.attributes.link} target="_blank">
                    <Image
                      alt={r.attributes.name}
                      src={
                        r.attributes.logo.data?.attributes.url
                          ? API_URL + r.attributes.logo.data?.attributes.url
                          : "https://avatars.mds.yandex.net/i?id=fb285bcc6d73c642fc0090b4b7470ecafbc5556a-5331420-images-thumbs&n=13"
                      }
                      width={r.attributes.logo.data?.attributes.width || 200}
                      height={r.attributes.logo.data?.attributes.height || 200}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <NavBottomPage locale={router.locale} />
    </section>
  );
};

export default Partners;

export async function getServerSideProps(context) {
  const { locale } = context;
  const res = await api.getPartners(locale);
  return { props: { data: res } };
}
