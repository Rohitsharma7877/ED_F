import React from "react";
import "./TestimonialsSection.css"; // Import the CSS file
import image from "./XRay.jpg"; // Replace with your image path

const TestimonialsSection = () => {
  return (
    <div className="two-column-container">
      <div className="two-column-image">
        <img src={image} alt="X-Ray" />
      </div>
      <div className="two-column-text">
        <h1>Advantages of X-Ray Imaging:</h1>
        <div className="xray-list">
          <p>
            X-ray imaging is a fundamental diagnostic tool with many advantages.
            It provides clear, detailed images of bones, organs, and tissues,
            helping doctors identify fractures, infections, tumors, and other
            conditions. One of the key benefits of X-ray is its non-invasive
            nature, which makes it a safe and quick method for diagnostic
            purposes. The process is fast, and results are typically available
            within minutes, making it especially valuable in emergency medical
            situations. X-rays are also versatile, used for both diagnostic and
            therapeutic purposes. They can assist in planning surgeries, guiding
            treatments, and monitoring disease progression, offering a clear
            view of the internal body without the need for invasive procedures.
            Furthermore, X-ray imaging plays a crucial role in the early
            detection of health conditions, improving the chances of successful
            treatment and recovery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
