import styles from "../../../../styles/modules/Speaker.module.css";

import Image from "next/image";

const SpeakerCard = ({ type, sessionTitle, sessionDescription, speakerName, speakerCompany, speakerDescription }) => {
  const speakerImageUrl = `/speaker/${speakerName}.png`;

  return (
    <div className={styles.speakerSessionContainer}>
      <div className={type === "Main" ? styles.mainIntroTitle : styles.talkIntroTitle}>
        <h4>{`${type} Session`}</h4>
      </div>
      <div className={styles.sessionContainer}>
        <h5>{sessionTitle}</h5>
        <div>{sessionDescription}</div>
      </div>
      <div className={styles.speakerInfo}>
        <div className={styles.speakerProfileImg}>
          <Image width={100} height={100} src={speakerImageUrl} alt={`${speakerName}연사자님 사진`} />
        </div>
        <div className={styles.speakerIntroduceContainer}>
          <div>{speakerName === "이준영" ? "최원혁 / 이준영" : speakerName}</div>
          <div>{speakerCompany}</div>
          <div>{speakerDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
