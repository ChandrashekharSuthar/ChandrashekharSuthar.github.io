import React from 'react';

export const BottomNav: React.FC = () => {
  return (
    <nav className="bottom-nav" aria-label="Mobile Navigation">
      <a href="#main-content" className="bottom-nav-item active">
        <i className="fas fa-user-circle" />
        <span>Profile</span>
      </a>
      <a href="#projects" className="bottom-nav-item">
        <i className="fas fa-briefcase" />
        <span>Work</span>
      </a>
      <a href="#services" className="bottom-nav-item">
        <i className="fas fa-rocket" />
        <span>Services</span>
      </a>
      <a href="#contact" className="bottom-nav-item">
        <i className="fas fa-envelope" />
        <span>Contact</span>
      </a>
    </nav>
  );
};
