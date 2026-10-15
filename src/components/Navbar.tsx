import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <>
      {/* Top Navigation Bar (Desktop Only) */}
      <nav className="nav" role="navigation" aria-label="Main Navigation">
        <div className="container nav-content">
          <a href="#main-content" className="logo">Chandra Shekhar Suthar</a>
          <div className="nav-links" id="navLinks">
            <a href="#main-content" className="desktop-nav-link active">Profile</a>
            <a href="#projects" className="desktop-nav-link">Work</a>
            <a href="#services" className="desktop-nav-link">Services</a>
            <a href="#core-stack" className="desktop-nav-link">Stack</a>
            <a href="#contact" className="desktop-nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="skip-to-main">Skip to main content</a>
    </>
  );
};
