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
      <div className={"container is-fullhd"}>
        <div className={"navbar-brand"}>
          <a className={"navbar-item"} >
            <img src={""} alt={"Logo"} />
            {/* import my logo here if you decide to at some point in the future... */}
            {/* <img></img> */}
          </a>
          <span className={"navbar-burger"} data-target={"navbarMenuHero"}>
            <span></span>
            {/* You have the option to add more <spans> elements here */}
            {/* depending on whether or not you want more navbar items in the header... */}
            {/* add another <span></span> for each item you wish to add... */}
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
