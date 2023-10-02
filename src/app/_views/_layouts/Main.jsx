import Image from "next/image";

import TBDDesign from "/public/sync2023-keylogo.png";
import Link from "next/link";
import { CONFERENCE } from "../../../utils/consts";

export default function Main() {
  return (
    <div className="justify-center px-6 m-auto sm:px-10 sm:grid sm:grid-cols-2 sm:gap-5">
      <div className="flex flex-col items-center justify-center gap-12 max-w-[800px] px-6 max-sm:my-60">
        <div className="object-fill">
          <Image alt="SyncSwift 2023 TBD Design" src={TBDDesign}></Image>
        </div>
        <div className="mt-12">
          <div className="w-full text-2xl text-center text-white sm:text-4xl font-mont font-extralight">
            {CONFERENCE.SUBTITLE}
          </div>
          <div className="mt-4 text-lg font-light text-center text-white text-opacity-50 sm:text-2xl">
            {new Intl.DateTimeFormat("ko-KR").format(new Date(CONFERENCE.DATE))}{" "}
            {CONFERENCE.LOCATION}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full max-sm:mt-60 max-w-[800px] sm:p-20">
        <div className="flex flex-col justify-between border-[#D9D9D9] border-opacity-50 border border-solid w-full sm:p-16 rounded-lg max-w-[610px] px-5 py-10">
          <div>
            <div className="text-4xl font-bold text-white sm:text-5xl text-opacity-80 font-mont">
              SyncSwift 2023
            </div>
            <ul className="mt-6 text-xl font-light leading-relaxed list-disc sm:text-2xl opacity-40">
              <li className="ml-8">
                행사 일시 : 2023년 10월 21일 13:00 ~ 21:00
              </li>
              <li className="ml-8">
                행사 장소 : 체인지업그라운드 2층, 경상북도 포항
              </li>
              <li className="ml-8">행사 문의 : asyncswift@gmail.com</li>
            </ul>
          </div>
          <div className="flex flex-col w-full gap-5 mt-16 text-xl sm:text-3xl">
            <Link
              href={
                "https://smartstore.naver.com/asyncswift/products/9280007233"
              }
              target="_blank"
              className="font-mont bg-[#D9D9D9] bg-opacity-5 border-[#D9D9D9] border-opacity-50 border border-solid sm:h-24 h-21 max-sm:py-5 max-sm:px-10  rounded-lg hover:bg-[#D9D9D9] hover:bg-opacity-40"
            >
              <button className="flex items-center justify-center w-full h-full">
                get General Ticket
              </button>
            </Link>
            <Link
              href={
                "https://smartstore.naver.com/asyncswift/products/9304388305"
              }
              target="_blank"
              className="font-mont bg-[#D9D9D9] bg-opacity-5 border-[#D9D9D9] border-opacity-50 border border-solid sm:h-24 h-21 max-sm:py-5 max-sm:px-10 rounded-lg hover:bg-[#D9D9D9] hover:bg-opacity-40"
            >
              <button className="flex items-center justify-center w-full h-full">
                get Scholarship Ticket
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
