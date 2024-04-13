import React, { useState } from "react";
import './App.css';
import Top from './Top.js';
import Middle from './Middle.js';
import Footer from './Footer.js';

// Define initial state for user feedback
const initialFeedback = {
  rating: 0,
  comment: ""
};

// Main App component
export default function App() {
  // State to manage user feedback
  const [feedback, setFeedback] = useState(initialFeedback);

  // Function to handle user feedback submission
  const submitFeedback = () => {
    // Implement logic to submit feedback to backend or analytics service
    // Reset feedback form after submission
    setFeedback(initialFeedback);
  };

  return (
    <div className="App">
      {/* Top section for search functionality */}
      <Top />

      {/* Middle section for displaying weather data */}
      <Middle />

      {/* Footer section for additional information or links */}
      <Footer />

      {/* User feedback form */}
      <div className="feedback-form">
        <h3>Provide Feedback</h3>
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          value={feedback.rating}
          onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
        />
        <textarea
          placeholder="Comments"
          value={feedback.comment}
          onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
        ></textarea>
        <button onClick={submitFeedback}>Submit</button>
      </div>
    </div>
  );
}
