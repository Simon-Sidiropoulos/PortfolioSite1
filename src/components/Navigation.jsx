import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topOffset = section.offsetTop - 70; // Account for header height
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`main-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <img src="./images/New Project (18).png" alt="Logo" className="nav-logo-image" />
          <span className="logo-text">Simon's Portfolio</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
