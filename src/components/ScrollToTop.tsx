import React from 'react';

export const ScrollToTop: React.FC = () => {
  return (
    <button id="scrollToTop" className="scroll-to-top" aria-label="Scroll to top">
      <i className="fas fa-arrow-up" />
    </button>
  );
};
