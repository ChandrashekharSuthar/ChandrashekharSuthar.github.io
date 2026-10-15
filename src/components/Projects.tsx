import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from './FadeInBlur';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" role="region" aria-labelledby="projects-heading">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 id="projects-heading" className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work that I'm proud of</p>
          </motion.div>
          
          <motion.div className="projects-grid" variants={containerVariants}>
            {projectsData.map((project, idx) => (
              <motion.div key={idx} className="project-card" variants={itemVariants}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.link && (
                    <div className="project-overlay">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={project.ariaLabel || `Visit ${project.title}`}
                      >
                        <i className="fas fa-external-link-alt" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
