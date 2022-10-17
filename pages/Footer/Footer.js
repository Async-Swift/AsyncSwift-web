import Link from "next/link";
import Image from "next/image";

import LogoFile from "../../public/AsyncLogo.svg";

const Footer = () => {
  return (
    <footer>
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
      <div> &copy; 2022.AsyncSwift all rights reserved.</div>
      <div> &copy; contect us: asyncswift@gmail.com</div>
    </footer>
  );
};

export default Footer;
