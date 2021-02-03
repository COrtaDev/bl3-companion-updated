import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedin, faTwitter, faAngellist } from '@fortawesome/free-brands-svg-icons';
// import { brandlogoBL3 } from '../../../../public'

const LandingHeroHead = () => {
  //TODO:
  //need to define the hero head here
  return (
    <header className={"navbar"}>
      <div className={"container is-fullhd is-fluid"}>
        <div className={"navbar-brand"}>
          <span className={"navbar-item"} >
            <div className={"box p-2"}>
              <nav className={"level"}>
                <img className={"mx-1"} src={"https://github.com/COrtaDev/bl3-companion-updated/raw/main/react-app/public/brandlogoBL3.png"} alt={"Logo"} />
                <p>Boderlands 3 Companion App</p>
              </nav>
            </div>
          </span>
          <span className={"navbar-burger"} data-target={"navbarMenuHero"}>
            {/* We need this for mobile... */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id={"navbarMenuHero"} className={"navbar-menu"}>
          <div className={"navbar-end"}>
            <span className={"navbar-item"}>
              <a className={"button is-link is-inverted"}>
                <span className={"icon"}>
                  <FontAwesomeIcon icon={faFolderOpen} />
                </span>
                <span>My Portfolio</span>
              </a>
            </span>
            <span className={"navbar-item"}>
              <a className={"button is-link is-inverted"}>
                <span className={"icon"}>
                  <FontAwesomeIcon icon={faGithubAlt} />
                </span>
                <span>GitHub</span>
              </a>
            </span>
            <span className={"navbar-item"}>
              <a className={"button is-link is-inverted"}>
                <span className={"icon"}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
                <span>LinkedIn</span>
              </a>
            </span>
            <span className={"navbar-item"}>
              <a className={"button is-link is-inverted"}>
                <span className={"icon"}>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
                <span>Twitter</span>
              </a>
            </span>
            <span className={"navbar-item"}>
              <a className={"button is-link is-inverted"}>
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
