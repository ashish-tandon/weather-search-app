import React, { useState } from 'react';

const Top = () => {
  // State to manage user input
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search submission
  const handleSearch = () => {
    // Implement search functionality (e.g., call API)
    console.log('Searching for:', searchQuery);
    // Clear search input after submission
    setSearchQuery('');
  };

  return (
    <div className="top-section">
      <h1>Weather Search</h1>
      {/* Search input */}
      <input
        type="text"
        placeholder="Enter location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Search button */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Top;
