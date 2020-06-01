//Dependencies
import React from 'react';
import SiteMap from './SiteMap/SiteMap';
import SocialLinks from './SocialLinks/SocialLinks';
import LanguageSelector from './LanguageSelector/LanguageSelector';

//Styling
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <SiteMap />
      <SocialLinks />
      <LanguageSelector />
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