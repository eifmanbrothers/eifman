import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";

const Synopsis = ({ data }) => {
  // console.log(data);
  return (
    <div className={styles.synopsis}>
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
};

export default Synopsis;
