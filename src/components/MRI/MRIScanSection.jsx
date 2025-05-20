import React from "react";
import "./mriScanSection.css"; 
import image from "./whatismriscan.jpg"; 

const MRIScanSection = () => {
  return (
    <div className="mriscan-container">
      <div className="mriscan-image">
        <img src={image} alt="what is mri scan" />
      </div>
      <div className="mriscan-text">
        <h1>What is MRI Scan?</h1>
        <div className="mriscan-list">
          <p>
            MRI (Magnetic Resonance Imaging) is a medical imaging technique that
            uses magnets, radio waves, and a computer to create detailed 3D
            images of the body. Unlike X-rays or CT scans, it avoids ionizing
            radiation, making it safer for soft tissue visualization like the
            brain, spinal cord, and organs. This advanced method aligns hydrogen
            atoms using a magnetic field to produce precise images for accurate
            diagnoses and treatment planning.
          </p>
          <div className="mriscan-scanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Safe, no harmful radiation.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Clear 3D soft tissue images.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Ideal for brain and organ scans.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Uses magnets and radio waves.
              </li>
            
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MRIScanSection;
