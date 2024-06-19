import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

function AnotherPage() {
  const location = useLocation(); // Get the location object
  const email = location.state.email; // Retrieve the email from location.state

  return (
    <div>
      <h1>Another Page</h1>
      <p>Email: {email}</p>
      {/* Rest of your component */}
    </div>
  );
}

export default AnotherPage;
