import Description from "./Description";
import Speaker from "./Speaker";
import AppInfo from "./AppInfo";
import Sponser from "./Sponser";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <main>
      <Description></Description>
      <Speaker></Speaker>
      {/* <AppInfo></AppInfo> */}
      <Sponser></Sponser>
      <Footer></Footer>
    </main>
  );
};

export default Main;
