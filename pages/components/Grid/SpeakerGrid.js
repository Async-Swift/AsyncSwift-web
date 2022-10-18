import Image from "next/image";

import styles from "../../../styles/modules/Speaker.module.css";
import SpeakerProfile from "./SpeakerProfile";

const SpeakerGrid = ({ sessionTitle, speakers }) => {
  return (
    <div className={styles.speakerInfoContainer}>
      <h3>{sessionTitle}</h3>
      <div className={styles.speakerGrid}>
        {speakers.map((speaker) => {
          // const noPicktureSpeakers = ["백수영", "홍길동", "주협", "김지홍"];

          // const speakerImagePath = noPicktureSpeakers.includes(
          //   speaker.speakerName
          // )
          //   ? "/default.svg"
          // : `/speaker/${speaker.speakerName}.svg`;
          const speakerImagePath = `/speaker/${speaker.speakerName}.svg`;
          return (
            <div className={styles.speakerProfileContainer}>
              <div className={styles.speakerProfileImageBox}>
                <Image
                  src={speakerImagePath}
                  alt="AsyncSwift Community Logo"
                  width={180}
                  height={180}
                />
              </div>
              <SpeakerProfile
                name={speaker.speakerName}
                company={speaker.speakerCompany}
              ></SpeakerProfile>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpeakerGrid;
