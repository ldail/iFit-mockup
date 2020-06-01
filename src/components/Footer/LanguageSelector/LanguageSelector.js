//Dependencies
import React from 'react';

//Styling
import './LanguageSelector.css';

//Assets
import downArrow from '../../../assets/icons/down-arrow.png';

const LanguageSelector = () => {
  return (
    <section className="footer-section language-container">
      <form id="language-selection-form">
        <div className="select-container">
            <label htmlFor="language-selection">Choose a language</label>
            <select className="language-selection" name="language-selection" id="language-selection">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Korean">Korean</option>
              <option value="German">German</option>
            </select>
            <div className="select-button"><img src={downArrow} alt="select option" /></div>
        </div>
      </form>
    </section>
  );
};

export default LanguageSelector;