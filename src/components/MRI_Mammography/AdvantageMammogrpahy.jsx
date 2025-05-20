import React from "react";
import "./advantageMammography.css"; // Import the updated CSS file
import image from "./mammogram.jpg"; // Replace with your image path

const AdvantageMammography = () => {
  return (
    <div className="advantage-mammography-container">
      <div className="advantage-mammography-text">
        <h1>Advantages of Mammography</h1>
        <div className="advantage-list">
          <ul>
            <li>
              <span className="tick-icon">✔</span>
              Early detection of breast cancer even before symptoms appear.
            </li>
            <li>
              <span className="tick-icon">✔</span>
              Non-invasive and quick procedure, providing clear and accurate
              results.
            </li>
            <li>
              <span className="tick-icon">✔</span>
              Reduces the risk of mortality through timely treatment.
            </li>
            <li>
              <span className="tick-icon">✔</span>
              Helps in detecting small tumors that may not be felt during a
              physical exam.
            </li>
            <li>
              <span className="tick-icon">✔</span>A safe, widely recognized
              procedure with minimal risks.
            </li>
          </ul>
        </div>
      </div>
      <div className="advantage-mammography-image">
        <img src={image} alt="Mammography" />
      </div>
    </div>
  );
};

export default AdvantageMammography;
