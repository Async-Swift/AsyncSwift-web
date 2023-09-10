import Image from "next/image";

import notion from "/public/notion.png";
import twitter from "/public/twitter.png";
import instagram from "/public/instagram.png";
import linkedIn from "/public/linkedin.png";
import youtube from "/public/youtube.png";

import style from "/styles/modules/Info.module.css";

const SNS = ({ locationClassName }) => {
  const conferenceInfoUrl = {
    notion:
      "https://unnnyong.notion.site/AsyncSwift-9baba57eb8f8416d877bd5d2aba4a62d",
    instagram: "https://www.instagram.com/asyncswift/",
    twitter: "https://twitter.com/AsyncSwift",
    linkedIn: "https://www.linkedin.com/company/async-swift/",
    youtube: "https://www.youtube.com/channel/UCig96hmPxDF4D3II6idDoaw",
  };

  return (
    <div className={locationClassName || ""}>
      <div className={style.SNSContainer}>
        <a target="_blank" href={conferenceInfoUrl.notion} rel="noreferrer">
          <Image
            alt="Notion logo"
            src={notion}
            width={28}
            height={28}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
        <a target="_blank" href={conferenceInfoUrl.twitter} rel="noreferrer">
          <Image
            alt="Twitter logo"
            src={twitter}
            width={28}
            height={28}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
        <a target="_blank" href={conferenceInfoUrl.instagram} rel="noreferrer">
          <Image
            alt="Instagram logo"
            src={instagram}
            width={28}
            height={28}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
        <a target="_blank" href={conferenceInfoUrl.linkedIn} rel="noreferrer">
          <Image
            alt="LinkedIn logo"
            src={linkedIn}
            width={28}
            height={28}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
        <a target="_blank" href={conferenceInfoUrl.youtube} rel="noreferrer">
          <Image
            alt="Youtube logo"
            src={youtube}
            width={28}
            height={28}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default SNS;
