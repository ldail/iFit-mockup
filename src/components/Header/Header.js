import React from 'react';
import {ReactComponent as IFitCoachLogo} from '../../assets/logos/ifit-coach-logo.svg'
import {ReactComponent as MenuIcon} from '../../assets/icons/ellipsis-v-solid.svg';

import './Header.css';
import { SUBNAV_LIST } from '../../assets/info';

const Header = ({topHeaderRef, subHeaderRef}) => {
  return (
    <header className="header">
      <div className="top-header" ref={topHeaderRef}>
        <h1>
          <span className="hidden">iFit Coach</span>
          <IFitCoachLogo />
        </h1>
        <div className="fixed-side-nav">
          <button className="blue-button">SIGN UP</button>
          <MenuIcon className="menu-icon" />
        </div>
      </div>
      <ul className="info-header" ref={subHeaderRef}>
        {SUBNAV_LIST.map((navItem,i) =>
          <li key={i}><a href={navItem.url}>{navItem.title}</a></li>
        )}
      </ul>
    </header>
  );
};

export default Header;