import Link from "next/link";
import Main from "./_components/Main/Main";
import Onboarding from "./_components/Onboarding/Onboarding";
import Image from "next/image";
import SNS from "./_components/SNS";
import Ticket from "./_components/Ticket";
import LogoFile from "/public/LogoHorizental.png";

export default function Page({}) {
  return (
    <main className="w-screen h-full">
      <div className="relative w-full h-full">
        <header className="fixed w-screen top-0 py-[20px] px-[40px] bg-[rgba(0,0,0,0.6)] backdrop-blur-[5px]  max-lg:py-[20px] max-lg:px-[16px]">
          <div className="flex items-center justify-between  w-full h-full ">
            <div className="w-full h-full">
              <Link href="/">
                <Image
                  src={LogoFile}
                  alt="AsyncSwift Community Logo"
                  width={183}
                  height={40}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>

            <SNS></SNS>
          </div>
        </header>
        <Ticket></Ticket>
      </div>
      <Onboarding></Onboarding>
      <Main></Main>
    </main>
  );
}
