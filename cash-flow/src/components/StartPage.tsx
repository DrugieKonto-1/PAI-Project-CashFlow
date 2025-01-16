import { useState } from 'react';
import { Header } from './Header';
import '../mocks/HomePage.css';
import Lottie from 'lottie-react';
import animationData from '../assets/banking-animation.json';

export const StartPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <div className="hero-features-container">
          <section id="hero" className="hero">
            <div className="hero-container">
              <div className="hero-content">
                <h2>Experience Seamless Banking</h2>
                <p>Advanced financial tools at your fingertips.</p>
              </div>
              <div className="hero-animation">
                <Lottie
                  animationData={animationData}
                  style={{ width: 400, height: 400 }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Cash Flow. Redefining Banking Experiences.</p>
      </footer>
    </div>
  );
};
