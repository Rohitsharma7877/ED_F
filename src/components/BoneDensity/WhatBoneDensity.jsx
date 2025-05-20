import React, { useState } from "react";
import "./whatbonedensity.css";
import boneDensity from "./assests/boneDensity2.png";

const WhatBoneDensity = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="whatBoneDensity-main1">
      <div
        className={`whatBoneDensity-main2 ${
          showModal ? "blur-background" : ""
        }`}
      >
        <div className="whatBoneDensity-box1">
          <div className="whatBoneDensity-header">
            <h1>What is Bone Density Test?</h1>
          </div>
          <div className="whatBoneDensity-pragraph">
            <p>
              A bone density test, or DEXA scan, measures bone strength and
              mineral content using low-dose X-rays. It helps detect
              osteoporosis and fracture risks, providing T-scores and Z-scores
              for assessment. The test is quick, painless, and non-invasive,
              focusing on areas like the spine and hip. It is often recommended
              for those at risk, such as postmenopausal women or older adults.
            </p>
            {/* <hr/> */}
          </div>
          <div className="whatBoneDensity-line">.</div>
          <div className="bone-checklist">
            <ul>
              <li>
                Measures bone mineral density, especially in the spine, hip, or
                forearm.
              </li>
              <li>
                Uses low-dose X-rays to detect osteoporosis or fracture risks.
              </li>
              <li>Results are given as T-scores and Z-scores.</li>
              
            </ul>
          </div>
          <div className="whatBoneDensity-form">
            <button className="whatBoneDensity-btn" onClick={handleModalToggle}>
              FILL ENQUIRY FORM
            </button>
          </div>
        </div>
        <div className="whatBoneDensity-box2">
          <div className="whatBoneDensity-image">
            <img src={boneDensity} alt="ultraSound-Image" />
          </div>
          <div className="whatBoneDensity-image-button">
            {/* <button className='whatBoneDensity-image-btn'>Click Me</button> */}
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

export default WhatBoneDensity;
