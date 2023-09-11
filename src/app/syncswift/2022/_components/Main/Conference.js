import styles from "/styles/modules/Conference.module.css";

const Conference = () => {
  return (
    <section className={styles.conferenceContainer}>
      <h3>Conference</h3>
      <div className={styles.open}>
        <h4>Date and Time</h4>
        <div>
          <div>2022년 11월 12일 토요일</div>
          <div>10:00~18:00</div>
        </div>
      </div>
      <div className={styles.location}>
        <h4>Location</h4>
        <div>
          <div>포항공과대학교</div>
          <div>체인지업그라운드 LF</div>
          <div>컨퍼런스홀</div>
        </div>
      </div>
    </section>
  );
};

export default Conference;
