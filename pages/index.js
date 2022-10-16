
import HeadMeta from './components/HeadMeta';
import Header from "./components/Header";
import Description from "./components/Description";
import Info from "./components/Info";

import style from "../styles/modules/BackgroundImage.module.css";

const Home = () => {
  return (
    <>
      <HeadMeta />

      <main className={style.backgroundImage}>
        <Header></Header>
        <Description></Description>
        <Info></Info>
      </main>
    </>
  );
};

export default Home;
