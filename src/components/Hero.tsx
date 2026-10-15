import React from 'react';
import { HeroReviews } from './HeroReviews';

export const Hero: React.FC = () => {
  const handleHireMeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && (window as any).handleServiceToContactClick) {
      (window as any).handleServiceToContactClick(e);
    }
  };

  return (
    <section className="hero app-profile-hero" id="main-content" role="main" aria-label="Introduction">
      <div className="container">
        <div className="profile-header" data-aos="fade-up">
          <div className="profile-pic-container">
            <img src="images/profile_pic.jpeg" alt="Chandra Shekhar Suthar" className="profile-avatar" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Chandra Shekhar Suthar</h1>
            <p className="profile-title">Mobile App Engineer, Android and Flutter Expert</p>
            <p className="profile-location"><i className="fas fa-map-marker-alt" /> Udaipur, Rajasthan, India</p>
            
            <div className="profile-quick-stats">
              <div className="quick-stat"><strong className="counter" data-target="3" data-suffix="+">0+</strong><span>Years Exp</span></div>
              <div className="quick-stat"><strong className="counter" data-target="10" data-suffix="+">0+</strong><span>Projects</span></div>
              <div className="quick-stat"><strong className="counter" data-target="15" data-suffix="+">0+</strong><span>Clients</span></div>
            </div>
            
            <p className="profile-bio">
              Crafting elegant mobile experiences with clean architecture. Transforming ideas into scalable native and cross-platform mobile applications.
            </p>
            
            <div className="profile-actions">
              <a
                href="#contact"
                className="btn btn-primary btn-full hero-hire-btn"
                onClick={handleHireMeClick}
              >
                <i className="fas fa-paper-plane" /> Hire Me
              </a>
              <div className="profile-socials">
                <a href="https://github.com/ChandrashekharSuthar" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub profile" title="GitHub">
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                <a href="https://x.com/sorrychandra" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter) profile" title="X (Twitter)">
                  <i className="fab fa-x-twitter" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/chandrashekharsuthar" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn profile" title="LinkedIn">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                <a href="https://www.fiverr.com/shekharsuthar07" target="_blank" rel="noopener noreferrer" className="social-link fiverr-social-link" aria-label="Fiverr profile" title="Fiverr">
                  <span className="fiverr-icon-text">fi<span className="fiverr-dot">.</span></span>
                </a>
                <a href="mailto:chandrashekharsuthar.work@gmail.com" className="social-link" aria-label="Email contact" title="Email">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Horizontal Animated Reviews Track directly below CTA buttons */}
            <HeroReviews />
          </div>
        </div>
      </div>
    </section>
  );
};
