import Lottie from 'lottie-react';
import animationData from '../assets/not-found-animation.json';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="animation-container">
        <Lottie animationData={animationData} style={{ width: 700, height: 700 }} />
      </div>
      <Link to="/" className="home-link">
        Come back to the main page.
      </Link>
    </div>
  );
};
