import React from "react";
import "./BenefitsMG.css";
import img3 from "./memooimg5.jpeg";

const BenefitsMG = () => {
  return (
    <div className="benefitsMG-container">
      <div className="benefitsMG-content">
        <div className="benefitsMG-details">
          <div className="benefitsMG-header">
            <h1>Benefits of Getting an Mammography</h1>
          </div>
          <div className="benefitsMGlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Early Detection: Finds tumors before symptoms appear, improving
                treatment success.{" "}
              </li>
              <li>
                <span className="check-icon">✔</span>
                Better Survival: Lowers breast cancer deaths with timely
                treatment.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Quick & Safe: A non-invasive, simple screening method.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Detects Issues: Spots benign conditions like cysts early.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Health Tracking: Monitors changes in breast tissue over time.
              </li>
            </ul>
          </div>
        </div>
        <div className="benefitsMG-image">
          <img src={img3} alt="CT Scan" />
        </div>
      </div>
    </div>
  );
};

export default BenefitsMG;
