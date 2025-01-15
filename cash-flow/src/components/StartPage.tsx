import { useState } from 'react';
import { navigation } from "../constants/links"
import "../mocks/HomePage.css"
import logo from '../assets/cashflow-logo1.png';
import Lottie from 'lottie-react';
import animationData from '../assets/banking-animation.json';

export const StartPage = () => { 
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>

  <header className="App-header">
    <div className="nav-bar">
    <a href='/'><img className="logo" src={logo} /></a>
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
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Cash Flow. Redefining Banking Experiences.</p>
      </footer>
    </div>
  );
}
