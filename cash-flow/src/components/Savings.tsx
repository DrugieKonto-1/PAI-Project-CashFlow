import { useDarkMode } from '../Context/DarkModeContext';
import { HeroSection } from './HeroSection';
import { Header } from './Header';
import "../mocks/HomePage.css"

export const Savings = () => { 
  const { darkMode } = useDarkMode();

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <main>
        <div className="hero-features-container">
          <HeroSection />
        </div>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Cash Flow. Redefining Banking Experiences.</p>
      </footer>
    </div>
  );
}