import Link from "next/link";
import Image from "next/image";

import LogoFile from "/public/AsyncLogo.png";
import styles from "/styles/modules/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image
          src={LogoFile}
          alt="AsyncSwift Community Logo"
          width={62}
          height={60}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Link>
      <div className={styles.footerCopyright}>
        <div>&copy; 2022.AsyncSwift all rights reserved.</div>
        <div>
          <a href="mailto:asyncswift@gmail.com">Contact us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
