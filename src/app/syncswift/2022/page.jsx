import Link from "next/link";
import Header from "./_components/Header";
import Main from "./_components/Main/Main";
import Onboarding from "./_components/Onboarding/Onboarding";
import Image from "next/image";
import SNS from "./_components/SNS";
import Ticket from "./_components/Ticket";

export default function Page({}) {
  return (
    <main>
      <div>
        <header className="fixed w-screen top-0 py-12 px-4 bg-red opacity-60 backdrop:blur-sm z-10 max-lg:w-[calc(100vw_-_3.2rem)] max-lg:py-8 max-lg:px-7">
          <div className="flex items-center justify-between">
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

            <SNS locationClassName={InfoStyle.getInfo}></SNS>
          </div>
        </header>
        <Ticket></Ticket>
      </div>
      <Onboarding></Onboarding>
      <Main></Main>
    </main>
  );
}
