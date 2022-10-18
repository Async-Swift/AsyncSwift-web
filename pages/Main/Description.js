import SubScription from "../components/SubScription";
import styles from "../../styles/modules/Description.module.css";

const Description = () => {
  return (
    <section className={styles.description}>
      <h3>
        SyncSwift 2022 <br />
        Nesting, 둥지를 틀다.
      </h3>
      <SubScription
        title="AsyncSwift의 첫 컨퍼런스."
        text={`SyncSwift 2022: Nesting 은 1년에 단 한 번뿐인, 애플 생태계 구성원들의 가장 큰 축제입니다.
국내 애플 생태계의 모든 직군(기획자, 개발자, 디자이너, QA Engineer 등)이 모여
각자의 경험과 고민을 다함께 이야기하고, 소통합니다.`}
      ></SubScription>
      <SubScription
        title="이번 컨퍼런스의 테마는 'Nesting(둥지를 틀다)' 입니다."
        text={`국내에서 애플 생태계를 구성하고 있는 다양한 사람들이 모여, 함께 둥지를 틀어보려 합니다.
        반갑습니다, 환영합니다.`}
      ></SubScription>
    </section>
  );
};

export default Description;
