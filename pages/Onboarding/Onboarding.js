import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

import onboardingScript from "./OnboardingScript.js";
import styles from "../../styles/modules/Onboarding.module.css";
import birdImage from "../../public/birds/s1.svg";

const Onboarding = () => {
  return (
    <section className={styles.onboarding}>
      <main>
        <div className={styles.container}>
          <div className={(styles.items, styles.info)}>
            <h1>Nesting</h1>

            <div>
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
            </div>
          </div>

          <div className={styles.items}>
            <h2>둥지를 틀다</h2>
            <h4>
              SyncSwift 2022
              <br />
              Conference
            </h4>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Onboarding;
