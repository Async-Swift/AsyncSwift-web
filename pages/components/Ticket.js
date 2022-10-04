const Ticket = () => {
  return (
    <div className="ticketInfo">
      <h3>티켓 오픈</h3>
      <div>10월 12일</div>
      <div>이벤트브라이트</div>

      <style jsx>{`
        .ticketInfo {
          line-height: 2em;
          font-size: 1em;
        }

        h3 {
          color: #ff46c0;
        }
      `}</style>
    </div>
  );
};

export default Ticket;
