import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from './FadeInBlur';
import { stackData } from '../data/stack';

export const CoreStack: React.FC = () => {
  return (
    <section id="core-stack" className="section" role="region" aria-labelledby="core-stack-heading">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 id="core-stack-heading" className="section-title">Core Stack</h2>
            <p className="section-subtitle">Technologies and frameworks I specialize in</p>
          </motion.div>
          
          <motion.div className="stack-grid" variants={containerVariants}>
            {stackData.map((category, idx) => (
              <motion.div
                key={idx}
                className="stack-card"
                variants={itemVariants}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
