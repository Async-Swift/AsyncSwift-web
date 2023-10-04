import { ASYNCSWIFT } from "../../../utils/consts";

export default function Footer({}) {
  return (
    <footer className="w-full bg-[#FFFFFF] bg-opacity-20 py-16 sm:px-[100px] px-4 mt-20">
      <div className="px-6 font-light leading-relaxed sm:text-2xl">
        <p>SyncSwift 2023</p>
        <p>2023년 10월 21일 13:00 ~ 21:00</p>
        <p> 체인지업그라운드 2층, 경상북도 포항</p>
        <p>{ASYNCSWIFT.EMIAL}</p>
        <p className="font-bold">
          Copyright &copy; 2022. AsyncSwift all rights reserved.
        </p>
      </div>
    </footer>
  );
}
