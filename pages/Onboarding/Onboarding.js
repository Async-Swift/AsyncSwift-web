import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

// import onboardingScript from "./OnboardingScript.js";
import styles from "../../styles/modules/Onboarding.module.css";
import birdImage from "../../public/birds/s1.svg";
import HBackground from "../../public/birds/hBG.svg";
import VBackground from "../../public/birds/vBG.svg";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// const ComponentsWithNoSSR =
//   dynamic <
//   { props: type; } >a
//   // typescript에서 props를 전달할때 interface를 정의해줍니다.
//   (() => import(onboardingScript),
//   // Component로 사용할 항목을 import합니다.
//   { ssr: false });
// // ssr옵션을 false로 설정해줍니다.

const Onboarding = () => {
  return (
    <section className={styles.onboarding}>
      <main>
        <div className={styles.container}>
          <div className={(styles.items, styles.info)}>
            <h1>Nesting</h1>
            {/* <div>
              브라우저 화면 사이즈 x: {window.width}, y: {window.height}
            </div> */}

            <h4>
              SyncSwift 2022
              <br />
              둥지를 틀다
            </h4>
          </div>

          <div className={styles.items}>
            {/* <h2>둥지를 틀다</h2> */}

            {/* detail */}
            {/* <div>
              <h3>
                2022년
                <br />
                11월 12일 토요일
                <br />
                10:00~18:00
              </h3>

              <h3>
                포항공과대학교
                <br />
                체인지업그라운드 LF
                <br />
                컨퍼런스홀
              </h3>
            </div> */}
          </div>
        </div>
        <article></article>
        {/* <div className={styles.hbackground}>
          <Image
            className={styles.hbackground}
            src={HBackground}
            alt="Bird Image"
            width={1387}
            height={1107}
          />
        </div>

        <div className={styles.vbackground}>
          <Image
            className={styles.vbackground}
            src={VBackground}
            alt="Bird Image"
            width={440}
            height={890}
          />
        </div> */}

        {/* <p>
            <Image src={birdImage} alt="Bird Image" width={80} height={80} />
          </p>
          <p>
            <Image src={birdImage} alt="Bird Image" width={80} height={80} />
          </p>
          <p>
            <Image src={birdImage} alt="Bird Image" width={80} height={80} />
          </p>
          <p>
            <Image src={birdImage} alt="Bird Image" width={80} height={80} />
          </p>
          <p>
            <Image src={birdImage} alt="Bird Image" width={80} height={80} />
          </p> */}
      </main>
    </section>
  );
};

export default Onboarding;
