const Session = ({ title, time }) => {
  return (
    <div className="flex flex-col gap-4 leading-9">
      <h1 className="font-mont md:text-[32px] text-xl font-bold ">{title}</h1>
      <div className="text-xs opacity-50 md:text-xl font-mont">{time}</div>
    </div>
  );
};

export default Session;
