import { useDarkMode } from '../Context/DarkModeContext';
import { Header } from './Header';
import '../mocks/HomePage.css';
import Lottie from 'lottie-react';
import animationData from '../assets/banking-animation.json';

export const StartPage = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <main>
        <div className="hero-features-container">
          <section id="hero" className="hero">
            <div className="hero-container">
              <div className="hero-content">
                <h2>Join our community!</h2>
                <p>Financial suppert at your disposal.</p>
              </div>
              <div className="hero-animation">
                <Lottie
                  animationData={animationData}
                  style={{ width: 500, height: 500 }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
