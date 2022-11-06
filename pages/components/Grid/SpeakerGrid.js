import styles from "../../../styles/modules/Speaker.module.css";

const SpeakerProfile = ({ name, company }) => {
  return (
    <div className={styles.speakerProfile}>
      <div className={styles.speakerName}>{name}</div>
      <div className={styles.speakerCompany}>{company}</div>
    </div>
  );
};

export default SpeakerProfile;
