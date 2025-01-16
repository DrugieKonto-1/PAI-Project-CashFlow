import { Link } from 'react-router-dom';
import { navigation } from '../constants/links';
import logo from '../assets/cashflow-logo1.png';
import '../mocks/HomePage.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  return (
    <div className={`nav-bar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Link to='/'>
        <img className="logo" src={logo} alt="Cashflow Logo" />
      </Link>
      <nav>
        <ul className="nav-links">
          {navigation.map((item) => (
            <li key={item.name}>
              <button className='navigation-bar-buttons'>
                <Link className='navigation-bar' to={item.href}>
                  {item.name}
                </Link>
              </button>
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
