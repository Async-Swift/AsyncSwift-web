import Image from "next/image";
import styles from "/styles/modules/Sponsor.module.css";

import codershigh from "/public/sponsor/codershigh.png";
import samt from "/public/sponsor/samt.png";
import openup from "/public/sponsor/openup.png";
import sponsor1 from "/public/sponsor/sponsor1.png";
import sponsor2 from "/public/sponsor/sponsor2.png";
import sponsor3 from "/public/sponsor/sponsor3.png";

const Sponser = () => {
  return (
    <section className={styles.sponsor}>
      <h3>Partner</h3>
      <div>
        <div className={styles.sponsorGroup}>
          <a href="http://isamt.com/">
            <Image
              className="imagePadding"
              alt="samt"
              src={samt}
              width={580}
              height={290}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </a>
          <div className={styles.gap}></div>
          <a href=" https://www.oss.kr">
            <Image
              alt="openup"
              src={openup}
              width={580}
              height={290}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </a>
        </div>
        <div className={styles.sponsorGroup}>
          <div className={styles.smallSponsor}>
            <a href="https://codershigh.github.io/WebSite/#/">
              <Image
                className="imagePadding"
                alt="codershigh"
                src={codershigh}
                width={280}
                height={140}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </a>
            <div className={styles.gap}></div>

            <Image
              alt="sponsor1"
              src={sponsor1}
              width={280}
              height={140}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={styles.gap}></div>

          <div className={styles.smallSponsor}>
            <Image
              className="imagePadding"
              alt="sponsor2"
              src={sponsor2}
              width={280}
              height={140}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />

            <div className={styles.gap}></div>

            <Image
              alt="sponsor3"
              src={sponsor3}
              width={280}
              height={140}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponser;
