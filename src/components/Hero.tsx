import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from './FadeInBlur';
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
        <motion.div
          className="profile-header"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="profile-pic-container" variants={itemVariants}>
            <img
              src="images/profile_pic.jpeg"
              alt="Chandra Shekhar Suthar"
              className="profile-avatar"
              width="160"
              height="160"
              loading="eager"
              decoding="async"
            />
          </motion.div>
          <div className="profile-info">
            <motion.h1 className="profile-name" variants={itemVariants}>Chandra Shekhar Suthar</motion.h1>
            <motion.p className="profile-title" variants={itemVariants}>Mobile App Engineer, Android and Flutter Expert</motion.p>
            <motion.p className="profile-location" variants={itemVariants}>
              <i className="fas fa-map-marker-alt" /> Udaipur, Rajasthan, India
            </motion.p>
            <motion.p className="profile-bio" variants={itemVariants}>
              Crafting elegant mobile experiences with clean architecture. Transforming ideas into scalable native and cross-platform mobile applications.
            </motion.p>
            
            <motion.div className="profile-actions" variants={itemVariants}>
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
            </motion.div>

            {/* Horizontal Animated Reviews Track directly below CTA buttons */}
            <motion.div variants={itemVariants} style={{ width: '100%' }}>
              <HeroReviews />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
