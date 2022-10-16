import Image from "next/image";
import Link from "next/link";

import LogoFile from "../../public/AsyncLogo.svg";

import style from "../../styles/modules/Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <a>
          <Image
            src={LogoFile}
            alt="AsyncSwift Community Logo"
            width={62}
            height={60}
          />
        </a>
      </Link>
    </header>
  );
};

export default Header;
