import Image from "next/image";
import AsyncSwiftLogo from "/public/AsyncLogo.png";
import TBDDesign from "/public/syncswift-2023-tbd-design.png";

// SNS
import Instagram from "/public/sns-icons/instagram.png";
import Youtube from "/public/sns-icons/youtube.png";
import LinkedIn from "/public/sns-icons/linkedIn.png";
import X from "/public/sns-icons/x.png";
import AppStore from "/public/sns-icons/appStore.png";
import Link from "next/link";

export default function Page({}) {
  return (
    <main className="w-screen h-screen">
      <div className="flex flex-col justify-between w-full h-full">
        <header className="flex justify-between w-full pt-9 pl-11 pr-16 max-sm:flex-col-reverse max-sm:gap-6 max-sm:pt-12 max-sm:pl-4">
          <div className="text-3xl font-bold">
            <div>SyncSwift 2022</div>
            <div>Conference</div>
          </div>

          <Image alt="AsyncSwift Logo" src={AsyncSwiftLogo} width={62} />
        </header>

        <div className="flex flex-col items-center gap-32">
          <div className="w-10/12">
            <Image alt="SyncSwift 2023 TBD Design" src={TBDDesign}></Image>
          </div>
          <div className="mt">
            <div className="text-center text-white text-3xl font-extralight">
              From TestFlight to App Store
            </div>
            <div className="text-center text-white text-opacity-50 text-base font-light leading-relaxed mt-2">
              2023.10.21. Pohang
            </div>
          </div>
        </div>

        <footer className="flex justify-end w-full h-30 pb-11 pr-16 max-sm:justify-start max-sm:flex-col max-sm:pl-4">
          <div className="text-zinc-500 text-base font-normal leading-none hidden max-sm:block">
            To get latest information
          </div>
          <div className="flex gap-8 items-center mt-6">
            <Link
              href={"https://www.instagram.com/asyncswift/"}
              target="_blank"
            >
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
            <Link
              href={"https://apps.apple.com/app/id1645349429"}
              target="_blank"
            >
              <Image alt="icon image" src={AppStore} width={32}></Image>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
