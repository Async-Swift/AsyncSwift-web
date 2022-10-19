import SubScription from "../components/SubScription";

const AppInfo = () => {
  return (
    <section>
      <h3>AsyncSwift App</h3>
      <SubScription
        title="AsyncSwift App"
        text="세미나와 컨퍼런스의 정보를 아카이빙하는 앱을 만들었습니다.
        iOS 앱으로 컨퍼런스를 다시 즐겨보아요."></SubScription>
      <div>
        <div></div>
        {/* <Link>
          <a href="/">AppStore ➔</a>
        </Link> */}
      </div>
    </section>
  );
};

export default AppInfo;
