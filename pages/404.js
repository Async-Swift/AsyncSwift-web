import HeadMeta from "./components/HeadMeta";
import styles from "../styles/modules/error.module.css";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <HeadMeta />
      <h1>404 | 페이지가 없습니다 😂</h1>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Custom404;
