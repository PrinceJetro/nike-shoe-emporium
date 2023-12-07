import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function checkScreenWidth() {
  const minWidth = 450; // Define the minimum width

  if (window.innerWidth < minWidth) {
    // Check if the screen width is less than the minimum width
    // Render your React app
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
);

  } else {
    // Handle the case where the screen width is too wide
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <h1>Exciting news!</h1>
        <p>Nike Shoe Emporium's mobile experience is here. Browse, shop, and explore the latest Nike shoes effortlessly on your PHONE. Desktop design is in progress — stay tuned! </p>
      </React.StrictMode>
    );
    
  }
}

// Call the function when the page loads
checkScreenWidth();
reportWebVitals();
