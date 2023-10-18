export const CONFERENCE = {
  TEXT: "conference",
  SYNC: "SyncSwift",
  ASYNC: "AsyncSwift",
  TITLE: "SyncSwift 2023",
  SUBTITLE: "From TestFlight to App Store",
  LOCATION: "Pohang",
  DATE: "2023-10-21 04:00:00+00",
};

export const ASYNCSWIFT = {
  EMIAL: "asyncswift@gmail.com",
};

export const CONFERENCE_LOCATIOM = {
  MEDIA: "Media Wall",
  EVENT: "Event Hall",
};

export const SESSION_TIME = {
  OPENING: "01:00 ~ 01:10",
  FIRST: "01:10 ~ 01:40",
  SECOND: "01:50 ~ 02:20",
  THIRD: "02:30 ~ 02:50",
  FORUTH: "03:10 ~ 05:00",
  BREAK: "05:00 - 06:00",
  NETWORK: "06:00 ~ 09:00",
};

export const SPEAKERES_FULL = [
  {
    id: 1,
    name: "강영화",
    company: "(전)토스",
    imageURL: "/syncswift2023/speaker/강영화.png",
    introduction:
      "토스팀 최초의 Product Designer (Tools) 직무로 일하면서 팀원들이 쓰는 생산성 도구를 디자인했어요. '일하는 방식', '행복하게 일하는 방법'에 관심이 많은 디자이너이자 코치, 이것저것 하는 사람입니다. 인사이트를 공유하는 인스타 계정 @_y.note 운영중이에요. 팔로우 해주세요 🏃",
    sessionDescription:
      "디자이너로 일하던 평범(?)한 사람이 창업에 도전하며 6개월간 여러가지 시도를 한 이야기를 들려드릴게요. ",
    sessionTitle: "11년차 디자이너가 토스\n퇴사하고 하는 일",
    location: CONFERENCE_LOCATIOM.EVENT,
    sessionTime: SESSION_TIME.SECOND,
  },
  {
    id: 2,
    name: "박성은",
    company: "북적 스튜디오",
    imageURL: "/syncswift2023/speaker/박성은.png",
    introduction:
      "도시공학과 전공이지만 도시 개발보다 앱 개발을 선택한 5년차 iOS 개발자입니다. 사이드 프로젝트로 시작한 북적북적을 더 잘 만들기 위해 최근 1인 개발자가 되었습니다.",
    sessionDescription:
      "유저수 50만명, 앱스토어 투데이, 구글 플레이 올해를 빛낸 앱 선정! 독서기록 앱 북적북적을 만들며 경험한 4년간의 성장 이야기를 공유합니다.",
    sessionTitle: "사이드 프로젝트가\n메인 JOB이 되기까지의 이야기",
    location: CONFERENCE_LOCATIOM.EVENT,
    sessionTime: SESSION_TIME.THIRD,
  },
  {
    id: 3,
    name: "김민석",
    company: "NCSOFT",
    imageURL: "/syncswift2023/speaker/김민석.png",
    introduction:
      "4년간 개발자를 위한 서비스를 만드는 기획자로 일했고, 5년차가 되는 올해부터는 프로덕트 품질을 고민하는 Tech PM으로 일하고 있습니다. 일 잘하고 싶은 마음과 나를 지키고 싶은 욕심이 자주 충돌하지만, 가장 사랑하는 일을 최우선에 두며 삶을 살아가고 있습니다. 기록이 취미이자 특기입니다.",
    sessionDescription:
      "높은 품질의 프로덕트를 만들기 위해서는 어떤 고민이 필요할까요? 코드 품질, 문서 품질, 라이브 서비스 품질 등 프로덕트의 개발/운영 과정에서의 다양한 품질을 높이기 위해 고민하는 Tech PM의 이야기를 나눕니다.",
    sessionTitle: "더 높은 프로덕트 품질을\n고민하는 Tech PM의 일",
    location: CONFERENCE_LOCATIOM.MEDIA,
    sessionTime: SESSION_TIME.THIRD,
  },
  {
    id: 4,
    name: "이민지",
    company: "Apple Developer Academy \n @ POSTECH",
    imageURL: "/syncswift2023/speaker/이민지.png",
    introduction:
      "피상적인 문제만을 보기보다는 본질을 파악하고자 노력하고 다방면에 관심이 많고 도전하는 것을 좋아하는 개발자입니다.",
    sessionDescription:
      "직접 Reality Composer Pro로 간단한 3D 콘텐츠를 제작하고, 이 콘텐츠를 활용한 visionOS 앱을 만들어 Vision Pro 시뮬레이터에 실행시켜보며 새롭게 등장한 Vision Pro와 visionOS를 경험해봅니다.",
    sessionTitle: "Vision Pro,\nvisionOS 찍먹해보기!",
    location: CONFERENCE_LOCATIOM.EVENT,
    sessionTime: SESSION_TIME.FORUTH,
  },
  {
    id: 5,
    name: "김현정",
    company: "우아한형제들\n B마트서비스기획팀",
    imageURL: "/syncswift2023/speaker/김현정.png",
    introduction:
      "동료들과 손발 합이 딱딱 맞는 문제해결 과정을 즐깁니다. 목표를 향해 한 배를 타고 가게하는 바를 지향하는 PM",
    sessionDescription:
      "서비스 성장 뒤, PM 이야기 현실편. '기획자에서 PM으로'를 포함합니다.",
    sessionTitle: "오늘도 PM이 안된다고 말했다.",
    location: CONFERENCE_LOCATIOM.MEDIA,
    sessionTime: SESSION_TIME.FIRST,
  },
  {
    id: 6,
    name: "Florian Ludot",
    company: "Dev Korea",
    imageURL: "/syncswift2023/speaker/Florian.png",
    introduction:
      "I am the Seoul iOS Meetup dude! I chat about code & startups often. Love fried chicken & singing. Yes, I really really talk a lot!",
    sessionDescription:
      "In 2022, Apple rejected 30% of app submissions. Gain insights for your app's seamless market entry.",
    sessionTitle: "App Store Rejections and\nhow to avoid them",
    location: CONFERENCE_LOCATIOM.MEDIA,
    sessionTime: SESSION_TIME.SECOND,
  },
  {
    id: 7,
    name: "도라",
    company: "Apple Developer Academy \n @ POSTECH",
    imageURL: "/syncswift2023/speaker/도라.png",
    introduction: "물음표 해결에 집요한 보통의 디자이너",
    sessionDescription:
      "참가자들은 작게 팀을 만들고 Organizer의 가이딩을 따라 Apple의 Human Interface Guideline의 문서를 함께 스터디하고 사례를 수집한 후 세션 종료와 함께 한국의 애플 생태계 구성원들에게 결과물을 배포합니다! 애플 생태계의 구성원들이 내가 배포한 문서들을 참고하며 공부하고 일한다고 생각하면 너무 설레지 않나요?",
    sessionTitle: "HIG 배포 대작전",
    location: CONFERENCE_LOCATIOM.MEDIA,
    sessionTime: SESSION_TIME.FORUTH,
  },
  {
    id: 8,
    name: "박예빈",
    company: "다양한 경험을 좋아하는 \n iOS 개발자입니다.",
    imageURL: "/syncswift2023/speaker/Zeri.png",
    introduction: "다양한 경험을 좋아하는 iOS 개발자입니다.",
    sessionDescription: "BDD 소개, Quick과 Nimble을 이용해 BDD해보기",
    sessionTitle: "우리 BDD해요",
    location: CONFERENCE_LOCATIOM.EVENT,
    sessionTime: SESSION_TIME.FIRST,
  },
];

