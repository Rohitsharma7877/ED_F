import React from "react";
import "./cTScanProcess.css"; // Updated CSS file name
import image from "./img3.jpg"; // Replace with your image path

const CTScanProcess = () => {
  return (
    <div className="ct-process-container">
      <div className="ct-process-text">
        <h1>What involves the CT scan process?</h1>
        <div className="ct-process-list">
          <ul>
            <li>
              <span className="checkmark-icon">✔</span>
              You may be instructed not to eat or drink for a few hours before
              the procedure.
            </li>
            <li>
              <span className="checkmark-icon">✔</span>
              As the table slowly moves inside the scanning machine multiple
              X-rays rotate around your body, you may hear a whirring or buzzing
              noise.
            </li>
            <li>
              <span className="checkmark-icon">✔</span>
              You will be instructed to refrain from making any movement as it
              can blur the image. You may need to hold your breath at times.
            </li>
            <li>
              <span className="checkmark-icon">✔</span>
              An efficient panel of specialized radiologists
            </li>
            <li>
              <span className="checkmark-icon">✔</span>
              Fast, automated, and efficient post-processing phase
            </li>
          </ul>
        </div>
      </div>
      <div className="ct-process-image">
        <img src={image} alt="CT Scan" />
      </div>
    </div>
  );
};

export default CTScanProcess;
