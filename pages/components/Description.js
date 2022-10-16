import Link from "next/link";

import styles from "../../styles/modules/Description.module.css";

const Description = () => {
  return (
    <section className={styles.description}>
      <main>
        <h1>SyncSwift 2022 Conference</h1>
        <div>
          <h2>11월 12일 (토)</h2>
          <h2 className={styles.location}>
            <div>체인지업 그라운드 포항</div>
          </h2>
        </div>
      </main>
    </section>
  );
};

export default Description;
