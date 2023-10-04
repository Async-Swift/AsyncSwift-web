import Image from "next/image";

import ConferenceMapImage from "/public/syncswift2023/map/map.png";
import OpenUpLogo from "/public/syncswift2023/sponsor/openup.png";
import DiscordIcon from "/public/syncswift2023/sns-icon/discord.png";
import InstagramIcon from "/public/syncswift2023/sns-icon/instagram.png";
import LinkedInIcon from "/public/syncswift2023/sns-icon/linkedIn.png";
import WebIcon from "/public/syncswift2023/sns-icon/web.png";
import XIcon from "/public/syncswift2023/sns-icon/x.png";
import YoutubeIcon from "/public/syncswift2023/sns-icon/youtube.png";
import AsyncLogo from "/public/logo.png";
import Banner from "/public/syncswift2023/banner.png";
import SyncSwift2023Logo from "/public/syncswift2023/sync2023-keylogo.png";
import {
  Session,
  TimeTableCard,
  TimeTableTitle,
  Title,
} from "../../../components";
import { CONFERENCE, SPEAKERES_FULL } from "../../../utils/consts";
import Link from "next/link";

const Description = () => {
  return (
    <section className="mt-[200px] flex flex-col items-center gap-[120px]">
      <div className="max-w-[720px] px-4">
        <Image
          alt="SyncSwift 2023 키디자인 이미지입니다."
          src={SyncSwift2023Logo}
        ></Image>
      </div>
      <div className="flex flex-col items-center gap-4 text-white">
        <div className="sm:text-[34px] text-xl font-mont">
          {CONFERENCE.SUBTITLE} :
        </div>
        <div className="text-xl font-light sm:text-3xl opacity-80">
          멋진 앱을 만들기 위한 앱메이커들의 열정
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 font-light text-white sm:text-2xl text-[17px] opacity-80">
        <div className="">2023.10. 21. SAT 1:00 PM - 9:00 PM</div>
        <div className="">체인지업 그라운드 2층, 경상북도 포항</div>
      </div>
    </section>
  );
};

