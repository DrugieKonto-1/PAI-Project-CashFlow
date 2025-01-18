import Lottie from 'lottie-react';
import animationData from '../assets/not-found-animation.json';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="animation-container">
        <Lottie animationData={animationData} style={{ width: 700, height: 700 }} />
      </div>
<<<<<<< HEAD
      <a href="/" className="home-link">
      <button className="cta-button">Return to homepage</button>
      </a>
=======
      <Link to="/" className="home-link">
        Come back to the main page.
      </Link>
>>>>>>> c654941541af55255a6dc3f9804a165bff9dfc54
    </div>
  );
};
