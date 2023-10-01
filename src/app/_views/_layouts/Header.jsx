import Image from "next/image";
import AsyncSwiftLogo from "/public/AsyncLogo.png";
import { CONFERENCE } from "../../../utils/consts";

export default function Header({ title }) {
  return (
    <header className="flex justify-between w-full pr-16 pt-9 pl-11 max-sm:gap-6 max-sm:pt-12">
      <div className="text-3xl font-extrabold">
        <div className="font-['Montserrat']">{title && title}</div>
        <div className="font-['Montserrat']">{CONFERENCE.TEXT}</div>
      </div>

      <Image alt="AsyncSwift" src={AsyncSwiftLogo} width={62} />
    </header>
  );
}