const Program = () => {
  return (
    <section className="mt-60">
      <Title>Programs</Title>
      <div className="flex flex-col items-center mt-10 text-sm font-light leading-relaxed text-center opacity-50 sm:text-xl">
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
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8">
          <Session
            title={"Part 1 Session"}
            time={"pm01:00 - 02:50 (1hr 50m)"}
          />
          <div className="w-full col-span-2 text-xl opacity-80 md:text-xl max-md:mt-5 text-[17px] leading-relaxed">
            6명의 Speaker들이 애플 생태계에서 고군분투한 경험을 공유하는
            Session이 진행됩니다. 체인지업 그라운드 이벤트홀, 미디어월의 두 개의
            Track으로 진행됩니다.
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8 ">
          <Session title={"Part 2 Activity"} time={"pm3:10 - 5:00 (1hr 50m)"} />
          <div className="w-full col-span-2 max-md:mt-5 md:text-xl text-[17px] opacity-80 leading-relaxed">
            <div className="">
              <div>참가자 모두가 참가할 수 있는 액티비티 입니다.</div>
              <br />
              <div>
                체인지업 그라운드 Event hall과 Media Wall 각각의 자리에서
                진행됩니다. 둘 중 하나의 Track을 선택하여 참가할 수 있습니다.
                빠르게 자리가 찰 경우, 원하는 Track에 참가가 어려울 수도
                있습니다.
              </div>
            </div>
            <div className="border border-[#d9d9d9] border-opacity-50 py-6 px-4  border-solid mt-6 rounded-lg bg-[#D9D9D9] bg-opacity-5">
              <div className="text-xs font-bold opacity-80 ">Event Wall</div>
              <div className="mt-2 text-2xl font-bold opacity-80">
                Hello visionPro world
              </div>
              <hr className="my-4" />
              <div className="text-[17px]">
                <div className="opacity-50 ">주디</div>
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
            <div className="border border-[#D9D9D9] border-opacity-50 py-6 px-4  border-solid mt-6 rounded-lg bg-[#D9D9D9] bg-opacity-5">
              <div className="text-xs font-bold opacity-80 ">Media Wall</div>
              <div className="md:text-2xl text-[17px] font-bold opacity-80 mt-2 ">
                HIG 배포 대작전
              </div>
              <hr className="my-4" />
              <div className="md:text-[17px] text-[15px]">
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
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8">
          <Session title={"Part 3 Networking"} time={"pm6:00 - 9:00 (3hr)"} />
          <div className="w-full col-span-2 text-base md:text-xl opacity-80 max-md:mt-8">
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
  return (
    <section className="flex flex-col justify-center pb-20 mt-60">
      <Title>Speaker</Title>
      <div className="grid justify-center grid-flow-col grid-rows-2 mt-32 gap-x-5 gap-y-28 max-lg:grid-rows-3 max-md:grid-rows-4 max-md:gap-x-8">
        {SPEAKERES_FULL.map(({ name, introduction, imageURL }, i) => (
          <div key={`${name}_${i}`} className="gap-4">
            <ul className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-slate-50 bg-opacity-20 sm:w-[180px] sm:h-[180px] w-[120px] h-[120px]">
                <Image
                  alt={`연사자 ${name}님의 사진입니다.`}
                  src={imageURL}
                  className=""
                  width={180}
                  height={180}
                ></Image>
              </div>
              <li className="mt-5 text-lg sm:text-xl">{name}</li>
              <li className="whitespace-pre text-[#AFAFAF] leading-normal sm:text-lg text-xs">
                {introduction}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const ConferenceMap = () => {
  return (
    <section className="flex flex-col items-center w-full gap-36">
      <Title>Conference Map</Title>
      <Image
        alt="컨퍼런스 지도 이미지 입니다."
        src={ConferenceMapImage}
        width={1000}
      ></Image>
    </section>
  );
};

const TimeTable = () => {
  return (
    <section className="mt-[200px]">
      <Title>Time Table</Title>
      <div>
        {/* Line 1 */}
        <div className="flex gap-4 mt-20 ">
          <div className="md:grow-0 md:block hidden w-[148px]"></div>
          <div className="flex w-full gap-4 ">
            <div className="flex items-center justify-center bg-[#D9D9D9] w-full h-16 text-black rounded-lg md:text-2xl text-[17px] font-bold">
              Event Hall
            </div>
            <div className="flex items-center justify-center bg-[#D9D9D9] w-full h-16 text-black rounded-lg md:text-2xl text-[17px] font-bold">
              Media Wall
            </div>
          </div>
        </div>
        {/* Line 2 */}
        <TimeTableTitle>Part 1 Session</TimeTableTitle>
        {/* Part 1 */}
        <div className="flex flex-col gap-8">
          <TimeTableCard
            speakers={[{ name: "Organizer 데이지", title: "Opening" }, {}]}
            time={"01:00 ~ 01:10"}
          />
          <TimeTableCard
            speakers={[
              { title: "우리 BDD해요", name: "Zeri" },
              { title: "오늘도 PM이 안된다고 말했다.", name: "김현정" },
            ]}
            time={"01:10 - 01:40"}
          />
          <TimeTableCard
            speakers={[
              {
                title: "App Store Rejections and how to avoid them",
                name: "Florian Ludot",
              },
              {
                title: "11년차 디자이너가 토스 \n 퇴사하고 하는 일",
                name: "강영화",
              },
            ]}
            time={"01:50 - 02:20"}
          />
          <TimeTableCard
            speakers={[
              {
                title: "사이드 프로젝트가 메인 JOB이 되기까지의 이야기",
                name: "박성은",
              },
              {
                title: "더 높은 프로덕트 품질을 고민하는 Tech PM의 일",
                name: "김민석",
              },
            ]}
            time={"02:30 - 02:50"}
          />
        </div>
        <TimeTableTitle>Part 2 Activity</TimeTableTitle>
        <div className="flex flex-col gap-8">
          <TimeTableCard
            speakers={[
              {
                title: "Vision Pro, visionOS 찍먹해보기!",
                name: "이민지",
              },
              { name: "도라", title: "HIG 배포 대작전" },
            ]}
            time={"03:10 - 04:00"}
            timeCase={"전반부"}
          />
          <TimeTableCard
            speakers={[
              {
                title: "Vision Pro, visionOS 찍먹해보기!",
                name: "이민지",
              },
              { name: "도라", title: "HIG 배포 대작전" },
            ]}
            time={"04:10 - 05:00"}
            timeCase={"후반부"}
          />
          <div className="flex gap-4 max-md:flex-col max-md:items-center ">
            <div className="md:grow-0 flex md:w-[148px] items-center md:text-xl text-xs">
              05:00 - 06:00
            </div>
            <div className="flex w-full p-4 border border-[#D9D9D9] opacity-50 border-solid rounded-lg">
              쉬는 시간
            </div>
          </div>
        </div>
      </div>
      <TimeTableTitle>Part 3 Networking</TimeTableTitle>
      <div className="flex flex-col gap-8">
        <TimeTableCard
          speakers={[
            {
              title: "Networking",
              name: "Organizer 커리",
            },
            {},
          ]}
          time={"06:00 - 09:00"}
        />
      </div>
    </section>
  );
};

const Sponser = () => {
  return (
    <section>
      <Title>Sponsor</Title>
      <div className="w-full bg-white h-[342px] flex justify-center items-center my-9 rounded-[32px]">
        <div className="w-[329px] sm:h-[148px] h-[80px] flex justify-center items-center">
          <Image alt="Sponsor openup logo picture" src={OpenUpLogo} />
        </div>
      </div>
    </section>
  );
};

const Copyright = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-[60px] mt-60">
      <Title>주최 소개</Title>
      <div className="flex flex-col items-center gap-5">
        <Image alt="AsyncSwift Logo 입니다." src={AsyncLogo} width={62}></Image>
        <div className="text-[#EF5138] font-bold text-2xl ">AsyncSwift</div>
      </div>
      <div className="flex flex-col items-center leading-relaxed font-light sm:text-[32px] text-[17px] flex-wrap">
        <div>AsyncSwif는 Apple 생태계의</div>
        <div>다양한 구성원들이 모인 커뮤니티입니다.</div>
      </div>

      <div className="flex flex-col text-sm font-light text-center sm:text-xl">
        <div>AsyncSwift는 iOS/MacOS/iPadOS 개발자, UX 디자이너, PM 등</div>
        <div>
          Apple 생태계에서 구동되는 앱을 만드는 여러 직군이 한데 모인
          커뮤니티입니다.
        </div>
        <div>
          우리는 Swift 언어를 기반으로 다양한 플랫폼에서 여러 가치를 실현해
          나갑니다.
        </div>
        <div>AsyncSwift는 지난 2022년 설립 이래</div>
        <div>
          연간 컨퍼런스인 SyncSwift 및 다양한 세미나와 이벤트를 주최하며
        </div>
        <div>국내 Apple 생태계 저변 확대에 많은 기여를 하고 있습니다.</div>
      </div>

      <div className="flex flex-col items-center leading-relaxed font-light sm:text-[32px] text-[17px] flex-wrap">
        <div>AsyncSwift의 다양한 소통 채널에서</div>
        <div>컨퍼런스 소식과 참가자들을 미리 만나보세요!</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-5">
        <div className="flex items-center gap-6 text-2xl">
          <Image alt="Web icon" src={WebIcon} width={25}></Image>
          <div>
            <Link target="_blank" href={"https://www.asyncswift.org"}>
              www.asyncswift.org
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <Image alt="instagram icon" src={InstagramIcon} width={25}></Image>
          <div>
            <Link
              target="_blank"
              href={"https://www.instagram.com/asyncswift/"}
            >
              @asyncswift
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <Image alt="discord icon" src={DiscordIcon} width={25}></Image>
          <div>
            <Link target="_blank" href={"https://www.discord.gg/C9nesaJrwv"}>
              discord.gg/C9nesaJrwv
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <Image alt="x icon" src={XIcon} width={25}></Image>
          <div>
            <Link target="_blank" href={"https://twitter.com/AsyncSwift"}>
              @asyncswift
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <Image alt="youtube icon" src={YoutubeIcon} width={25}></Image>
          <div>
            <Link
              target="_blank"
              href={"https://www.youtube.com/channel/UCig96hmPxDF4D3II6idDoaw"}
            >
              Async Swift Korea
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 text-2xl">
          <Image alt="linkedIn icon" src={LinkedInIcon} width={25}></Image>
          <div>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/async-swift/"}
            >
              AsyncSwift
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Section() {
  return (
    <div className="flex flex-col items-center w-full h-full md:px-10">
      <div className="z-40 w-full max-w-[1200px] backdrop-blur-lg  bg-[#4A4A4A] bg-opacity-20 rounded-3xl flex flex-col md:px-6 px-4 lg:px-[100px]">
        <Description />
        <Program />
        <Speaker />
      </div>
      <div className="z-40 w-full max-w-[1200px] backdrop-blur-lg bg-[#4A4A4A] bg-opacity-20 rounded-3xl flex flex-col md:pl-6  px-4 mt-48 py-52">
        <ConferenceMap />
        <TimeTable />
      </div>
      <div className="z-40 w-full max-w-[1000px] flex flex-col mt-[347px] sm:px-[100px] px-4 backdrop-blur-lg bg-[#4A4A4A] bg-opacity-20 rounded-3xl sm:py-52 py-20">
        <Sponser />
        <Copyright />
      </div>
    </div>
  );
}
