import React from 'react';
import nav from '../css/nav.module.css';
import { RiArrowDownSFill } from 'react-icons/ri';

export const Nav = () => {
  return (
    <div className={nav.nav}>
      <nav>
        <h3 className={nav.title}>Dashboard</h3>
        <div className={nav.user}>
          <h4>Edozie Nneke</h4>
          <RiArrowDownSFill className={nav.arrowIcon} />
        </div>
      </nav>
    </div>
  );
};
