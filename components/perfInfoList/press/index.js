import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";

const Press = ({ data }) => {
  // console.log(data);
  return (
    <div className={styles.press}>
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
};

export default Press;
