import { Link } from 'react-router-dom';
import { navigation } from '../constants/links';
import logo from '../assets/cashflow-logo1.png';
import '../mocks/HomePage.css';
import { useState, useEffect } from 'react';
import { useDarkMode } from '../Context/DarkModeContext.tsx';
import Arrow from '../assets/Arrow.png';
import { useUser } from "../Context/UserContext.tsx";

export const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { userData } = useUser();

useEffect(() => {
    if (hoveredItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }})

  return (
    <div className={`nav-bar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Link to='/'>
        <img className="logo" src={logo} alt="Cashflow Logo" />
      </Link>
      <nav>
        <ul className="nav-links">
          {navigation.map((item) => (
            <li key={item.name} onMouseEnter={() => setHoveredItem(item.name)}>
              <Link className='navigation-bar' to={item.href}>
                <button className='navigation-bar-buttons'>{item.name}</button>
              </Link>
              {hoveredItem === item.name && (    // Wyswietlenie popupu
                <div className="popup-container" onMouseLeave={() => setHoveredItem(null)}>
                  <div className="popup">
                    <div className='popup-div'>
                      <h1 className='font-bold'>Discover Banking</h1> <br/>
                      <img className="w-16 h-15" id='Arrow' src={Arrow} />
                    </div>
                    <div className='popup-div-inside'>
                      <ul className='popup-categories'><p className='popup-categories-paragraph'>Accounts</p>
                        <li className='popup-options'><Link to='/'>Checking</Link></li>
                        <li className='popup-options'><Link to='/'>Savings</Link></li>
                        <li className='popup-options'><Link to='/'>CDs</Link></li>
                        <li className='popup-options'><Link to='/'>IRAs</Link></li>
                      </ul><br/>
                      <ul className='popup-categories'><p className='popup-categories-paragraph'>Investments</p>
                        <li className='popup-options'><Link to='/'>Stocks</Link></li>
                        <li className='popup-options'><Link to='/'>Bonds</Link></li>
                        <li className='popup-options'><Link to='/'>Mutual Funds</Link></li>
                        <li className='popup-options'><Link to='/'>ETFs</Link></li>
                      </ul><br/>
                      <ul className='popup-categories'><p className='popup-categories-paragraph'>Plans</p>
                        <li className='popup-options'><Link to='/'>Retirement</Link></li>
                        <li className='popup-options'><Link to='/'>College</Link></li>
                        <li className='popup-options'><Link to='/'>Home</Link></li>
                        <li className='popup-options'><Link to='/'>Auto</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <button onClick={toggleDarkMode} className="toggle-mode"> 
              {darkMode ? 'Light Mode' : 'Dark Mode' // Zmiana dark moda.
              }
            </button>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="LoginPage" className='Log-in'>Log in</Link>
        <Link to="RegisterPage" className='Sign-up'>Sign up</Link>
      </div>
      {userData && <p>Witaj, {userData.name} {userData.lastname}!</p>}
    </div>
  );
};
