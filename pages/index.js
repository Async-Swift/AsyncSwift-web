import HeadMeta from "./components/HeadMeta";
import Header from "./components/Header";

import style from "../styles/modules/BackgroundImage.module.css";
import Main from "./Main/Main";

const Home = () => {
  return (
    <>
      <HeadMeta />

      <div>
        <Header></Header>
        <Main></Main>
      </div>
    </>
  );
};

export default Home;
