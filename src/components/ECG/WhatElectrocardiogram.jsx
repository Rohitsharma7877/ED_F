import React, { useState } from "react";
import "./whatElectrocardiogram.css";
// import ecgImage from "./ecgImage2.jpg";

const WhatElectrocardiogram = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="whatElectrocardiogramy-main1">
      <div
        className={`whatElectrocardiogramy-main2 ${
          showModal ? "blur-background" : ""
        }`}
      >
        <div className="whatElectrocardiogramy-box1">
          <div className="whatElectrocardiogramy-header">
            <h1>What is Electrocardiogram (ECG)?</h1>
          </div>
          <div className="whatElectrocardiogramy-pragraph">
            <p>
              An Electrocardiogram (ECG) is a medical test that measures the
              electrical activity of the heart to assess its rhythm, rate, and
              overall health. It helps detect heart abnormalities such as
              arrhythmias, blockages, or heart attacks.
            </p>
            {/* <hr/> */}
          </div>
          <div className="whatElectrocardiogramy-line">.</div>
          <div className="bone-checklist">
            <ul>
              <li>
                Measures Heart's Electrical Activity: Records electrical signals
                to evaluate heart function
              </li>
              <li>
                Non-invasive Procedure: Simple, painless, and quick test using
                electrodes placed on the skin.
              </li>
              <li>
                Detects Heart Conditions: Identifies irregular heartbeats, heart
                attacks, or other cardiac issues.
              </li>
              <li>
                Widely Used in Diagnosis: Essential in routine checkups,
                emergencies, and monitoring heart health.
              </li>
              <li>
                Monitors Treatment Effectiveness: Tracks heart conditions during
                and after treatments or surgeries.
              </li>
            </ul>
          </div>
          {/* <div className="whatElectrocardiogramy-form">
            <button
              className="whatElectrocardiogramy-btn"
              onClick={handleModalToggle}
            >
              FILL ENQUIRY FORM
            </button>
          </div> */}
        </div>
        <div className="whatElectrocardiogramy-box2">
          <div className="whatElectrocardiogramy-image">
            <img src={ecgImage} alt="Electrocardiogramy-Image" />
          </div>
          <div className="whatElectrocardiogramy-image-button">
            {/* <button className='whatElectrocardiogramy-image-btn'>Click Me</button> */}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleModalToggle}>
              &times;
            </button>
            <h2>Request for Facility Service</h2>
            <form>
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email *" required />
              <input type="text" placeholder="Phone No. *" required />
              <button type="submit">NEXT</button>
            </form>
            <p>
              <strong>TAT Attention!</strong> Response Time to FORMs: Within 6
              hours on best effort basis
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatElectrocardiogram;
