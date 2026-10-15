import React from 'react';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" role="region" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="projects-heading" className="section-title" data-aos="fade-up">Featured Projects</h2>
          <p className="section-subtitle" data-aos="fade-up">Some of my recent work that I'm proud of</p>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={idx} className="project-card" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
