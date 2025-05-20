import React from "react";
import "./BenefitsECG.css";
import img3 from "./ecggraphImage.png";

const BenefitsECG = () => {
  return (
    <div className="benefitsECG-container">
      <div className="benefitsECG-content">
        <div className="benefitsECG-details">
          <div className="benefitsECG-header">
            <h1>Benefits of Getting an MRI-Mammography</h1>
          </div>
          <div className="benefitsECGlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Detects Heart Issues Early: Identifies problems like arrhythmias
                or heart attacks.{" "}
              </li>
              <li>
                <span className="check-icon">✔</span>
                Monitors Heart Health: Tracks heart rhythm and function
                regularly.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Quick & Non-Invasive: A painless and fast procedure.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Guides Treatment: Helps doctors plan the right treatment.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Risk Factor Identification: Detects abnormal heart patterns and
                other risks.
              </li>
            </ul>
          </div>
        </div>
        <div className="benefitsECG-image">
          <img src={img3} alt="CT Scan" />
        </div>
      </div>
    </div>
  );
};

export default BenefitsECG;
