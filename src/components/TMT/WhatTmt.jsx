import React from "react";
import "./whatTmt.css"; // Updated CSS filename

const WhatTmt = () => {
  return (
    <div className="treadmill-desc-box">
      <div className="treadmill-desc-container">
        {/* Left Container (Text Content) */}
        <div className="treadmill-desc-text-content">
          <h2>
            <i className="fas fa-heartbeat"></i>
            What is a Treadmill Test?
          </h2>
          <p>
            A Treadmill Test (TMT), also known as an Exercise Stress Test, is a
            diagnostic procedure that evaluates the performance of your heart
            during physical activity. It involves walking or running on a
            treadmill while your heart rate, blood pressure, and electrical
            activity are monitored.
          </p>
        </div>
        <div className="divider"></div>
        {/* Right Container (Additional Information) */}
        <div className="treadmill-desc-additional-info">
          <h3>
            <i className="fas fa-check-circle"></i> Benefits of a Treadmill Test
          </h3>
          <p>
            <i className="fas fa-arrow-right"></i> Assesses heart health and
            detects risks.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Monitors heart response under
            stress.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Helps in early detection of
            heart disease.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Provides vital data for
            treatment decisions.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Non-invasive and safe for all
            ages.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Guides exercise programs for
            heart patients.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Quick and reliable results
            for immediate insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatTmt;
