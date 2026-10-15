import React from 'react';
import { socialsData } from '../data/socials';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-copy">&copy; 2026 Chandra Shekhar Suthar · All rights reserved.</p>
            <p className="footer-sub">Building high-quality Native Android & Flutter experiences</p>
          </div>
          <div className="footer-socials" role="list" aria-label="Footer social media links">
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
          </div>
        </div>
      </div>
    </footer>
  );
};
