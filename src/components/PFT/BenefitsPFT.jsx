import React from "react";
import "./BenefitsPFT.css";
import img3 from "./pftimg3.jpeg";

const BenefitsPFT = () => {
  return (
    <div className="benefitsPFT-container">
      <div className="benefitsPFT-content">
        <div className="benefitsPFT-details">
          <div className="benefitsPFT-header">
            <h1>Benefits of Getting an Pulmonary Function Test (PFT)</h1>
          </div>
          <div className="benefitsPFTlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Detects early signs of lung diseases like asthma or COPD.{" "}
              </li>
              <li>
                <span className="check-icon">✔</span>
                Monitors the effectiveness of ongoing respiratory treatments.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Helps assess lung function before surgeries.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Tracks disease progression for better management.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Identifies breathing issues caused by environmental or
                occupational factors.
              </li>
            </ul>
          </div>
        </div>
        <div className="benefitsPFT-image">
          <img src={img3} alt="CT Scan" />
        </div>
      </div>
    </div>
  );
};

export default BenefitsPFT;
