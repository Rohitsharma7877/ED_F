import React from "react";
import "./mammographyDescription.css"; // Update the CSS file to match the new class names
// import screeningImg from "./mamography1.webp"; // Replace with the correct image path for mammography

const MammographyDescription = () => {
  return (
    <div className="screening-main-container">
      <div className="screening-content">
        <div className="screening-text-box">
          <div className="screening-header">
            <h1>What is Breast Cancer Screening?</h1>
          </div>
          <div className="screening-description">
            <p>
              Mammography is a medical imaging technique used to examine the
              breast tissue for signs of breast cancer or other abnormalities.
              It involves taking X-ray images of the breasts, which help detect
              potential issues such as lumps, cysts, or tumors before they
              become physically noticeable. This non-invasive procedure is a key
              tool in early breast cancer detection, as it can identify
              irregularities at an early stage, improving the chances of
              successful treatment. Mammography is commonly recommended for
              women aged 40 and above, and its routine use is essential in
              monitoring breast health.
            </p>
          </div>
        </div>
        <div className="screening-image-box">
          {/* <img src={screeningImg} alt="Breast Cancer Screening" /> */}
        </div>
      </div>
    </div>
  );
};

export default MammographyDescription;
