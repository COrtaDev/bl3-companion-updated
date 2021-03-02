import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

const LandingHeroFoot = () => {
  return (
    <footer className={"footer"}>
      <div className={"container is-justify-content-center"}>
        <section className={"section pb-3"}>
          <nav className={"level "}>
            <span className={"level-item is-justify-content-space-around "}>
              <div className={"column is-2"}></div>
              <p className={"is-size-5"}>
                Checkout some of the other projects in my portfolio!
              </p>
              <a
                href={"https://cortadev.github.io/"}
                target={"_blank"}
                referrerPolicy={"no-referrer"}
                rel={"noreferrer"}
              >
                <img
                  src={
                    "https://raw.githubusercontent.com/COrtaDev/COrtaDev.github.io/master/images/COrtaDev-Logo-outlined.png"
                  }
                  alt={"logo"}
                  // crossorigin
                />
              </a>
              <div className={"column is-2"}></div>
            </span>
          </nav>
        </section>
        <section className={"section pt-2"}>
          <div className={"container"}>
            <span className={"level-item is-size-3"}>Contact Me:</span>
            <nav className={"level"}>
              <div className={"column is-3"}></div>
              <span className={"level-item"}>
                <a
                  href={"https://github.com/COrtaDev"}
                  className={"icon"}
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                  rel={"noreferrer"}
                >
                  <FontAwesomeIcon icon={faGithubAlt} size={"2x"} />
                </a>
              </span>
              <span className={"level-item"}>
                <a
                  href={"https://www.linkedin.com/in/conrad-orta-16598014/"}
                  className={"icon"}
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                  rel={"noreferrer"}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size={"2x"} />
                </a>
              </span>
              <span className={"level-item"}>
                <a
                  href={"https://twitter.com/CortaDev"}
                  className={"icon"}
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                  rel={"noreferrer"}
                >
                  <FontAwesomeIcon icon={faTwitter} size={"2x"} />
                </a>
              </span>
              <span className={"level-item"}>
                <a
                  href={"https://angel.co/u/conrad-orta"}
                  className={"icon"}
                  target={"_blank"}
                  referrerPolicy={"no-referrer"}
                  rel={"noreferrer"}
                >
                  <FontAwesomeIcon icon={faAngellist} size={"2x"} />
                </a>
              </span>
              <div className={"column is-3"}></div>
            </nav>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default LandingHeroFoot;
