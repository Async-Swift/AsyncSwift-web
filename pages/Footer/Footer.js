import Link from "next/link";
import Image from "next/image";

import LogoFile from "../../public/AsyncLogo.png";

import styles from "../../styles/modules/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
      <div className={styles.footerCopyright}>
        <div>&copy; 2022.AsyncSwift all rights reserved.</div>
        <div>Contact us: asyncswift@gmail.com</div>
      </div>
    </footer>
  );
};

export default Footer;
