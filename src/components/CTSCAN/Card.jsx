import React from "react";
import "./card.css"; // Import the CSS file

const Card = () => {
  return (
    <>
      <div className="card-container1">
        <h1>CT Scans by Types</h1>
        <p>
          Computer Tomography (CT) Scans are advanced diagnostic procedures that
          combine a series of X-ray images taken in cross-sectional slices
          through the soft tissues, bones, and blood vessels inside your body.
          This scanning method is quick, painless, and provides the radiologist
          with high-quality images.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>CT Angiography</h2>
          <p>
            This type of CT scan is used to visualize blood vessels and detect
            conditions like aneurysms or blockages.
          </p>
        </div>
        <div className="card">
          <h2>CT Brain Scan</h2>
          <p>
            Specifically designed to capture detailed images of the brain, this
            scan helps diagnose strokes, tumors, and other brain-related
            conditions.
          </p>
        </div>
        <div className="card">
          <h2>CT Pulmonary Angiogram</h2>
          <p>
            Used to diagnose pulmonary embolisms, this scan provides detailed
            images of the pulmonary arteries.
          </p>
        </div>
        <div className="card">
          <h2>CT Bone Scan</h2>
          <p>
            Used to diagnose pulmonary embolisms, this scan provides detailed
            images of the pulmonary arteries.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
