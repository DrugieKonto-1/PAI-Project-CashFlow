import Lottie from 'lottie-react';
import animationData from '../assets/banking-animation.json'; // You'll need to add this JSON file

export const HeroSection = () => (
  <section id="hero" className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <h2>Experience Seamless Banking</h2>
        <p>Advanced financial tools at your fingertips.</p>
        <a href="/Start" className="cta-button">Get Started</a>
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
