import React from "react";
import "./WhatisMG.css";
import img2 from "./memoimg6.jpeg";

const WhatisMG = () => {
  return (
    <div className="whatisMG-container">
      <div className="whatisMG-image">
        <img src={img2} alt="MRI Scan" />
      </div>
      <div className="whatisMG-text">
        <h1>What is Mammography?</h1>
        <div className="whatisMG-list">
          <p>
            Mammography is a medical imaging technique that uses low-dose X-rays
            to detect and diagnose breast abnormalities, especially early-stage
            breast cancer. It is a reliable tool for identifying tumors or
            changes in breast tissue that may not be visible or palpable.
            Regular screenings can significantly improve early detection and
            treatment outcomes.
          </p>
          <div className="whatisMG-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Uses low-dose X-rays for breast tissue examination.{" "}
              </li>
              <li>
                <span className="check-icon">✔</span>
                Helps detect tumors, cysts, or abnormalities early.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Essential for breast cancer screening and diagnosis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisMG;
