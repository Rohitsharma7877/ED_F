import React from "react";
import "./WhatisECG.css";
import img2 from "./img2.jpg";

const WhatisECG = () => {
  return (
    <div className="whatisECG-container">
      <div className="whatisECG-image">
        <img src={img2} alt="MRI Scan" />
      </div>
      <div className="whatisECG-text">
        <h1>What is Electrocardiogram(ECG)?</h1>
        <div className="whatisECG-list">
          <p>
            Electrocardiogram (ECG) is a test that measures the electrical
            activity of the heart, helping to detect heart problems. It records
            the heart's rhythm, the size of the heart chambers, and the function
            of the heart muscle. ECG is a non-invasive procedure and provides
            valuable insights for diagnosing various heart conditions.{" "}
          </p>
          <div className="whatisECG-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Heart Rhythm Monitoring: Detects irregularities in heartbeats.{" "}
              </li>
              <li>
                <span className="check-icon">✔</span>
                Diagnosis of Heart Conditions: Helps identify conditions like
                arrhythmias, heart attacks, or heart disease.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Non-Invasive & Quick: The test is painless, quick, and requires
                no incisions or injections.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisECG;
