import Image from "next/image";
import Link from "next/link";

import notion from "../../public/notion.svg";
import twitter from "../../public/twitter.svg";
import instagram from "../../public/instagram.svg";

import style from "../../styles/modules/Info.module.css";
const SNS = () => {
  return (
    <div className={style.getInfo}>
      <h4>To get latest information</h4>
      <div className={style.SNSContainer}>
        <Link href="https://unnnyong.notion.site/AsyncSwift-9baba57eb8f8416d877bd5d2aba4a62d">
          <Image
            style={{ cursor: "pointer" }}
            alt="Notion logo"
            src={notion}
            width={32}
            height={32}
          />
        </Link>

        <Link href="https://twitter.com/AsyncSwift">
          <Image
            style={{ cursor: "pointer" }}
            alt="Twitter logo"
            src={twitter}
            width={32}
            height={32}
          />
        </Link>

        <Link href="https://www.instagram.com/asyncswift/">
          <Image
            style={{ cursor: "pointer" }}
            alt="Instagram logo"
            src={instagram}
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
};

export default SNS;
