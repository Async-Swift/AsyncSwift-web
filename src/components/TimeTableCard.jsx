/**
 * @param {String} time
 * @param {Array} speaker => title, name
 * @param {string} case => title, name
 * @returns
 */

const TimeTableCard = ({ time, speakers, timeCase }) => (
  <div className="flex gap-4 max-md:flex-col max-md:items-center ">
    <div className="md:grow-0 flex md:w-[148px] items-center md:text-xl text-xs">
      {time}
    </div>
    <div className="flex w-full gap-4">
      {speakers.map((speaker) =>
        Object.keys(speaker).length !== 0 ? (
          <div
            key={speaker.name}
            className="flex flex-col  gap-2 p-4  bg-[#D9D9D9] w-full  rounded-lg bg-opacity-[15%] leading-relaxed border border-opacity-50 border-[#D9D9D9] border-solid"
          >
            <div className="text-sm md:text-2xl">
              {speaker.title}{" "}
              {timeCase && (
                <div className="relative inline-block text-[8px] md:text-sm opacity-80 md:bottom-3 bottom-1">
                  {timeCase}
                </div>
              )}
            </div>
            <div className="text-xs opacity-50">{speaker.name}</div>
          </div>
        ) : (
          <div
            key={time}
            className="w-full p-4 rounded-lg border-dashed border border-opacity-50 border-[#D9D9D9]"
          ></div>
        )
      )}
    </div>
  </div>
);

export default TimeTableCard;
