import Image from "next/image";

import ConferenceMapImage from "/public/map.png";
import OpenUpLogo from "/public/openup.png";
import AsyncLogo from "/public/AsyncLogo.png";
import SyncSwift2023Logo from "/public/sync2023-keylogo.png";
import { Session, Title } from "../../../components";
import { ASYNCSWIFT, CONFERENCE } from "../../../utils/consts";

const Description = () => {
  return (
    <section className="mt-[200px] flex flex-col items-center gap-[120px]">
      <div className="max-w-[720px]">
        <Image
          alt="컨퍼런스 지도 이미지 입니다."
          src={SyncSwift2023Logo}
        ></Image>
      </div>
      <div className="flex flex-col items-center leading-loose text-white">
        <div className="text-[34px] font-mont">{CONFERENCE.SUBTITLE} :</div>
        <div className="text-3xl font-light">
          멋진 앱을 만들기 위한 앱메이커들의 열정
        </div>
      </div>
      <div className="flex flex-col items-center font-light leading-loose text-white">
        <div className="text-2xl">
          2023.<span className="text-4xl">10. 21</span>. SAT{" "}
          <span className="text-4xl">1:00 PM - 9:00 PM</span>
        </div>
        <div className="text-2xl">체인지업 그라운드 2층, 경상북도 포항</div>
      </div>
    </section>
  );
};

const Program = () => {
  return (
    <section className="mt-60">
      <Title>Programs</Title>
      <div className="flex flex-col items-center mt-10 text-xl font-light leading-relaxed text-center opacity-50">
        <div>
          <div>
            SyncSwift 2023는 모든 참가자들이 함께 만들어가는 축제입니다.{" "}
          </div>
          <div>
            세션, 액티비티, 네트워킹 총 3개의 Part가 이어지며 진행됩니다.
          </div>
        </div>
        <br />
        <div>
          <div>각기 다른 형태의 프로그램들로 이루어진 SyncSwift 2023에서</div>
          <div>애플 생태계 구성원들과 함께 하루를 즐겨보아요.</div>
        </div>
      </div>
      <div className="mt-[120px] flex flex-col w-full gap-20">
        <div className="flex flex-col md:grid md:grid-cols-3 ">
          <Session
            title={"Part 1 Session"}
            time={"pm01:00 - 02:50 (1hr 50m)"}
          />
          <div className="w-full col-span-2 text-xl opacity-80 ">
            6명의 Speaker들이 애플 생태계에서 고군분투한 경험을 공유하는
            Session이 진행됩니다. 체인지업 그라운드 이벤트홀, 미디어월의 두 개의
            Track으로 진행됩니다.
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 ">
          <Session title={"Part 2 Activity"} time={"pm3:10 - 5:00 (1hr 50m)"} />
          <div className="w-full col-span-2 text-xl opacity-80">
            <div>
              <div>참가자 모두가 참가할 수 있는 액티비티 입니다.</div>
              <br />
              <div>
                체인지업 그라운드 Event hall과 Media Wall 각각의 자리에서
                진행됩니다. 둘 중 하나의 Track을 선택하여 참가할 수 있습니다.
                빠르게 자리가 찰 경우, 원하는 Track에 참가가 어려울 수도
                있습니다.
              </div>
            </div>
            <div className="border border-[#d9d9d9] border-opacity-50 py-6 px-4  border-solid mt-6 rounded-lg">
              <div className="text-2xl font-bold opacity-80">
                Event Hall | Hello visionPro world
              </div>
              <hr className="my-4" />
              <div className="text-[17px]">
                <div className="opacity-50 ">주디</div>
                <div className="mt-4 opacity-80">
                  곧 공개될 예정입니다! 잠시만 기다려주세요 😉
                </div>
              </div>
            </div>
            <div className="border border-[#d9d9d9] border-opacity-50 py-6 px-4  border-solid mt-6 rounded-lg">
              <div className="text-2xl font-bold opacity-80">
                Media Wall | HIG 배포 대작전
              </div>
              <hr className="my-4" />
              <div className="text-[17px]">
                <div className="opacity-50 ">Organizer 도라</div>
                <div className="mt-4 opacity-80">
                  참가자들은 작게 팀을 만들고 Organizer의 가이딩을 따라 Apple의
                  Human Interface Guideline의 문서를 함께 스터디하고 사례를
                  수집한 후 세션 종료와 함께 한국의 애플 생태계 구성원들에게
                  결과물을 배포합니다! 애플 생태계의 구성원들이 내가 배포한
                  문서들을 참고하며 공부하고 일한다고 생각하면 너무 설레지
                  않나요?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 ">
          <Session title={"Part 3 Networking"} time={"pm6:00 - 9:00 (3hr)"} />
          <div className="w-full col-span-2 text-xl opacity-80">
            <div>
              아이폰 첫 발표와 같은 Apple의 하이라이트 영상을 함께 보며
              참가자들의 이야기 보따리를 푸는 네트워킹이 진행됩니다.
            </div>
            <br />
            <div>간단한 식사와 음료가 제공될 예정입니다 🍿</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Speaker = () => {
  const temp = Array(8).fill(1);
  return (
    <section className="flex flex-col justify-center mt-60">
      <Title>Speaker</Title>
      <div className="grid grid-flow-col grid-rows-2 mt-32 max-sm:justify-center gap-y-28 max-lg:grid-rows-3 max-md:grid-rows-4 max-md:gap-x-6">
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

const TimeTable = () => {
  return (
    <section className="mt-[200px]">
      <Title>Time Table</Title>
    </section>
  );
};

const ConferenceMap = () => {
  return (
    <section className="flex flex-col w-full gap-36 mt-[300px] items-center">
      <Title>Conference Map</Title>
      <Image
        alt="컨퍼런스 지도 이미지 입니다."
        src={ConferenceMapImage}
        width={1000}
      ></Image>
    </section>
  );
};

const Sponser = () => {
  return (
    <section>
      <Title>Sponsor</Title>
      <div className="w-full bg-white h-[342px] flex justify-center items-center my-9 rounded-lg">
        <div className="w-[329px] h-[148px]">
          <Image alt="Sponsor openup logo picture" src={OpenUpLogo} />
        </div>
      </div>
      <div className="flex justify-end w-full text-[#FFC700] text-xl">
        SyncSwift와 함께하기 &#10132;
      </div>
    </section>
  );
};

const Copyright = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-[60px] mt-[314px]">
      <Image alt="AsyncSwift Logo 입니다." src={AsyncLogo} width={62}></Image>
      <div className="flex flex-col items-center text-base font-extrabold">
        <p>Copyright &copy; 2022. AsyncSwift all rights reserved.</p>
        <br />
        <p>contect us: {ASYNCSWIFT.EMIAL}</p>
      </div>
    </section>
  );
};

export default function Section() {
  return (
    <div className="z-40 flex flex-col items-center w-full h-full">
      <div className="w-full max-w-[1200px] backdrop:blur-xl bg-[#D9D9D9] bg-opacity-20 rounded-2xl flex flex-col px-[100px]">
        <Description />
        <Program />
        <Speaker />
        <TimeTable />
        <ConferenceMap />
      </div>
      <div className="w-full max-w-[1000px] flex flex-col mt-[347px] px-[100px]">
        <Sponser />
        <Copyright />
      </div>
    </div>
  );
}
