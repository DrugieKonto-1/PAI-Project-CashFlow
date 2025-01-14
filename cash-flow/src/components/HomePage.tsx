import { useState } from 'react';
import "../mocks/HomePage.css"
import { MainPageForm } from './MainPageForm';

export const HomePage = () => { 
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header">
        <div className="nav-bar">
          <h1 className="brand-logo">Cash Flow</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><button onClick={toggleDarkMode} className="toggle-mode">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button></li>
            </ul>
          </nav>

        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-content">
            <h2>Experience Seamless Banking</h2>
            <p>Advanced financial tools at your fingertips.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>

        <section id="features" className="features">
          <h3>Our Features</h3>
          <div className="feature-grid">
            <div className="feature-item">
              <h4>Real-Time Tracking</h4>
              <p>Monitor your accounts with live updates.</p>
            </div>
            <div className="feature-item">
              <h4>Secure Transactions</h4>
              <p>Top-notch security for your peace of mind.</p>
            </div>
            <div className="feature-item">
              <h4>Personalized Insights</h4>
              <p>Get custom reports tailored to your needs.</p>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <h3>About Cash Flow</h3>
          <p>At Cash Flow, we aim to simplify your financial journey with cutting-edge technology and seamless user experience.</p>
        </section>
        <section id="contact" className="contact">
          <MainPageForm />
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Cash Flow. Redefining Banking Experiences.</p>
      </footer>
    </div>
  );
}
