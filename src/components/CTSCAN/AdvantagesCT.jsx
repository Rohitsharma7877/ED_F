import React from "react";
import "./AdvantagesCT.css"; // Updated to match the naming convention
import image from "./img4.jpg"; // Replace with your image path

const AdvantagesCT = () => {
  return (
    <div className="ct-scan-container">
      <div className="ct-scan-image">
        <img src={image} alt="CT Scan" />
      </div>
      <div className="ct-scan-text">
        <h1>Advantages of CT Scans:</h1>
        <p>
          CT scans offer numerous advantages, including providing detailed,
          high-resolution images of internal structures, which aids in accurate
          diagnosis. They are non-invasive and fast, delivering quick results
          that are crucial in emergency situations. CT scans are versatile, used
          for diagnosing a wide range of conditions such as cancer, fractures,
          and internal injuries. They can guide treatments, surgeries, and
          biopsies, ensuring precision and improving outcomes. Additionally, CT
          scans help in early disease detection, monitoring disease progression,
          and minimizing the need for exploratory surgeries, making them a
          valuable diagnostic tool in modern medicine.
        </p>
      </div>
    </div>
  );
};

export default AdvantagesCT;
