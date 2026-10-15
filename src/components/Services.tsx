import React from 'react';
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
        <div className="section-header">
          <h2 id="services-heading" className="section-title" data-aos="fade-up">Services</h2>
          <p className="section-subtitle" data-aos="fade-up">What I can build for you</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="service-card"
              data-aos="fade-up"
              {...(idx > 0 ? { 'data-aos-delay': `${idx * 100}` } : {})}
            >
              <i className={`fas ${service.icon} service-icon`} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      
        <div className="services-cta-container" data-aos="zoom-in" data-aos-delay="600">
          <a
            href="#contact"
            className="btn btn-primary btn-extended-fab"
            {...{ onclick: "handleServiceToContactClick(event)" }}
          >
            <i className="fas fa-paper-plane" /> Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};
