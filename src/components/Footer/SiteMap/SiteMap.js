import React from 'react';
import { FOOTER_MAP } from '../../../assets/info';
import './SiteMap.css';

const SiteMap = () => {
  return (
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
  );
};

export default SiteMap;