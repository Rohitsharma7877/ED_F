import React from "react";
import "./BenefitsMMGP.css";
import img3 from "./mmgg2.jpeg";

const BenefitsMMGP = () => {
  return (
    <div className="benefitsMMGP-container">
      <div className="benefitsMMGP-content">
        <div className="benefitsMMGP-details">
          <div className="benefitsMMGP-header">
            <h1>Benefits of Getting an MRI-Mammography</h1>
          </div>
          <div className="benefitsMMGPlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                High Sensitivity: Detects early-stage breast cancer, even in
                dense breast tissue.{" "}
              </li>
              <li>
                <span className="check-icon">✔</span>
                Radiation-Free: Uses magnetic fields, making it safer than
                traditional mammography.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Detailed Imaging: Provides 3D images for accurate evaluation of
                abnormalities.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Enhanced Detection: Identifies cancers missed by mammograms or
                ultrasounds.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Ideal for High-Risk Patients: Suitable for individuals with a
                family history of breast cancer or genetic predisposition.
              </li>
            </ul>
          </div>
        </div>
        <div className="benefitsMMGP-image">
          <img src={img3} alt="CT Scan" />
        </div>
      </div>
    </div>
  );
};

export default BenefitsMMGP;
