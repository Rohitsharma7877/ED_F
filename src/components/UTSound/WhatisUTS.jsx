import React from "react";
import "./WhatisUTS.css";
import utimage2 from "./utsound2.jpg";

const WhatisUTS = () => {
  return (
    <div className="whatisUTS-container">
      <div className="whatisUTS-image">
        <img src={utimage2} alt="MRI Scan" />
      </div>
      <div className="whatisUTS-text">
        <h1>What is Ultrasonography?</h1>
        <div className="whatisUTS-list">
          <p>
            Ultrasonography, or ultrasound, is a diagnostic imaging technique
            that uses high-frequency sound waves to create real-time images of
            internal organs, tissues, and blood flow. It is commonly used for
            pregnancy monitoring, detecting abnormalities, and guiding
            procedures like biopsies. This non-invasive and radiation-free
            method provides safe and quick insights into various medical
            conditions.
          </p>
          <div className="whatisUTS-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Creates live images of internal organs and blood flow.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Safe, non-invasive, and widely used for pregnancy and
                diagnostics.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Helps guide procedures like biopsies and fluid drainage.
              </li>
              {/* <li>
                <span className="check-icon">✔</span>
                Ideal for emergency medical situations.
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisUTS;
