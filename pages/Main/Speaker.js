import styles from "../../styles/modules/Speaker.module.css";
import SpeakerCard from "../components/Grid/Speaker/SpeakerCard";

const Speaker = () => {
  const mainSessionSpeakers = [
    {
      speakerName: "류성두",
      speakerCompany: "뱅크샐러드",
      speakerDescription: "모두가 쓸 수 있는 앱을 만드는 일에 관심이 많습니다.",
      sessionTitle: "당신이 TDD를 시도했다가 포기해 봤다면",
      sessionDescription: `모바일 개발자의 TDD가 왜 어려운지,
      그 어려움들을 어떻게 극복할 수 있는지,
      그리고 왜 그럴 가치가 있는지에 관해 이야기합니다.`,
      sns: {
        twitter: "https://twitter.com/SungdooYoo",
      },
    },
    {
      speakerName: "김지홍",
      speakerCompany: "디자인스펙트럼",
      speakerDescription: "디자이너들이 더 행복하게 디자인할 수 있는 세상을 목표로 합니다.",
      sessionTitle: "디자이너들이 애플에 열광했던 순간들",
      sessionDescription: `WWDC와 주요 애플 이벤트들을 돌아보며 디자이너들이
왜 애플 디자인에 열광하는지, 무엇에 반응하는지 함께 이야기 나눕니다.`,
      sns: {
        instagram: "https://www.instagram.com/jihere1001/",
      },
    },
    {
      speakerName: "김윤재",
      speakerCompany: "LINE Plus",
      speakerDescription: "라인에 입사한지 2년차인 주니어 개발자입니다",
      sessionTitle: "Swift concurrency 적응기",
      sessionDescription: `주니어 개발자로 입사해서 WWDC 2021에 소개된 Swift concurrency에 적응하면서 알게 된 내용들을 공유합니다.`,
      sns: {},
    },
    {
      speakerName: "강훈",
      speakerCompany: "당근마켓",
      speakerDescription: "커피를 좋아하는 Product Engineer",
      sessionTitle: "Modular Architecture 시작하기",
      sessionDescription: `Modular Architecture 가 무엇인지?
      실제 제품에 어떻게 적용할 수 있는지 소개합니다.`,
      sns: {
        github: "https://github.com/OhKanghoon",
        linkedIn: "https://www.linkedin.com/in/ohkanghoon",
      },
    },
    {
      speakerName: "문상봉",
      speakerCompany: "플리토",
      speakerDescription: "인싸도 못되는 아제이지만, Swift 세계에서만큼은 인싸가 되고 싶은 사람입니다.",
      sessionTitle: "MVI 패턴과 어울리는 SwiftUI 화면 이동 라이브러리 만들기",
      sessionDescription:
        "SwiftUI 와 찰떡궁합인 MVI 패턴, 그리고 사내수공업으로 만든 LinkNavigator 라이브러리를 소개합니다",
      sns: {
        github: "https://github.com/interactord",
      },
    },
    {
      speakerName: "허성진",
      speakerCompany: "인포마이닝",
      speakerDescription: "ENTJ | 하고 싶은 걸 다 하고 싶어 바쁜 요즘",
      sessionTitle: "나만 몰랐던, Xcode Breakpoint를 야무지게 쓰는 법",
      sessionDescription:
        "얼마 전까지도 클릭으로만 디버깅하던 한 주니어 개발자가 Xcode Breakpoint의 다양한 기능을 통해 효율적으로 디버깅하기 시작하게 된 과정을 소개합니다.",
      sns: {
        github: "https://github.com/heoseongjin",
        instagram: "https://www.instagram.com/heo.010203",
      },
    },
    {
      speakerName: "주협",
      speakerCompany: "코드잇",
      speakerDescription: "코드잇에서 프로덕트 디자이너로 일하고 있습니다.",
      sessionTitle: "HIG에 영향을 받은 프로덕트 디자이너의 좋은 습관과 나쁜 습관 (HIG 컴포넌트를 중심으로)",
      sessionDescription: `HIG가 프로덕트와 디자이너에게 미치는 다양한 면에 대해
        이야기합니다.

        올해 새로운 HIG가 발표되었는데
        디자인 분야에서 지속적인 영향력을 미칠 수 있을까요?`,
      sns: {
        linkedIn: "https://www.linkedin.com/in/%ED%98%91-%EC%A3%BC-83307a253",
      },
    },
    {
      speakerName: "김찬우",
      speakerCompany: "원티드랩",
      speakerDescription: "개개인을 위한 교육(Education for Each)을 추구하며 살고 있습니다.",
      sessionTitle: "개인앱 개발, 이렇게만 따라하면 실패할 수 있다!",
      sessionDescription: `기획하고, 개발하고, 그리고, 배포하고, 마케팅까지.
        다 엉성하지만 그게 개인앱 개발의 매력 아닐까요?`,
      sns: {
        site: "https://codable.space",
        linkedIn: "https://www.linkedin.com/in/codablespace/",
      },
    },
    {
      speakerName: "박건호",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
      speakerDescription: "현재 휴학을 하고 애플 디벨로퍼 아카데미에서 활동을 하고 있는 박건호입니다.",
      sessionTitle: "SwiftUI로 앱 서비스 출시까지",
      sessionDescription: `많은 현업에서는 UIKit을 기반으로 앱 서비스를 출시합니다.

        기존 레거시 코드, 기능 미지원 등 여러 이유로 SwiftUI 기반
        프로젝트가 아직까지 활발하게 진행되고 있지 않은 시기에,
        저희는 SwiftUI를 활용해서 앱을 출시 했습니다.

        그 과정을 여러분들에게 공유하고 싶습니다.`,
      sns: {
        github: "https://github.com/pagh2322",
        linkedIn: "https://www.linkedin.com/in/geonho-park-6275a1233",
      },
    },
    {
      speakerName: "홍길동",
      sessionTitle: "기대해주세요 !",
    },
  ];

  const talkSessionSpeakers = [
    {
      speakerName: "백수영",
      speakerCompany: `Apple Developer Academy
@ POSTECH / IT manager`,
      speakerDescription: "주변에 좋은 사람들만 가득한 인복 부자",
      sessionTitle: "우리가 만드는 애플: 두 번의 처음",
      sessionDescription: `한국의 첫 애플 스토어 오픈 멤버와 첫 애플 디벨로퍼 아카데미의 오픈 멤버가 된 경험담 공유`,
      sns: {
        linkedIn: "www.linkedin.com/in/sunnybaek",
      },
    },
    {
      speakerName: "이수진",
      speakerCompany: `Apple Developer Academy
@ POSTECH / Mentor`,
      speakerDescription: "기획자/PM으로 일해왔습니다. PM을 포함한 IT 여러 직군들과 소통하고 함께 성장하고 싶습니다.",
      sessionTitle: "HIG Study 진행에 대한 공유",
      sessionDescription: `Modular Architecture 가 무엇인지?
      실제 제품에 어떻게 적용할 수 있는지 소개합니다.`,
      sns: {
        linkedIn: "www.linkedin.com/in/sunnybaek",
      },
    },
    {
      speakerName: "이현호",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentor`,
      speakerDescription: "개발 보다는 협업을 좋아하고, 학습보다는 공유를 좋아하는 개발자 입니다.",
      sessionTitle: "위젯 어디에서 시작해서 어디로 가야할까요? iOS16에서의 다양한 위젯 정복기 + 락업스크린 위젯",
      sessionDescription: `iOS 개발을 하다가 위젯을 개발해야할 때 알아야 할 것들과
        실제 위젯을 만들면서 했던 삽질의 포인트들을 처음 위젯 개발하는 분들께 공유드립니다.`,
      sns: {
        twitter: "https://twitter.com/leeoios",
        instagram: "https://www.instagram.com/im____leeo/",
        github: "https://github.com/M1zz",
        linkedIn: "https://www.linkedin.com/in/hyunholee0705/",
      },
    },
    {
      speakerName: "박종호",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
      speakerDescription: "iOS 개발자를 꿈꾸고 있는 개발자 지망생입니다. swift 언어에 대해 깊게 이해하고 싶어요.",
      sessionTitle: "프로토콜과 some, any 에 대한 고찰",
      sessionDescription: "다형성과 some, 그리고 이번에 새로 나온 any 타입에 대해서 예제와 함께 소개하는 세션입니다.",
      sns: {
        github: "https://github.com/HoJongE",
      },
    },
    {
      speakerName: "신동준",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
      speakerDescription:
        "AppleAcademy 참여하고있는 예비개발자 입니다 닉네임은 데이비드이고 Swift 및 Flutter배우고있습니다",
      sessionTitle: "VIsion을 사용한 여러가지 기능들",
      sessionDescription: `VisionKit을 사용해서 새로운시도를 통해서 만든 기능들을
      소개하는 세션입니다.`,
      sns: {},
    },
    {
      speakerName: "이준영",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
      speakerDescription: `안녕하세요. 이로운 세상을 만드는 로운입니다.🌱
      새로움과 놀라움을 좋아하는 개발자 혁키입니다. 🧑‍💻
저희는 항상 다양한 도전, 과감한 시도를 즐기고 있습니다. 🙌`,
      sessionTitle: "아카데미 최강 듀오, 기획해 듀오 & 개발해 듀오",
      sessionDescription: `기획 : 공대 출신 기획자의 기획 분해와 조립, 대학시절 뜯어본 스마트폰과 아카데미에서 뜯어본 모바일 기기의 다양한 기능과 가능성을 씹고 뜯고 맛보고 즐기기.
      
      개발 : 애플 First-Party Framework의 놀라운 기술들, Nearby interaction과 Multipeer Connectivity 씹고 뜯고 맛보고 즐기기.`,
      sns: {
        instagram: "https://www.instagram.com/hi.lawn/",
        linkedIn: "https://www.linkedin.com/in/junyoung-lee-lawn/",
      },
    },
    {
      speakerName: "이가은",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
      speakerDescription:
        "흔들리지만, 꾸준히, 그리고 반드시 세상에 필요한 사람이 되기 위해 노력하는 ios 개발자, 이가은입니다.",
      sessionTitle: "WWDC Student challenge 우승과 앱 기획",
      sessionDescription: `WWDC Swift Student Challenge는
      매년 전 세계의 학생들을 대상으로 iOS 앱개발 공모전을 열어
      약 350명의 학생을 선발합니다.
      이는 자신의 개발과 앱의 가능성을 애플에게 마음껏 펼칠 수 있는 기회이기도 하면서, 선정된 winner에게는 다양한 장학금이 주어집니다.
      이번 세션에서는 WWDC Swift Student Challenge에 대한
      정보에 대해 소개합니다.
      더불어 winner가 되기 위해 어떤 부분을 준비했는지 소개합니다`,
      sns: {
        linkedIn: "https://www.linkedin.com/in/gaeun-lee-ios-developer/",
        blog: "https://rriver2.tistory.com/m/",
        github: "https://github.com/rriver2",
      },
    },
    {
      speakerName: "김인섭",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
      speakerDescription:
        "안녕하세요 Apple Developer Academy @ POSTECH 에서 Jr.Learner 로 공부하고 있고, AsyncSwift 에서 Organizer 로 활동 중인 김인섭입니다 🙇‍♂️",
      sessionTitle: "Widget에서 활용하면 빛이 나는 CoreData(feat. Lockscreen)",
      sessionDescription: `AppGroup 과 CoreData Migration 을 통해 앱 뿐만 아니라 위젯과 락스크린에서 데이터를 공유할 수 있습니다.
      더 나아가 다음에는 CloudKit 에 대해 알아보도록 하겠습니다!`,
      sns: {
        linkedIn: "https://www.linkedin.com/in/insub-kim-64ba8022b/",
      },
    },
    {
      speakerName: "이명환",
      speakerCompany: `Apple Developer Academy 
@ POSTECH / Mentee`,
      speakerDescription: "개발과 수영을 좋아합니다.",
      sessionTitle: "Tuist... 한번 써봤는데요?",
      sessionDescription:
        "Tuist가 무엇인지, Tuist를 프로젝트에서 어떻게 활용했는지, 경험을 기반으로 소개해드리고 싶습니다.",
      sns: {
        github: "https://github.com/Gobans",
        linkedIn: "https://www.linkedin.com/in/명환-이-678b20240/",
      },
    },
  ];

  return (
    //sessionTitle, sessionDescription, speakerName, speakerCompany, speakerDescription
    <section className={styles.speakerContainer}>
      <h3>Contents</h3>
      <div className={styles.speakerFlexContainer}>
        <div className={styles.mainSession}>
          {mainSessionSpeakers.map((speaker) => (
            <SpeakerCard
              type="Main"
              sessionTitle={speaker.sessionTitle}
              sessionDescription={speaker.sessionDescription}
              speakerName={speaker.speakerName}
              speakerCompany={speaker.speakerCompany}
              speakerDescription={speaker.speakerDescription}
            ></SpeakerCard>
          ))}
        </div>
        <div className={styles.talkSession}>
          {talkSessionSpeakers.map((speaker) => (
            <SpeakerCard
              type="Talk"
              sessionTitle={speaker.sessionTitle}
              sessionDescription={speaker.sessionDescription}
              speakerName={speaker.speakerName}
              speakerCompany={speaker.speakerCompany}
              speakerDescription={speaker.speakerDescription}
            ></SpeakerCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaker;
