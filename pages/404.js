import Header from './components/Header'

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <HeadMeta />
      <h1>404 | 페이지가 없습니다 😂</h1>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Custom404;
