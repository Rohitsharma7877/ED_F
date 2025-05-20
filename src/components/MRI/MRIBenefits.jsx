import React from "react";
import "./mriBenefits.css";

const MRIBenefits = () => {
  return (
    <div className="mri-desc-box">
      <div className="mri-desc-container">
        {/* Left Container (Text Content) */}
        <div className="mri-desc-text-content">
          <h2>
            <i className="fas fa-brain"></i>
            Benefits of MRI
          </h2>
          <p>
            Magnetic Resonance Imaging (MRI) is a powerful diagnostic tool that
            provides detailed images of internal organs, tissues, and structures
            without using radiation. It is widely used for diagnosing and
            monitoring a range of medical conditions with unmatched precision.
          </p>
        </div>
        <div className="mri-divider"></div>
        {/* Right Container (Benefits List) */}
        <div className="mri-desc-additional-info">
          <h3>
            <i className="fas fa-check-circle"></i> Key Benefits of MRI
          </h3>
          <p>
            <i className="fas fa-arrow-right"></i> Non-invasive and
            radiation-free imaging.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Provides detailed views of
            soft tissues.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Ideal for brain, spinal cord,
            and joint scans.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Detects abnormalities early
            for better outcomes.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Helps monitor treatment
            effectiveness.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Versatile use for many
            medical conditions.
          </p>
          <p>
            <i className="fas fa-arrow-right"></i> Produces highly accurate and
            reliable results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MRIBenefits;
