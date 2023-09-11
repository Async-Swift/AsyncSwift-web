import Image from "next/image";
import Link from "next/link";
import SNS from "./SNS";
import Ticket from "./Ticket";
import LogoFile from "/public/LogoHorizental.png";
import style from "/styles/modules/Header.module.css";
import InfoStyle from "/styles/modules/Info.module.css";

const Header = () => {
  return (
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
  );
};

export default Header;
