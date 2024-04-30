import React from 'react';
import { useLocation } from 'react-router-dom'; 

function AnotherPage() {
  const location = useLocation();
  const email = location.state.email; 

  return (
    <div>
      <h1>Another Page</h1>
      <p>Email: {email}</p>
      
    </div>
  );
}

export default AnotherPage;
