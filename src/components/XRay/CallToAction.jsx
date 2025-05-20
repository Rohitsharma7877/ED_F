import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="xray-info-section">
      <div className="xray-info-content">
        <h2 className="info-title">
          Why X-Ray Imaging is Essential for Your Health
        </h2>
        <p className="info-description">
          X-ray imaging plays a vital role in detecting fractures, tumors,
          infections, and various medical conditions. It's one of the quickest,
          most effective ways to get a clear understanding of your health.
        </p>
        <div className="xray-benefits">
          <div className="benefit-item">
            <h3 className="benefit-title">Accurate Diagnosis</h3>
            <p className="benefit-description">
              X-rays provide detailed images that assist in identifying
              conditions with precision.
            </p>
          </div>
          <div className="benefit-item">
            <h3 className="benefit-title">Quick Results</h3>
            <p className="benefit-description">
              Our X-ray services offer fast results, allowing your healthcare
              provider to make timely decisions.
            </p>
          </div>
          <div className="benefit-item">
            <h3 className="benefit-title">Minimally Invasive</h3>
            <p className="benefit-description">
              X-ray is a non-invasive method of examining your body, providing a
              clear look without the need for surgery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
