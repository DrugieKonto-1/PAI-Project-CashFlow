import { useState } from 'react';
import { MainPageForm } from './MainPageForm';
import { HeroSection } from './HeroSection';
import { Features } from './Features';
import { About } from './About'
import { Header } from './Header';
import "../mocks/HomePage.css"

export const HomePage = () => { 
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <div className="hero-features-container">
          <HeroSection />
          <Features />
          <MainPageForm />
          <About />
        </div>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Cash Flow. Redefining Banking Experiences.</p>
      </footer>
    </div>
  );
}