export const ORGANIZER_FULL = [
  {
    id: 1,
    name: "고경섭",
    imageURL: "/syncswift2023/organizer/고경섭.png",
  },
  {
    id: 2,
    name: "곽세진",
    imageURL: "/syncswift2023/organizer/곽세진.png",
  },
  // {
  //   id: 3,
  //   name: "김예빈",
  //   imageURL: "/syncswift2023/organizer/김예빈.png",
  // },
  {
    id: 4,
    name: "김은영",
    imageURL: "/syncswift2023/organizer/김은영.png",
  },
  {
    id: 5,
    name: "김인섭",
    imageURL: "/syncswift2023/organizer/김인섭.png",
  },
  {
    id: 6,
    name: "김하은",
    imageURL: "/syncswift2023/organizer/김하은.png",
  },
  {
    id: 7,
    name: "송시원",
    imageURL: "/syncswift2023/organizer/송시원.png",
  },
  // {
  //   id: 8,
  //   name: "여니",
  //   imageURL: "/syncswift2023/organizer/여니.png",
  // },
  // {
  //   id: 9,
  //   name: "윤성관",
  //   imageURL: "/syncswift2023/organizer/윤성관.png",
  // },
  {
    id: 10,
    name: "이민아",
    imageURL: "/syncswift2023/organizer/이민아.png",
  },
  // {
  //   id: 11,
  //   name: "이성노",
  //   imageURL: "/syncswift2023/organizer/이성노.png",
  // },
  {
    id: 12,
    name: "이수진",
    imageURL: "/syncswift2023/organizer/이수진.png",
  },
  {
    id: 13,
    name: "이재웅",
    imageURL: "/syncswift2023/organizer/이재웅.png",
  },
  // {
  //   id: 14,
  //   name: "이현호",
  //   imageURL: "/syncswift2023/organizer/이현호.png",
  // },
  {
    id: 15,
    name: "최미진",
    imageURL: "/syncswift2023/organizer/최미진.png",
  },
  // {
  //   id: 16,
  //   name: "최인호",
  //   imageURL: "/syncswift2023/organizer/최인호.png",
  // },
  {
    id: 17,
    name: "최진욱",
    imageURL: "/syncswift2023/organizer/최진욱.png",
  },
  {
    id: 18,
    name: "황예은",
    imageURL: "/syncswift2023/organizer/황예은.png",
  },
];
