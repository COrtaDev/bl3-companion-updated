import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const LoginSignUpCardTabs = () => {
  //TODO:
  //need to define the TABS for the card so we can toggle between forms...
  //need to figure out how to control the toggle forms in order to render the correct selection...
  return (
    <div className={"tabs fulltabs is-boxed is-medium"}>
      <ul>
        <li className={"is-active"}>
          <a>
            <span className={"icon is-small"}><i aria-hidden={true}><FontAwesomeIcon icon={faSignInAlt} /></i></span>
            <span>Login</span>
          </a>
        </li>
        <li>
          <a>
            <span className={"icon is-small"}><i aria-hidden={true}><FontAwesomeIcon icon={faUserPlus} /></i></span>
            <span>Sign Up</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LoginSignUpCardTabs;
