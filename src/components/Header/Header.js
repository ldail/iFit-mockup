//Dependencies
import React from 'react';

//Styling
import './Header.css';

//Assets
import {ReactComponent as IFitCoachLogo} from '../../assets/logos/ifit-coach-logo.svg'
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
      <ul className="info-header nav">
      {NAV_LIST.map((navItem,i) =>
          <li key={i} className="navigation-item"><a href={navItem.url}><span>{navItem.title}</span></a></li>
        )}
      </ul>
      <div className="desktop-container">
        <ul className="info-header sub-nav" ref={subHeaderRef}>
          {SUBNAV_LIST.map((navItem,i) =>
            <li key={i}><a href={navItem.url}>{navItem.title}</a></li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;