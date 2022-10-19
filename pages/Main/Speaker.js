import styles from "../../styles/modules/Speaker.module.css";

import SpeakerGrid from "../components/Grid/SpeakerGrid";

const Speaker = () => {
  const morningAfterSpeakers = [
    {
      speakerName: "강훈",
      speakerCompany: "당근마켓",
    },
    {
      speakerName: "박건호",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
    },
    {
      speakerName: "김찬우",
      speakerCompany: "원티드랩",
    },
    {
      speakerName: "허성진",
      speakerCompany: "인포마이닝",
    },
    {
      speakerName: "김지홍",
      speakerCompany: "디자인스펙트럼",
    },
    {
      speakerName: "주협",
      speakerCompany: "코드잇",
    },
    {
      speakerName: "류성두",
      speakerCompany: "뱅크샐러드",
    },
    {
      speakerName: "문상봉",
      speakerCompany: "플리토",
    },
    {
      speakerName: "김윤재",
      speakerCompany: "LINE Plus",
    },
    {
      speakerName: "홍길동",
      speakerCompany: "",
    },
  ];

  const talkSpeakers = [
    {
      speakerName: "백수영",
      speakerCompany: `Apple Developer Academy
@ POSTECH / IT manager`,
    },
    {
      speakerName: "이민아 외 4인",
      speakerCompany: `Apple Developer Academy
@ POSTECH / Mentor`,
    },
    {
      speakerName: "이현호",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentor`,
    },
    {
      speakerName: "박종호",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
    },
    {
      speakerName: "신동준",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
    },
    {
      speakerName: "이준영",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
    },
    {
      speakerName: "이가은",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
    },
    {
      speakerName: "김인섭",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
    },
    {
      speakerName: "이명환",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
    },
  ];

  return (
    <section className={styles.speakerContainer}>
      <h3>Speaker</h3>
      <div className={styles.speakerGridContainer}>
        <SpeakerGrid
          sessionTitle="Morning / Afternoon session"
          speakers={morningAfterSpeakers}
        ></SpeakerGrid>
        <SpeakerGrid
          sessionTitle="Talk session"
          speakers={talkSpeakers}
        ></SpeakerGrid>
      </div>
    </section>
  );
};

export default Speaker;
