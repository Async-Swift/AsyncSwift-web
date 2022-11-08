import Description from "./Description";
import Speaker from "./Speaker";
// import AppInfo from "./AppInfo";
import Sponsor from "./Sponsor";
import Footer from "../Footer/Footer";

import styles from "../../styles/modules/Main.module.css";
import Conference from "./Conference";
import Organizer from "./Organizar";
import TimeLine from "./TimeLine";

const Main = () => {
  return (
    <main className={styles.main}>
      <Description></Description>
      <Conference></Conference>
      <TimeLine></TimeLine>
      <Speaker></Speaker>
      <Sponsor></Sponsor>
      <Organizer></Organizer>
      <Footer></Footer>
    </main>
  );
};

export default Main;
