import Image from "next/image";
import Link from "next/link";

import AsyncSwiftLogo from "/public/logo-horizontal.png";
import Instagram from "/public/sns-icons/instagram.png";
import Youtube from "/public/sns-icons/youtube.png";
import LinkedIn from "/public/sns-icons/linkedIn.png";
import X from "/public/sns-icons/x.png";
import AppStore from "/public/sns-icons/appStore.png";

export default function Header({}) {
  return (
    <header className="sticky top-0 z-50 flex justify-between w-full px-10 py-12 bg-black h-36 sm:py-10 sm:px-15 backdrop:blur-xl bg-opacity-40">
      <div>
        <Image alt="AsyncSwift" src={AsyncSwiftLogo} width={200} height={40} />
      </div>
      <div className="flex items-center gap-3">
        <Link href={"https://www.instagram.com/asyncswift/"} target="_blank">
          <Image alt="icon image" src={Instagram} width={22}></Image>
        </Link>
        <Link
          href={"https://www.youtube.com/channel/UCig96hmPxDF4D3II6idDoaw"}
          target="_blank"
        >
          <Image alt="icon image" src={Youtube} width={22}></Image>
        </Link>
        <Link
          href={"https://www.linkedin.com/company/async-swift/"}
          target="_blank"
        >
          <Image alt="icon image" src={LinkedIn} width={22}></Image>
        </Link>
        <Link href={"https://twitter.com/AsyncSwift"} target="_blank">
          <Image alt="icon image" src={X} width={22}></Image>
        </Link>
        <Link href={"https://apps.apple.com/app/id1645349429"} target="_blank">
          <Image alt="icon image" src={AppStore} width={22}></Image>
        </Link>
      </div>
    </header>
  );
}
