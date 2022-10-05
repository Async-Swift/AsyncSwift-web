import SNS from "./SNS";
import Ticket from "./Ticket";

import style from "../../styles/modules/Info.module.css";

const Info = () => {
  return (
    <div className={style.InfoContainer}>
      <Ticket></Ticket>
      <SNS></SNS>
    </div>
  );
};

export default Info;
