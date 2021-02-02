import React from 'react';

const LandingHeroHead = () => {
  //TODO:
  //need to define the hero head here
  return (
    <header className={"navbar"}>
      <div className={"container"}>
        <div className={"navbar-brand"}>
          <a className={"navbar-item"} >
            {/* import my logo here if you decide to at some point in the future... */}
            {/* <img></img> */}
          </a>
          <span className={"navbar-burger"} data-target={"navbarMenuHero"}>
            <span></span>
            {/* You have the option to add more <spans> elements here */}
            {/* depending on whether or not you want more navbar items in the header... */}
            {/* add another <span></span> for each item you wish to add... */}
          </span>
          <div id={"navbarMenuHero"} className={"navbar-menu"}>
            <div className={"navbar-end"}>
              <span className={"navbar-item"}>
                <a className={"button is-success is-inverted"}>
                  <span className={"icon"}>
                    <i className={"fab fa-github"}></i>
                  </span>
                  <span>My GitHub</span>
                </a>
              </span>
              {/* If you decide to add more navbar items, you need to define it here */}
              {/* Each item you add will be defined as a <span> that is a child of navbar-end */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );

}

export default LandingHeroHead;
