import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from './FadeInBlur';
import { servicesData } from '../data/services';

declare global {
  interface Window {
    handleServiceToContactClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }
}

export const Services: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.handleServiceToContactClick) {
      window.handleServiceToContactClick(e);
    }
  };

  return (
    <section id="services" className="section" role="region" aria-labelledby="services-heading">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 id="services-heading" className="section-title">Services</h2>
            <p className="section-subtitle">What I can build for you</p>
          </motion.div>
          
          <motion.div className="services-grid" variants={containerVariants}>
            {servicesData.map((service, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                variants={itemVariants}
              >
                <i className={`fas ${service.icon} service-icon`} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        
          <motion.div className="services-cta-container" variants={itemVariants}>
            <a
              href="#contact"
              className="btn btn-primary btn-extended-fab"
              onClick={handleClick}
            >
              <i className="fas fa-paper-plane" /> Request a Quote
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
