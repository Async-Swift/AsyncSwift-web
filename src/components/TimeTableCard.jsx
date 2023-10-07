"use client";

import { Fragment } from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
/**
 * @param {String} time
 * @param {Array} speaker => title, name
 * @param {string} case => title, name
 * @returns
 */

const TimeTableCard = ({ speakers, showDescription, setShowDescription }) => {
  const [speaker] = speakers.filter((speaker) => speaker.sessionTime);

  const handleClick = (id, showDescription) => {
    if (id === showDescription) return setShowDescription(0);
    setShowDescription(id);
  };

  return (
    <div className="flex gap-4 max-md:flex-col max-md:items-center ">
      <div className="md:grow-0 flex md:w-[148px]  md:text-xl text-xs md:mt-10">
        {speaker.sessionTime}
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full gap-4">
          {speakers.map((speaker) =>
            Object.keys(speaker).length !== 0 ? (
              <div
                key={speaker.name}
                className="flex flex-col gap-2 p-4  bg-[#D9D9D9] w-full  rounded-lg bg-opacity-[15%] leading-relaxed border border-opacity-50 border-[#D9D9D9] border-solid"
                onClick={() => handleClick(speaker.id, showDescription)}
              >
                <div className="text-sm md:text-2xl">
                  {speaker.sessionTitle}
                </div>
                <div className="text-xs opacity-50 md:text-lg max-md:flex max-md:justify-between">
                  <div>{speaker.name}</div>
                  <div className="md:hidden ">
                    {speaker.id === showDescription ? (
                      <CgMathMinus />
                    ) : (
                      <CgMathPlus />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={`blank : ${speaker.sessionTime}`}
                className="w-full p-4 rounded-lg border-dashed border border-opacity-50 border-[#D9D9D9]"
              ></div>
            )
          )}
        </div>
        {speakers.map((speaker) => (
          <div
            key={speaker.sessionTitle}
            className={`w-full border border-solid border-[#d9d9d9] border-opacity-50 rounded-lg px-6 py-4 ${
              showDescription === speaker.id ? "block" : "hidden"
            }`}
          >
            <div>
              <h2 className="md:text-[28px] text-[17px] font-bold">
                {speaker.sessionTitle}
              </h2>
              <hr className="my-4 border-[#d9d9d9] opacity-50" />
              <p className="text-[15px] opacity-80 md:text-lg break-words leading-relaxed">
                {speaker.sessionDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTableCard;
