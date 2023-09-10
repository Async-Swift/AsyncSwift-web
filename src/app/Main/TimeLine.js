import styles from "/styles/modules/TimeLine.module.css";

import Image from "next/image";

const TimeLine = () => {
  const speakerImageUrl = `/timetable/TT.png`;
  const speakerMobileImageUrl = `/timetable/TTM.png`;

  return (
    <div className={styles.timeLineContainer}>
      <h3>Time Table</h3>
      <div className={styles.imageBox}>
        <Image
          className={styles.timeLineImage}
          alt="Sync Swift conference 타임라인 입니다."
          src={speakerImageUrl}
          fill
        />

        <Image
          className={styles.timeLineImageMobile}
          alt="Sync Swift conference 타임라인 입니다."
          src={speakerMobileImageUrl}
          fill
        />
      </div>
    </div>
  );
};

export default TimeLine;
