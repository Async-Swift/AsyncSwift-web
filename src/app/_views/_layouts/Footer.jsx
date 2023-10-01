"use client";
import Instagram from "/public/sns-icons/instagram.png";
import Youtube from "/public/sns-icons/youtube.png";
import LinkedIn from "/public/sns-icons/linkedIn.png";
import X from "/public/sns-icons/x.png";
import AppStore from "/public/sns-icons/appStore.png";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer({}) {
  const [isSafariInMobile, setSafariInMobile] = useState(false);

  useEffect(() => {
    const userDeviceEnv = window.navigator.userAgent;
    if (userDeviceEnv.match(/iPhone/i) && userDeviceEnv.indexOf(/Safari/i)) {
      setSafariInMobile(true);
    }

    return () => {};
  }, []);

  return (
    <footer
      className={`flex w-full pl-16 h-30 pb-11 max-sm:justify-start max-sm:flex-col max-sm:pl-4 max-sm:mt-32 ${
        isSafariInMobile ? "max-sm:pb-44" : ""
      }`}
    >
      <div className="hidden text-base font-normal leading-none text-zinc-500 max-sm:block">
        To get latest information
      </div>
      <div className="flex items-center gap-8 mt-6">
        <Link href={"https://www.instagram.com/asyncswift/"} target="_blank">
          <Image alt="icon image" src={Instagram} width={32}></Image>
        </Link>
        <Link
          href={"https://www.youtube.com/channel/UCig96hmPxDF4D3II6idDoaw"}
          target="_blank"
        >
          <Image alt="icon image" src={Youtube} width={32}></Image>
        </Link>
        <Link
          href={"https://www.linkedin.com/company/async-swift/"}
          target="_blank"
        >
          <Image alt="icon image" src={LinkedIn} width={32}></Image>
        </Link>
        <Link href={"https://twitter.com/AsyncSwift"} target="_blank">
          <Image alt="icon image" src={X} width={32}></Image>
        </Link>
        <Link href={"https://apps.apple.com/app/id1645349429"} target="_blank">
          <Image alt="icon image" src={AppStore} width={32}></Image>
        </Link>
      </div>
    </footer>
  );
}
