//Dependencies
import React from 'react';

//Styling
import './SocialLinks.css';

//Assets
import { FOOTER_SOCIAL_LINKS } from '../../../assets/info';

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;