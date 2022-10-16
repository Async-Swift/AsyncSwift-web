import Image from "next/image";
import Link from "next/link";

import logoFile from "../../public/asyncLogo.svg";

import style from "../../styles/modules/Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <a>
          <Image
            src={logoFile}
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
