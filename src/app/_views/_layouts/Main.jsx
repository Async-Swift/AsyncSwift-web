import Image from "next/image";

import TBDDesign from "/public/syncswift-2023-tbd-design.png";

export default function Main({ subtitle, location, date }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-32">
        <div className="w-10/12">
          <Image alt="SyncSwift 2023 TBD Design" src={TBDDesign}></Image>
        </div>
        <div className="mt">
          <div className="text-3xl text-center text-white font-extralight">
            {subtitle}
          </div>
          <div className="mt-2 text-base font-light leading-relaxed text-center text-white text-opacity-50">
            {new Intl.DateTimeFormat("ko-KR").format(new Date(date))} {location}
          </div>
        </div>
      </div>
    </div>
  );
}
