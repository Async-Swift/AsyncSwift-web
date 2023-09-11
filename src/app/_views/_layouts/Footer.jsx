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
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const userDeviceEnv = window.navigator.userAgent;
    if (
      userDeviceEnv.indexOf("iPhone") > -1 ||
      userDeviceEnv.indexOf("Android") > -1
    ) {
      setMobile(true);
    }

    return () => {};
  }, []);

  return isMobile ? (
    <footer className="flex justify-end w-full h-30 pb-11 pr-16 max-sm:justify-start max-sm:flex-col max-sm:pl-4 max-sm:pb-44">
      <div className="text-zinc-500 text-base font-normal leading-none hidden max-sm:block">
        To get latest information
      </div>
      <div className="flex gap-8 items-center mt-6">
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
  ) : (
    <footer className="flex justify-end w-full h-30 pb-11 pr-16 max-sm:justify-start max-sm:flex-col max-sm:pl-4">
      <div className="text-zinc-500 text-base font-normal leading-none hidden max-sm:block">
        To get latest information
      </div>
      <div className="flex gap-8 items-center mt-6">
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
