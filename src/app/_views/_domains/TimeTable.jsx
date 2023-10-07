"use client";

import { useState } from "react";
import { TimeTableCard, TimeTableTitle, Title } from "../../../components";
import {
  CONFERENCE_LOCATIOM,
  SESSION_TIME,
  SPEAKERES_FULL,
} from "../../../utils/consts";

const TimeTable = () => {
  const [showDescription, setShowDescription] = useState(0);

  return (
    <section className="mt-[200px]">
      <Title>Time Table</Title>
      <div>
        {/* Line 1 */}
        <div className="flex gap-4 mt-20 ">
          <div className="md:grow-0 md:block hidden w-[148px]"></div>
          <div className="flex w-full gap-4 ">
            <div className="flex items-center justify-center bg-[#D9D9D9] w-full h-16 text-black rounded-lg md:text-2xl text-[17px] font-bold">
              {CONFERENCE_LOCATIOM.EVENT}
            </div>
            <div className="flex items-center justify-center bg-[#D9D9D9] w-full h-16 text-black rounded-lg md:text-2xl text-[17px] font-bold">
              {CONFERENCE_LOCATIOM.MEDIA}
            </div>
          </div>
        </div>
        {/* Line 2 */}
        <TimeTableTitle>Part 1 Session</TimeTableTitle>
        {/* Part 1 */}

        {
          <>
            <div className="flex flex-col gap-8">
              <TimeTableCard
                speakers={[
                  {
                    name: "Organizer 데이지",
                    sessionTitle: "Opening",
                    sessionTime: SESSION_TIME.OPENING,
                  },
                  {},
                ]}
                showDescription={0}
                setShowDescription={setShowDescription}
              />
              <TimeTableCard
                speakers={[...SPEAKERES_FULL]
                  .filter(
                    ({ sessionTime }) => sessionTime === SESSION_TIME.FIRST
                  )
                  .sort((a, b) =>
                    a.location === CONFERENCE_LOCATIOM.MEDIA ? 1 : -1
                  )}
                showDescription={showDescription}
                setShowDescription={setShowDescription}
              />

              <TimeTableCard
                speakers={[...SPEAKERES_FULL]
                  .filter(
                    ({ sessionTime }) => sessionTime === SESSION_TIME.SECOND
                  )
                  .sort((a, b) =>
                    a.location === CONFERENCE_LOCATIOM.MEDIA ? 1 : -1
                  )}
                showDescription={showDescription}
                setShowDescription={setShowDescription}
              />
              <TimeTableCard
                speakers={[...SPEAKERES_FULL]
                  .filter(
                    ({ sessionTime }) => sessionTime === SESSION_TIME.THIRD
                  )
                  .sort((a, b) =>
                    a.location === CONFERENCE_LOCATIOM.MEDIA ? 1 : -1
                  )}
                showDescription={showDescription}
                setShowDescription={setShowDescription}
              />
            </div>
          </>
        }

        <TimeTableTitle>Part 2 Activity</TimeTableTitle>
        <div className="flex flex-col gap-8">
          <TimeTableCard
            speakers={[...SPEAKERES_FULL]
              .filter(({ sessionTime }) => sessionTime === SESSION_TIME.FORUTH)
              .sort((a, b) =>
                a.location === CONFERENCE_LOCATIOM.MEDIA ? 1 : -1
              )}
            showDescription={showDescription}
            setShowDescription={setShowDescription}
          />

          <div className="flex gap-4 max-md:flex-col max-md:items-center ">
            <div className="md:grow-0 flex md:w-[148px] items-center md:text-xl text-xs">
              {SESSION_TIME.BREAK}
            </div>
            <div className="flex w-full p-4 border border-[#D9D9D9] opacity-50 border-solid rounded-lg md:text-2xl text-sm">
              쉬는 시간
            </div>
          </div>
        </div>
      </div>
      <TimeTableTitle>Part 3 Networking</TimeTableTitle>
      <div className="flex flex-col gap-8">
        <TimeTableCard
          speakers={[
            {
              name: "Organizer 커리",
              sessionTitle: "Networking",
              sessionTime: SESSION_TIME.NETWORK,
            },
            {},
          ]}
          setShowDescription={setShowDescription}
          showDescription={0}
        />
      </div>
    </section>
  );
};

export default TimeTable;
