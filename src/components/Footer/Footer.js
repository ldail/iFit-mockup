import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <h6 className="footer-title">Company</h6>
        <ul className="footer-list">
          <li>About</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
        <h6 className="footer-title">Account</h6>
        <ul className="footer-list">
          <li>Log In</li>
          <li>Create Account</li>
        </ul>
        <h6 className="footer-title">Support</h6>
        <ul className="footer-list">
          <li>Help Center</li>
          <li>Accessibility</li>
        </ul>
      </section>
      <section className="footer-section">
        <ul>
          <li>`icon`</li>
          <li>`icon`</li>
          <li>`icon`</li>
          <li>`icon`</li>
          <li>`icon`</li>
        </ul>
      </section>
      <section className="footer-section">
        <select name="language-selection" id="language-selection">
          <option value="English">English</option>
        </select>
      </section>
      <section className="footer-section">
        <ul>
          <li>c iFit.com. All right reserved.</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;