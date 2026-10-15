import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from './FadeInBlur';
import { socialsData } from '../data/socials';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <motion.div
        className="container footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="footer-content">
          <motion.div className="footer-left" variants={itemVariants}>
            <p className="footer-copy">&copy; 2026 Chandra Shekhar Suthar · All rights reserved.</p>
            <p className="footer-sub">Building high-quality Native Android & Flutter experiences</p>
          </motion.div>
          <motion.div className="footer-socials" role="list" aria-label="Footer social media links" variants={itemVariants}>
            {socialsData.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={social.ariaLabel}
              >
                <i className={`${social.iconType} ${social.icon}`} aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};
