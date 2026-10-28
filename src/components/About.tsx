import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from './FadeInBlur';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" role="region" aria-labelledby="about-heading">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 id="about-heading" className="section-title">About Me</h2>
          </motion.div>
          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
