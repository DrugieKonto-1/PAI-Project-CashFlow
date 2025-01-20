import { HeroSection } from './HeroSection';
import { Features } from './Features';
import { Header } from './Header';
import "../mocks/HomePage.css";
import { useDarkMode } from '../Context/DarkModeContext.tsx';
import { MainPageForm } from './MainPageForm.tsx';
// Strona Główna
export const HomePage = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <main>
        <div className="hero-features-container">
          <HeroSection />
          <Features />
          <MainPageForm />
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Cash Flow. Redefining Banking Experiences.</p>
      </footer>
    </div>
  );
};
