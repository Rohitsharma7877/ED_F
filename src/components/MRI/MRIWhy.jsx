import React from "react";
import "./mriWhy.css";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaUserMd,
} from "react-icons/fa"; // Importing icons

const MRIWhy = () => {
  return (
    <div className="mriwhy-container">
      <div className="mriwhy-text">
        <h1>Why Choose Us for MRI Scans?</h1>
        <div className="mriwhy-advantages-list">
          <div className="mriwhy-box">
            <FaHeartbeat />
            <p>Comprehensive Imaging Accuracy</p>
          </div>
          <div className="mriwhy-box">
            <FaShieldAlt />
            <p>Safe and Comfortable Procedures</p>
          </div>
          <div className="mriwhy-box">
            <FaClock />
            <p>Fast and Reliable Results</p>
          </div>
          <div className="mriwhy-box">
            <FaTools />
            <p>State-of-the-Art Technology</p>
          </div>
          <div className="mriwhy-box">
            <FaUserMd />
            <p>Expert Medical Professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MRIWhy;
