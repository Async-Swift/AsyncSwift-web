import HeadMeta from "./components/HeadMeta";
import Header from "./components/Header";
import Onboarding from "./Onboarding/Onboarding";

import style from "../styles/modules/BackgroundImage.module.css";
import Main from "./Main/Main";

const Home = () => {
  return (
    <>
      <HeadMeta />

      <main>
        <Header></Header>
        <Onboarding></Onboarding>
        <Main></Main>
      </main>
    </>
  );
};

export default Home;
