import React from 'react';

const Footer = () => {
  // Function to handle user feedback submission
  const handleFeedback = () => {
    // Placeholder logic for handling user feedback submission
    console.log('Feedback submitted!');
    // Implement actual feedback submission logic (e.g., API call) here
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Weather Search App. All rights reserved.</p>
        <div className="feedback-section">
          <button onClick={handleFeedback}>Provide Feedback</button>
          {/* Add a link to a feedback form or a modal for user feedback */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
