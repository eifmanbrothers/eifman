import styles from "./styles.module.scss";

const Video = ({ data }) => {
  // console.log(data);
  return (
    <div className={styles.video}>
      <iframe src={data} className={styles.video__content}></iframe>
    </div>
  );
};

export default Video;
