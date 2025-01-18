import { Link } from 'react-router-dom';
import { navigation } from '../constants/links';
import logo from '../assets/cashflow-logo1.png';
import '../mocks/HomePage.css';
import { useState } from 'react';
import { useDarkMode } from '../Context/DarkModeContext.tsx';

export const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { darkMode, toggleDarkMode } = useDarkMode();

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
              {hoveredItem === item.name && (
                <div className="popup-container" onMouseLeave={() => setHoveredItem(null)}>
                  <div className="popup">
                    <div className='popup-div'>
                      <h1 className='popup-headliner'>Discover Banking</h1> <br/>
                    </div>
                    <div className='popup-div-inside'>
                      <ul className='popup-categories'>Accounts
                        <li><Link to=''>Checking</Link></li>
                        <li><Link to=''>Savings</Link></li>
                        <li><Link to=''>CDs</Link></li>
                        <li><Link to=''>IRAs</Link></li>
                      </ul><br/>
                      <ul className='popup-categories'>Investments
                        <li><Link to=''>Stocks</Link></li>
                        <li><Link to=''>Bonds</Link></li>
                        <li><Link to=''>Mutual Funds</Link></li>
                        <li><Link to=''>ETFs</Link></li>
                      </ul><br/>
                      <ul className='popup-categories'>Plans
                        <li><Link to=''>Retirement</Link></li>
                        <li><Link to=''>College</Link></li>
                        <li><Link to=''>Home</Link></li>
                        <li><Link to=''>Auto</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <button onClick={toggleDarkMode} className="toggle-mode">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="LoginPage" className='Log-in'>Log in</Link>
        <Link to="RegisterPage" className='Sign-up'>Sign up</Link>
      </div>
    </div>
  );
};
