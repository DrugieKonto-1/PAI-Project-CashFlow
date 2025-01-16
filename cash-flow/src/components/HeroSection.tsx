import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import animationData from '../assets/banking-animation.json';

export const HeroSection = () => (
  <section id="hero" className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <h2>Experience Seamless Banking</h2>
        <p>Advanced financial tools at your fingertips.</p>
        <Link to="/Start" className="cta-button">Get Started</Link>
      </div>
      <div className="hero-animation">
        <Lottie 
          animationData={animationData}
          style={{ width: 400, height: 400 }}
        />
      </div>
    </div>
  </section>
);
