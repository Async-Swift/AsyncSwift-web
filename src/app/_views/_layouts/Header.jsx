import Image from "next/image";
import AsyncSwiftLogo from "/public/AsyncLogo.png";
import { CONFERENCE } from "../../../utils/consts";

export default function Header({}) {
  return (
    <header className="flex justify-between w-full px-16 py-14 max-sm:gap-6 max-sm:px-10 max-sm:py-12">
      <div className="text-3xl font-bold">
        <div className="font-mont">{CONFERENCE.TITLE}</div>
        <div className="font-mont">{CONFERENCE.TEXT}</div>
      </div>

      <Image alt="AsyncSwift" src={AsyncSwiftLogo} width={62} />
    </header>
  );
}
