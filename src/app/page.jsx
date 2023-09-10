import Main from "./Main/Main";
import Onboarding from "./Onboarding/Onboarding";
import Header from "./components/Header";

export default function Page({}) {
  return (
    <main>
      <Header></Header>
      <Onboarding></Onboarding>
      <Main></Main>
    </main>
  );
}
