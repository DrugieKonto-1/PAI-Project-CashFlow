import Lottie from 'lottie-react';
import animationData from '../assets/not-found-animation.json';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="animation-container">
        <Lottie animationData={animationData} style={{ width: 700, height: 700 }} />
      </div>
      <a href="/" className="home-link">
        Wroc go strony głownej.
      </a>
    </div>
  );
};