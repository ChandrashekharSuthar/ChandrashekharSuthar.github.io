import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from './FadeInBlur';
import { reviewsData } from '../data/reviews';

export const HeroReviews: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!isExpanded) {
      // Expand in place - zero scroll manipulation
      setIsExpanded(true);
    } else {
      // Collapse
      setIsExpanded(false);

      // Only scroll back up if user has scrolled down into the expanded reviews
      if (sectionRef.current) {
        const navOffset = window.innerWidth <= 768 ? 20 : 80;
        const rect = sectionRef.current.getBoundingClientRect();
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const sectionTop = rect.top + currentScroll - navOffset;

        if (currentScroll > sectionTop) {
          window.scrollTo({
            top: Math.max(0, sectionTop),
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <div 
      ref={sectionRef} 
      id="client-reviews" 
      className="reviews-staggered-section"
    >
      <div className="reviews-simple-header">
        <h3 className="reviews-simple-title">Client Reviews</h3>
      </div>

      <div 
        id="reviewsMasonryWrapper"
        className={`reviews-masonry-wrapper ${isExpanded ? 'is-expanded' : ''}`}
      >
        <motion.div className="reviews-masonry-grid" variants={containerVariants}>
          {reviewsData.map((review) => (
            <motion.div key={review.id} className="staggered-review-card" variants={itemVariants}>
              <div className="staggered-card-stars" aria-label="5 stars">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>

              <p className="staggered-review-body">"{review.reviewText}"</p>

              <div className="staggered-card-footer">
                <div className="staggered-user-avatar">
                  {review.clientName.charAt(0).toUpperCase()}
                </div>
                <div className="staggered-user-info">
                  <span className="staggered-username">{review.clientName}</span>
                  <span className="staggered-user-country">
                    <span className="staggered-user-flag">{review.countryFlag}</span> {review.country}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="reviews-toggle-container">
        <button
          type="button"
          id="reviewsViewAllBtn"
          className="reviews-view-all-btn"
          onClick={handleToggle}
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Show less' : 'View all reviews'}</span>
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`} />
        </button>
      </div>
    </div>
  );
};
