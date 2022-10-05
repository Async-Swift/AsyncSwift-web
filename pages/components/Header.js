import Image from "next/image";
import logoFile from "../../public/AsyncLogo.svg";

const Header = () => {
  return (
    <header>
      <Image
        src={logoFile}
        alt="AsyncSwift Community Logo"
        width={62}
        height={60}
      />
      <style jsx>
        {`
          header {
            margin-left: 6rem;
            margin-top: 4rem;
            margin-bottom: 6rem;
            height: 60px;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
