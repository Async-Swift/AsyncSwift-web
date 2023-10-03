import Image from "next/image";
import ConferenceMapImage from "/public/map.png";
import AsyncLogo from "/public/AsyncLogo.png";
import { Title } from "../../../components";
import { ASYNCSWIFT } from "../../../utils/consts";

const Description = () => {
  return (
    <section>
      <div className="text-white text-5xl font-extrabold font-['Montserrat']">
        From TestFlight to App Store
      </div>
      <div className="text-center text-white text-2xl font-bold font-['Pretendard'] leading-10">
        멋진 앱을 만들기 위한 앱메이커들의 열정
      </div>
      <div className="w-96 text-zinc-400 text-lg font-bold font-['Apple SD Gothic Neo'] leading-7">
        우리는 종종 App Store에 배포되어 있는 성공한 앱들은 처음부터
        성공적이었을 것이라고 오해합니다. 하지만, 화려하고 뛰어난 성과를 내는
        앱도 모두 다 TestFlight로부터 시작합니다.
        <br />
        App Store에 앱을 릴리즈하기 전에 TestFlight에서 앱을 테스트하고 의미
        있는 피드백을 얻는 과정을 거쳐야 유저들에게 제대로 전달될 수 있습니다.
        <br />
        어쩌면 우리는 멋진 결과만 강조되고, 중간 과정에서 있었던 지지부진한
        노력에 대해서는 말하기를 꺼리고 있지는 않은가요? <br />
        이번 SyncSwift2023을 통해 결과물로써의 앱이 아니라, 앱을 만드는
        중간과정에서의 우리들의 열정과 때로는 실수와, 그리고 배운 점에 대하여
        이야기해보아요.
      </div>
    </section>
  );
};

const Program = () => {
  return <></>;
};

const Speaker = () => {
  const temp = Array(8).fill(1);
  return (
    <section className="flex flex-col justify-center">
      <Title>Speaker</Title>
      <div className="grid grid-flow-col grid-rows-2 mt-32 gap-y-28 max-lg:grid-rows-3 max-sm:grid-rows-4">
        {temp.map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-[180px] h-[180px] bg-slate-50 bg-opacity-20 rounded-full"></div>
            <div>이름</div>
            <div>직급</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ConferenceMap = () => {
  return (
    <section className="flex flex-col w-full gap-36 mt-[300px]">
      <Title>Conference Map</Title>
      <Image
        alt="컨퍼런스 지도 이미지 입니다."
        src={ConferenceMapImage}
        width={1000}
      ></Image>
    </section>
  );
};

const Copyright = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-[60px]">
      <Image alt="AsyncSwift Logo 입니다." src={AsyncLogo} width={62}></Image>
      <div className="flex flex-col items-center text-base font-extrabold">
        <p>Copyright &copy; 2022. AsyncSwift all rights reserved.</p>
        <p>contect us: {ASYNCSWIFT.EMIAL}</p>
      </div>
    </section>
  );
};

export default function Section() {
  return (
    <div className="z-40 flex flex-col items-center w-full h-full">
      <div className="w-full max-w-[1200px] backdrop:blur-xl bg-[#D9D9D9] bg-opacity-20 rounded-2xl flex flex-col">
        <Description />
        <Program />
        <Speaker />
        <ConferenceMap />
        <Copyright />
      </div>
    </div>
  );
}
