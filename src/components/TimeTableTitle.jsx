const TimeTableTitle = ({ children }) => {
  return (
    <div className="flex gap-4 py-8 max-md:items-center">
      <div className="md:grow-0 md:block hidden w-[148px]"></div>
      <div className="flex items-center justify-center w-full font-bold text-[22px]">
        {children}
      </div>
    </div>
  );
};

export default TimeTableTitle;
