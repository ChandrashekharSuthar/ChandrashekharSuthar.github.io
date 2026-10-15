import React, { useState } from 'react';
import { reviewsData } from '../data/reviews';

export const HeroReviews: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="reviews-staggered-section">
      <div className="reviews-simple-header">
        <h3 className="reviews-simple-title">Client Reviews</h3>
      </div>

      <div 
        id="reviewsMasonryWrapper"
        className={`reviews-masonry-wrapper ${isExpanded ? 'is-expanded' : ''}`}
      >
        <div className="reviews-masonry-grid">
          {reviewsData.map((review) => (
            <div key={review.id} className="staggered-review-card">
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
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-toggle-container">
        <button
          type="button"
          id="reviewsViewAllBtn"
          className="reviews-view-all-btn"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Show less' : 'View all reviews'}</span>
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`} />
        </button>
      </div>
    </div>
  );
};
