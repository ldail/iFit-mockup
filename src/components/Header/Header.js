import React from 'react';
import {ReactComponent as IFitCoachLogo} from '../../assets/logos/ifit-coach-logo.svg'

import './Header.css';
import { SUBNAV_LIST, NAV_LIST } from '../../assets/info';

const Header = ({topHeaderRef, subHeaderRef}) => {
  return (
    <header className="header">
      <div className="top-header" ref={topHeaderRef}>
        <h1>
          <span className="hidden">iFit Coach</span>
          <a href="#"><IFitCoachLogo /></a>
        </h1>
        <div className="fixed-side-nav">
          <button className="blue-button">SIGN UP</button>
        </div>
      </div>
      <ul className="info-header">
      {NAV_LIST.map((navItem,i) =>
          <li key={i} className="navigation-item"><a href={navItem.url}><span>{navItem.title}</span></a></li>
        )}
      </ul>
      <ul className="info-header" ref={subHeaderRef}>
        {SUBNAV_LIST.map((navItem,i) =>
          <li key={i}><a href={navItem.url}>{navItem.title}</a></li>
        )}
      </ul>
    </header>
  );
};

export default Header;