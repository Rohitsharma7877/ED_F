import React from "react";
import "./WhyshouldPFT.css";
import ctscanimg5 from "./eegimg5.png";

const WhyshouldPFT = () => {
  return (
    <div className="whyshouldPFT-main1">
      <div className="whyshouldPFT-main2">
        <div className="whyshouldPFT-box1">
          <div className="whyshouldPFT-box-image">
            <img src={ctscanimg5} alt="ultrasoundPreaper-Image" />
          </div>
        </div>
        <div className="whyshouldPFT-box2">
          <div className="whyshouldPFT-box2-write">
            <div className="whyshouldPFT-header">
              <h1>Who should get Pulmonary Function Test?</h1>
            </div>
          </div>
          <div className="whyshouldPFT-point">
            <p>
              A Pulmonary Function Test is recommended for individuals
              experiencing breathing issues, those at risk of lung diseases, or
              requiring lung health evaluation before surgeries. It’s also
              useful for people exposed to lung irritants.{" "}
            </p>

            <div className="whyshouldPFT-checklist">
              <ul>
                <li>
                  Individuals with symptoms like shortness of breath, wheezing,
                  or chronic cough.
                </li>
                <li>
                  Smokers or those with a family history of lung diseases.
                </li>
                <li>
                  People exposed to pollutants, chemicals, or occupational
                  hazards.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyshouldPFT;
