import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin, faTwitter, faAngellist } from '@fortawesome/free-brands-svg-icons';

const LandingHeroHead = () => {
  const [menuState, setMenuState] = useState('');

  function toggleMenu(e) {
    e.preventDefault();
    !menuState ? setMenuState('is-active') : setMenuState('');
  };

  return (
    <header className={"navbar"}>
      <div className={"container is-fullhd is-fluid navBarBgColor"}>
        <div className={"navbar-brand"}>
          <span className={"navbar-item"} >
            <div className={"box p-2"}>
              <nav className={"level"}>
                <img className={"mx-1"} src={"https://github.com/COrtaDev/bl3-companion-updated/raw/main/react-app/public/brandlogoBL3.png"} alt={"Logo"} />
                <p>Borderlands 3 Companion App</p>
              </nav>
            </div>
          </span>
          <span
            className={`navbar-burger ${menuState}`}
            data-target={"navbarMenuHero"}
            onClick={toggleMenu}>
            {/* We need this for mobile... */}
            <span aria-hidden={true}></span>
            <span aria-hidden={true}></span>
            <span aria-hidden={true}></span>
          </span>
        </div>
        <div id={"navbarMenuHero"} className={`navbar-menu ${menuState}`}>
          <div className={"navbar-end"}>
            <span className={"navbar-item"}>
              <a
                className={"button is-link is-inverted"}
                href={"https://cortadev.github.io/"}
                target={"_blank"}
              >
                <span className={"icon"}>
                  <FontAwesomeIcon icon={faFolderOpen} />
                </span>
                <span>My Portfolio</span>
              </a>
            </span>
            <span className={"navbar-item"}>
              <a
                className={"button is-link is-inverted"}
                href={"https://github.com/COrtaDev"}
                target={"_blank"}
              >
                <span className={"icon"}>
                  <FontAwesomeIcon icon={faGithubAlt} />
                </span>
                <span>GitHub</span>
              </a>
            </span>
            <span className={"navbar-item"}>
              <a
                className={"button is-link is-inverted"}
                href={"https://www.linkedin.com/in/conrad-orta-16598014/"}
                target={"_blank"}
              >
                <span className={"icon"}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
                <span>LinkedIn</span>
              </a>
            </span>
            <span className={"navbar-item"}>
              <a
                className={"button is-link is-inverted"}
                href={"https://twitter.com/CortaDev"}
                target={"_blank"}
              >
                <span className={"icon"}>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
                <span>Twitter</span>
              </a>
            </span>
            <span className={"navbar-item"}>
              <a
                className={"button is-link is-inverted"}
                href={"https://angel.co/u/conrad-orta"}
                target={"_blank"}
              >
                <span className={"icon"}>
                  <FontAwesomeIcon icon={faAngellist} />
                </span>
                <span>AngelList</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );

}

export default LandingHeroHead;
