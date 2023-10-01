import Image from "next/image";

import TBDDesign from "/public/syncswift-2023-tbd-design.png";
import Link from "next/link";
import { CONFERENCE } from "../../../utils/consts";

export default function Main({}) {
  return (
    <div className="px-10 mt-32 sm:grid sm:grid-cols-2 sm:gap-5">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="w-10/12">
          <Image alt="SyncSwift 2023 TBD Design" src={TBDDesign}></Image>
        </div>
        <div className="mt-12">
          <div className="text-4xl text-center text-white font-['Noto Sans'] font-extralight">
            {CONFERENCE.SUBTITLE}
          </div>
          <div className="mt-2 text-3xl font-light leading-relaxed text-center text-white text-opacity-50">
            {new Intl.DateTimeFormat("ko-KR").format(new Date(CONFERENCE.DATE))}{" "}
            {CONFERENCE.LOCATION}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full max-sm:mt-60">
        <div className="flex flex-col justify-center border-[#D9D9D9] border-opacity-50 border border-solid w-full p-10 rounded-lg max-w-[610px] h-[400px] ">
          <div className="text-5xl font-bold text-white text-opacity-80 font-['Montserrat']">
            SyncSwift 2023
          </div>
          <ul className="mt-6 text-2xl font-light list-disc opacity-40">
            <li className="ml-8">행사 일시 : 2023년 10월 21일 13:00 ~ 21:00</li>
            <li className="ml-8">
              행사 장소 : 체인지업그라운드 2층, 경상북도 포항
            </li>
            <li className="ml-8">행사 문의 : asyncswift@gmail.com</li>
          </ul>
          <div className="flex flex-col w-full gap-5 mt-16 text-3xl font-normal">
            <button className="font-['Montserrat'] bg-[#D9D9D9] bg-opacity-5 border-[#D9D9D9] border-opacity-50 border border-solid h-28 rounded-lg hover:bg-[#D9D9D9] hover:bg-opacity-40">
              <Link
                href={
                  "https://smartstore.naver.com/asyncswift/products/9280007233"
                }
                target="_blank"
              >
                get General Ticket
              </Link>
            </button>
            <button className="font-['Montserrat'] bg-[#D9D9D9] bg-opacity-5 border-[#D9D9D9] border-opacity-50 border border-solid h-28 rounded-lg hover:bg-[#D9D9D9] hover:bg-opacity-40">
              <Link
                href={
                  "https://smartstore.naver.com/asyncswift/products/9304388305"
                }
                target="_blank"
              >
                get Scholarship Ticket
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
