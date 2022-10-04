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
            margin-left: 40px;
            margin-top: 40px;
            height: 120px;

            font-weight: bold;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
