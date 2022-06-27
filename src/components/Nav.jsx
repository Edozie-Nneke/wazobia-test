import React, { useState } from 'react';
import nav from '../css/nav.module.css';
import { RiArrowDownSFill } from 'react-icons/ri';

export const Nav = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  return (
    <div className={nav.nav}>
      <nav>
        <h3 className={nav.title}>Dashboard</h3>
        <span
          className={
            logoutVisible ? `${nav.logoutVisible}` : `${nav.logoutHidden}`
          }
        >
          Log Out
        </span>
        <div className={nav.user}>
          <h4>Edozie Nneke</h4>
          <RiArrowDownSFill
            className={nav.arrowIcon}
            onClick={() => setLogoutVisible(!logoutVisible)}
          />
        </div>
      </nav>
    </div>
  );
};
