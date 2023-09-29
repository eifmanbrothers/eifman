import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";

const Introduction = ({ data }) => {
  return (
    <div className={styles.introduction}>
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
};

export default Introduction;
