import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";

const Resume = ({ data }) => {
  return (
    <div className={styles.resume}>
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
};

export default Resume;
