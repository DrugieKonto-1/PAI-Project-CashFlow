import { useState } from 'react';
import { HeroSection } from './HeroSection';
import { navigation } from "../constants/links"
import "../mocks/HomePage.css"

export const Page1 = () => { 
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
          <li>{navigation.map((item) => (
							<a className='navigation-bar' key={item.name} href={item.href}
							>
								{item.name}
							</a>
						))}
          </li>
          <li>
            <button onClick={toggleDarkMode} className="toggle-mode">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <a href="LoginPage" className='Log-in'>Log in</a>
      <a href="RegisterPage" className='Sign-up'>Sign up</a>
    </div>
  </header>

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

