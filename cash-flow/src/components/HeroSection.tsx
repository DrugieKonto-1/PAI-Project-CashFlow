import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import '../index.css';
import animationData from '../assets/banking-animation.json';
// Sekcja Głowna
export const HeroSection = () => (
  <section id="hero" className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <h2>Experience Seamless Banking</h2>
        <p>Advanced financial tools at your fingertips.</p>
        <Link to="/Start">
          <button className="cta-button transition ease-in-out duration-300 transform hover:scale-105">Get Started</button>
        </Link>
        
      </div>
      <div className="hero-animation">
        <Lottie 
          animationData={animationData}
          style={{ width: 500, height: 500 }}
        />
      </div>
    </div>
  </section>
);