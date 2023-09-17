import styles from "./styles.module.scss";
import api from "utils/ApiEnsemble";
import { ListMembers, Line, MetaData } from "components";
import { useRouter } from "next/router";
import { metaInfo } from "constants/metaInfo";

const Ensemble = ({ data }) => {
  const router = useRouter();
  // console.log(data);
  const arrPositions = data.reduce((arr, el) => {
    const pos = el.attributes.position.data?.attributes.position;
    if (!arr.includes(pos)) arr.push(pos);
    return arr;
  }, []);
  // console.log(1, arrPositions)
  return (
    <>
      <MetaData
        {...metaInfo.find((el) => el.page === "ensemble")}
        locale={router.locale}
      />
      <Line />
      <section className={styles.ensemble}>
        {arrPositions.map((pos) => (
          <ListMembers
            locale={router.locale}
            key={pos}
            position={pos}
            list={data.filter(
              (el) => el.attributes.position.data?.attributes.position === pos
            )}
          />
        ))}
      </section>
    </>
  );
};

export async function getServerSideProps({ locale }) {
  const res = await api.getEnsembles(locale);
  return { props: { data: res.data } };
}

export default Ensemble;
