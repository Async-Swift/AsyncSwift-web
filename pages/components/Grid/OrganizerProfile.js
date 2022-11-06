import styles from "../../../styles/modules/Organizer.module.css";

const OrganizerProfile = ({ name, description }) => {
  return (
    <div className={styles.organizerProfile}>
      <div className={styles.organizerName}>{name}</div>
      <div className={styles.organizerCompany}>{description}</div>
    </div>
  );
};

export default OrganizerProfile;
