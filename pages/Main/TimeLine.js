import styles from "../../styles/modules/TimeLine.module.css";

import Image from "next/image";

const TimeLine = () => {
  const speakerImageUrl = `/timetable/TT.png`;
  const speakerMobileImageUrl = `/timetable/TTmobile.png`;

  return (
    <div className={styles.timeLineContainer}>
      <h3>Time Table</h3>
      <div className={styles.imageBox}>
        <Image
          layout="fill"
          className={styles.timeLineImage}
          alt="Sync Swift conference 타임라인 입니다."
          src={speakerImageUrl}
        />

        <Image
          layout="fill"
          className={styles.timeLineImageMobile}
          alt="Sync Swift conference 타임라인 입니다."
          src={speakerMobileImageUrl}
        />
      </div>
    </div>
  );
};

export default TimeLine;
