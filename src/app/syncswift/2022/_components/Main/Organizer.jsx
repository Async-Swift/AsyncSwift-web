import OrganizerGrid from "../Grid/Organizer/OrganizerGrid";
import styles from "/styles/modules/Organizer.module.css";

const Organizer = () => {
  const organizers = [
    {
      organizerName: "김은영",
      organizerDescription: "포항시민 12개월차, 소통형 개발자✌️",
    },
    {
      organizerName: "윤성관",
      organizerDescription:
        "링고의 해적선은 어디에나 있지. 코더스하이에도 아카데미에도",
    },
    {
      organizerName: "이수진",
      organizerDescription: "개발을 사랑하는 PM입니다.",
    },
    {
      organizerName: "이민아",
      organizerDescription: "물음표 해결에 집요한 보통의 디자이너",
    },
    {
      organizerName: "이현호",
      organizerDescription:
        "협업을 좋아하고 사람들과 소통하는 것을 좋아하는 개발자입니다.",
    },
    {
      organizerName: "김예빈",
      organizerDescription: "말하기듣기쓰기 좋아하는 개발자 😆",
    },
    {
      organizerName: "김인섭",
      organizerDescription:
        "안녕하세요 만드는걸 좋아하고 몰입을 즐기는 개발자 김인섭입니다",
    },
    {
      organizerName: "최미진",
      organizerDescription:
        "어느새 커뮤니티에 진심인, 매일 하나 둘 이상 배우는 UXer",
    },
    {
      organizerName: "황예은",
      organizerDescription: "궁금한게 너무 많은 물음표쟁이",
    },
    {
      organizerName: "이성노",
      organizerDescription: "이유있는 디자인을 좋아하는 iOS 개발자입니다.",
    },
    {
      organizerName: "송시원",
      organizerDescription: "더 쿨하게!",
    },
    {
      organizerName: "최인호",
      organizerDescription:
        "안녕하세요! 세상을 더 편하게 바꾸고 싶은 개발자입니다!",
    },
    {
      organizerName: "곽세진",
      organizerDescription:
        "Swift를 경험하고 언어와 생태계에 매료되어 커뮤니티 Organizar까지 참여해버렸습니다.",
    },
  ];

  return (
    <section className={styles.organizerContainer}>
      <h3>Organizer</h3>
      <div className={styles.organizerGridContainer}>
        <OrganizerGrid organizers={organizers}></OrganizerGrid>
      </div>
    </section>
  );
};

export default Organizer;
