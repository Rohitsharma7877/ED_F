import React from "react";
import "./PageDoesNot.css";
import errorpg from './assests/404page.jpg'

const PageDoesNot = () => {
  return (
    <div className="PageDoesNot">
      <div className="PageDoesNot-container">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
        <a href="/" className="PageDoesNot-home-link">Go Back to Home</a>
      </div>
    </div>
  );
};

export default PageDoesNot;
