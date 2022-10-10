import style from "../../styles/modules/Info.module.css";

const Ticket = () => {
  return (
    <div className={style.ticketInfo}>
      <a target="_blank" href="https://festa.io/events/2722" rel="noreferrer">
        <h3>티켓 오픈 &rArr;</h3>
      </a>
      <div>10월 12일</div>
      <div>페스타</div>
    </div>
  );
};

export default Ticket;
