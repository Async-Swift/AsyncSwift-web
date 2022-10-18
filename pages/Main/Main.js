import Description from "./Description";
import Speaker from "./Speaker";
import AppInfo from "./AppInfo";
import Sponser from "./Sponser";
import Footer from "../Footer/Footer";

import styles from "../../styles/modules/Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Description></Description>
      <Speaker></Speaker>
      {/* <AppInfo></AppInfo> */}
      {/* <Sponser></Sponser> */}
      <Footer></Footer>
    </main>
  );
};

export default Main;
