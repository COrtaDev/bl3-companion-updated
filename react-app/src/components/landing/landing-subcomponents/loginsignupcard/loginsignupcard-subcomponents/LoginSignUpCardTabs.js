import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const LoginSignUpCardTabs = ({ activeTab, makeActive }) => {
  const [loginState, setLoginState] = useState('');
  const [signupState, setSignupState] = useState('');

  useEffect(() => {
    if (activeTab === 'login') {
      setLoginState('is-active disabledTab');
      setSignupState('');
    } else if (activeTab === 'signup') {
      setSignupState('is-active disabledTab');
      setLoginState('');
    }
  }, [loginState, signupState, activeTab]);

  return (
    <div className={"tabs fulltabs is-boxed is-medium"}>
      <ul>
        <li className={loginState}>
          <a onClick={() => makeActive()} href="#">
            <span className={"icon is-small"}><i aria-hidden={true}><FontAwesomeIcon icon={faSignInAlt} /></i></span>
            <span>Login</span>
          </a>
        </li>
        <li className={signupState}>
          <a onClick={() => makeActive()} href="#">
            <span className={"icon is-small"}><i aria-hidden={true}><FontAwesomeIcon icon={faUserPlus} /></i></span>
            <span>Sign Up</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LoginSignUpCardTabs;
