import React from "react";
import "./WhatisMMGP.css";
import mmgg2 from "./MRImomgrimg2.jpeg";

const WhatisMMGP = () => {
  return (
    <div className="whatisMMGP-container">
      <div className="whatisMMGP-image">
        <img src={mmgg2} alt="MRI Scan" />
      </div>
      <div className="whatisMMGP-text">
        <h1>What is MRI-Mammography?</h1>
        <div className="whatisMMGP-list">
          <p>
            MRI-Mammography is a specialized imaging technique that uses
            magnetic resonance imaging to produce detailed pictures of breast
            tissues. It is often used for high-risk patients or to evaluate
            abnormalities detected by other imaging methods. This method is
            highly sensitive and does not use ionizing radiation.{" "}
          </p>
          <div className="whatisMMGP-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Provides detailed images of dense or abnormal breast tissues.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Recommended for high-risk patients or inconclusive mammogram
                results.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Safe and radiation-free, ideal for comprehensive breast
                screening.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Ideal for emergency medical situations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisMMGP;
