import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section" role="region" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="contact-heading" className="section-title" data-aos="fade-up">Let's Work Together</h2>
          <p className="section-subtitle" data-aos="fade-up">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form Card */}
          <div className="contact-form-wrapper" data-aos="fade-up">
            <h3 className="contact-box-title">Send a Message</h3>
            <form className="contact-form" id="contactForm">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane" />
                Send Message
              </button>
              <div className="form-status" id="formStatus" />
            </form>
          </div>

          {/* Contact Details / Quick Channels Card */}
          <div className="contact-details-wrapper" data-aos="fade-up" data-aos-delay="100">
            <h3 className="contact-box-title">Connect Directly</h3>
            {/* Contact Cards */}
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="contact-card-info">
                  <h3>Email</h3>
                  <p className="contact-value">chandrashekharsuthar.work@gmail.com</p>
                </div>
                <a href="mailto:chandrashekharsuthar.work@gmail.com" className="visit-btn" aria-label="Send email">
                  <i className="fas fa-arrow-up-right-from-square" />
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fab fa-linkedin" />
                </div>
                <div className="contact-card-info">
                  <h3>LinkedIn</h3>
                  <p className="contact-value">linkedin.com/in/chandrashekharsuthar</p>
                </div>
                <a href="https://www.linkedin.com/in/chandrashekharsuthar" target="_blank" rel="noopener noreferrer" className="visit-btn" aria-label="Visit LinkedIn">
                  <i className="fas fa-arrow-up-right-from-square" />
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fab fa-github" />
                </div>
                <div className="contact-card-info">
                  <h3>GitHub</h3>
                  <p className="contact-value">github.com/ChandrashekharSuthar</p>
                </div>
                <a href="https://github.com/ChandrashekharSuthar" target="_blank" rel="noopener noreferrer" className="visit-btn" aria-label="Visit GitHub">
                  <i className="fas fa-arrow-up-right-from-square" />
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fab fa-x-twitter" />
                </div>
                <div className="contact-card-info">
                  <h3>X (Twitter)</h3>
                  <p className="contact-value">@sorrychandra</p>
                </div>
                <a href="https://x.com/sorrychandra" target="_blank" rel="noopener noreferrer" className="visit-btn" aria-label="Visit X (Twitter)">
                  <i className="fas fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>

            {/* Platform Tonal CTA Buttons */}
            <div className="contact-links">
              <a href="https://www.fiverr.com/shekharsuthar07" target="_blank" rel="noopener noreferrer" className="contact-link-btn contact-btn-tonal">
                <i className="fas fa-briefcase" />
                <span>Work with me on Fiverr</span>
              </a>
              <a href="https://www.buymeacoffee.com/ChandrashekharSuthar" target="_blank" rel="noopener noreferrer" className="contact-link-btn contact-btn-tonal">
                <i className="fas fa-coffee" />
                <span>Buy Me a Coffee</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
