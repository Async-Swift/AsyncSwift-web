import Description from "./Description";
import Speaker from "./Speaker";
// import AppInfo from "./AppInfo";
import Sponsor from "./Sponsor";
import Footer from "../Footer/Footer";

import styles from "../../styles/modules/Main.module.css";
import Conference from "./Conference";

const Main = () => {
  return (
    <main className={styles.main}>
      <Description></Description>
      <Conference></Conference>
      <Speaker></Speaker>
      <Sponsor></Sponsor>
      {/** TODO
       * <AppInfo></AppInfo>
       * <Sponser></Sponser>
       */}
      <Footer></Footer>
    </main>
  );
};

export default Main;
