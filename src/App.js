import React from 'react';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="top-header">
          <h1>iFIt Coach Icon</h1>
          <button>Sign up</button>
        </div>
        <div className="info-header">
          <ul>
            <li>EXERCISE</li>
            <li>NUTRITION</li>
            <li>ACTIVITY</li>
            <li>SLEEP</li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="hero-image">
          <h2>
            <span>The best personal training,</span>
            <span>right in your own home</span>
          </h2>
          <button>Join iFit Coach</button>
        </div>
        <div className="reviews">
          <ul>
            <li>
              <h4>CompanyName</h4>
              <p>Review goes here.</p>
            </li>
            <li>
              <h4>CompanyName</h4>
              <p>Review goes here.</p>
            </li>
            <li>
              <h4>CompanyName</h4>
              <p>Review goes here.</p>
            </li>
          </ul>
        </div>
        <div className="videos">
          <ul>
            <li>
              <img src="#" alt="video thumbnail" />
              <div className="video-details">
                <div className="video-title-info">
                  <h5>Video title here</h5>
                  <img src="#" alt="user avatar" />
                </div>
                <ul className="video-stats">
                  <li>30 mins</li>
                  <li>6m views</li>
                </ul>
                <a href="#" className="video-expand-link">VIEW DETAILS</a>
              </div>
            </li>
            <li>
              <img src="#" alt="video thumbnail" />
              <div className="video-details">
                <div className="video-title-info">
                  <h5>Video title here</h5>
                  <img src="#" alt="user avatar" />
                </div>
              </div>
            </li>
            <li>
              <img src="#" alt="video thumbnail" />
              <div className="video-details">
                <div className="video-title-info">
                  <h5>Video title here</h5>
                  <img src="#" alt="user avatar" />
                </div>
                <ul className="video-stats">
                  <li>30 mins</li>
                  <li>6m views</li>
                </ul>
                <a href="#" className="video-expand-link">VIEW DETAILS</a>
              </div>
            </li>
            <li>
              <img src="#" alt="video thumbnail" />
              <div className="video-details">
                <div className="video-title-info">
                  <h5>Video title here</h5>
                  <img src="#" alt="user avatar" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="equipment">
          <h3>Interested in our exciting iFit-enabled equipment?</h3>
          <ul>
            <li className="equipment-item">
              <img src="#" alt="exercise equipment" />
              <span className="equipment-title">Treadmills</span>
            </li>
          </ul>
        </div>
      </main>
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
    </div>
  );
}

export default App;
