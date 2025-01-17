import { HeroSection } from './HeroSection';
import { Header } from './Header';
import "../mocks/HomePage.css"
import { useDarkMode } from '../Context/DarkModeContext';


export const Personal = () => { 
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

