import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`hero ${scrolled ? 'fade-out' : ''}`}>
      <div className="hero-content">
        <h1 className="glitch-text">Simon's Portfolio</h1>
        <p className="subtitle">Frontend Developer</p>
        <div className="scroll-indicator">
          <span>Explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
        <img src="/images/New Project (18).png" alt="Logo" className="hero-logo" />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="cosmic-portal"></div>
    </section>
  );
};

export default Hero;