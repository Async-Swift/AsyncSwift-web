const Session = ({ title, time }) => {
  return (
    <div className="flex flex-col gap-4 leading-9">
      <h1 className="font-mont text-[32px] font-bold ">{title}</h1>
      <div className="text-xl opacity-50 font-mont">{time}</div>
    </div>
  );
};

export default Session;
