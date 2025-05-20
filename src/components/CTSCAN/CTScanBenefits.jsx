import React from "react";
import "./cTScanBenefits.css"; // Updated CSS file name
import ctScanImg from "./img1.jpg";

const CTScanBenefits = () => {
  return (
    <div className="ct-scan-container">
      <div className="ct-scan-content">
        <div className="ct-scan-details">
          <div className="ct-scan-header">
            <h1>Benefits of getting a CT scan</h1>
          </div>
          <div className="ct-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                High-speed, high-resolution top-notch quality 3D imaging
              </li>
              <li>
                <span className="check-icon">✔</span>
                Very low radiation exposure
              </li>
              <li>
                <span className="check-icon">✔</span>
                Affordably priced CT scans
              </li>
              <li>
                <span className="check-icon">✔</span>
                An efficient panel of specialized radiologists
              </li>
              <li>
                <span className="check-icon">✔</span>
                Fast, automated, and efficient post-processing phase
              </li>
              <li>
                <span className="check-icon">✔</span>
                An online digital record of the scan for personal reference &
                second opinion
              </li>
            </ul>
          </div>
        </div>
        <div className="ct-scan-image">
          <img src={ctScanImg} alt="CT Scan" />
        </div>
      </div>
    </div>
  );
};

export default CTScanBenefits;
