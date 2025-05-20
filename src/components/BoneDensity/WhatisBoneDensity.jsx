import React from "react";
import "./WhatisBoneDensity.css";
import img1 from "./whatisbonedensitytest.png";

const WhatisBoneDensity = () => {
  return (
    <div className="whatisBoneDensity-container">
      <div className="whatisBoneDensity-image">
        <img src={img1} alt="MRI Scan" />
      </div>
      <div className="whatisBoneDensity-text">
        <h1>What is Bone Density Test?</h1>
        <div className="whatisBoneDensity-list">
          <p>
            A bone density test, or DEXA scan, measures bone strength and
            mineral content using low-dose X-rays. It helps detect osteoporosis
            and fracture risks, providing T-scores and Z-scores for assessment.
            The test is quick, painless, and non-invasive, focusing on areas
            like the spine and hip. It is often recommended for those at risk,
            such as postmenopausal women or older adults.
          </p>
          <div className="whatisBoneDensity-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Measures bone mineral density, especially in the spine, hip, or
                forearm.{" "}
              </li>
              <li>
                <span className="check-icon">✔</span>
                Uses low-dose X-rays to detect osteoporosis or fracture risks.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Results are given as T-scores and Z-scores.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisBoneDensity;
