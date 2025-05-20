import React from "react";
import "./WhatisPFT.css";
import img1 from "./pftimg2.jpg";

const WhatisPFT = () => {
  return (
    <div className="whatisPFT-container">
      <div className="whatisPFT-image">
        <img src={img1} alt="MRI Scan" />
      </div>
      <div className="whatisPFT-text">
        <h1>Pulmonary Function Test (PFT)?</h1>
        <div className="whatisPFT-list">
          <p>
            A Pulmonary Function Test is a non-invasive test that measures how
            well the lungs work, including their capacity, airflow, and gas
            exchange. It helps diagnose respiratory conditions like asthma,
            COPD, and other lung disorders. PFTs also monitor the effectiveness
            of treatments and track disease progression.{" "}
          </p>
          <div className="whatisPFT-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Measures lung capacity, airflow, and gas exchange efficiency.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Diagnoses and monitors respiratory conditions like asthma or
                COPD.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Guides treatment plans and tracks therapy effectiveness.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisPFT;
