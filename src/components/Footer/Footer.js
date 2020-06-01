import React from 'react';
import './Footer.css';
import { FOOTER_MAP, FOOTER_SOCIAL_LINKS } from '../../assets/info';
import downArrow from '../../assets/icons/down-arrow.png';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section site-map">
        {FOOTER_MAP.map((siteMapList, i) => 
          <div className="map-section" key={i}>
            <h6 className="footer-title">{siteMapList.title}</h6>
            <ul className="footer-list">
              {siteMapList.list.map((siteMapItem,i) => 
                <li key={i}><a href={siteMapItem.url}>{siteMapItem.title}</a></li>
              )}
            </ul>
          </div>
        )}
      </section>
      <section className="footer-section">
        <ul className="social-links">
          {FOOTER_SOCIAL_LINKS.map((link,i) => 
            <li key={i}>
              <a href={link.url}>
                <button className="social-link">
                  <div className="social-link-inside" />
                  <img src={link.icon} alt={link.website} className="social-link-icon" />
                </button>
              </a>
            </li>
         )}
        </ul>
      </section>
      <section className="footer-section language-container">
        <div className="select-container">
          <select className="language-selection" name="language-selection" id="language-selection">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Korean">Korean</option>
            <option value="German">German</option>
          </select>
          <div className="select-button"><img src={downArrow} alt="select option" /></div>
        </div>
      </section>
      <section className="footer-section">
        <ul className="site-info">
          <li>© iFit.com. All Rights Reserved.</li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;