import Image from "next/image";

import styles from "../../../styles/modules/Speaker.module.css";
import SpeakerProfile from "./SpeakerProfile";

const SpeakerGrid = ({ sessionTitle, speakers }) => {
  console.log(speakers);
  return (
    <div className={styles.speakerInfoContainer}>
      <h3>{sessionTitle}</h3>
      <div className={styles.speakerGrid}>
        {speakers &&
          speakers.map((speaker, index) => {
            const speakerImagePath = `/speaker/${speaker.speakerName}.png`;
            return (
              <div key={index} className={styles.speakerProfileContainer}>
                <div className={styles.speakerProfileImageBox}>
                  <Image
                    src={speakerImagePath}
                    alt="AsyncSwift Community Logo"
                    layout="fill"
                    priority
                  />
                </div>
                <SpeakerProfile
                  key={index}
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
