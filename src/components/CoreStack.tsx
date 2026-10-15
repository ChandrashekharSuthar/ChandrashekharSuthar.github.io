import React from 'react';
import { stackData } from '../data/stack';

export const CoreStack: React.FC = () => {
  return (
    <section id="core-stack" className="section" role="region" aria-labelledby="core-stack-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="core-stack-heading" className="section-title" data-aos="fade-up">Core Stack</h2>
          <p className="section-subtitle" data-aos="fade-up">Technologies and frameworks I specialize in</p>
        </div>
        
        <div className="stack-grid">
          {stackData.map((category, idx) => (
            <div
              key={idx}
              className="stack-card"
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 100}
            >
              <div className="stack-card-header">
                <div className="stack-icon">
                  <i className={`${category.iconType || 'fas'} ${category.icon}`} />
                </div>
                <h3>{category.title}</h3>
              </div>
              <p className="stack-card-desc">{category.description}</p>
              <div className="stack-tags">
                {category.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
