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
      <header className={style.header}>
        <div>
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
