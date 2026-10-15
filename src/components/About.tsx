import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" role="region" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="about-heading" className="section-title" data-aos="fade-up">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p className="lead">
              I'm a passionate Mobile App Engineer with 3+ years of experience building high-quality native and cross-platform mobile applications that users love.
            </p>
            <p>
              My journey in mobile development started with a curiosity about how apps work, 
              and it evolved into a career where I get to solve complex problems and create 
              intuitive user experiences every day. I specialize in Kotlin, Java, and Dart, with a strong focus on clean architecture, MVVM patterns, and modern native and cross-platform development practices.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fas fa-cubes" />
                <span>Clean Architecture Expert</span>
              </div>
              <div className="highlight-item">
                <i className="fab fa-google-play" />
                <span>Play Store Publishing</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-sync-alt" />
                <span>Agile Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
