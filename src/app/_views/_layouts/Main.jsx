import Image from "next/image";

import TBDDesign from "/public/syncswift-2023-tbd-design.png";

export default function Main({ subtitle, location, date }) {
  return (
    <div className="mt-32 sm:grid sm:grid-cols-2 sm:gap-5">
      <div className="flex flex-col items-center justify-center gap-12">
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
      <div className="w-full px-12 py-32">
        <div className="border-[#D9D9D9] border-opacity-50 border border-solid w-full h-full p-10 rounded-lg">
          <div className="text-white text-opacity-80 text-3xl font-bold font-['Montserrat']">
            SyncSwift 2023
          </div>
          <ul className="mt-4 font-light leading-6 list-disc opacity-40">
            <li className="ml-8">행사 일시 : 2023년 10월 21일 13:00 ~ 21:00</li>
            <li className="ml-8">
              행사 장소 : 체인지업그라운드 2층, 경상북도 포항
            </li>
            <li className="ml-8">행사 문의 : asyncswift@gmail.com</li>
          </ul>
          <div className="flex flex-col w-full gap-3 mt-10">
            <button className="bg-[#D9D9D9] bg-opacity-5 border-[#D9D9D9] border-opacity-50 border border-solid h-16 rounded-lg hover:bg-[#D9D9D9] hover:bg-opacity-40">
              get General Ticket
            </button>
            <button className="bg-[#D9D9D9] bg-opacity-5 border-[#D9D9D9] border-opacity-50 border border-solid h-16 rounded-lg hover:bg-[#D9D9D9] hover:bg-opacity-40">
              get Scholarship Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
