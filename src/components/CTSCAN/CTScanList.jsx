import React from "react";
import "./ctScanList.css"; // Import the CSS file

const CTScanList = () => {
  return (
    <div className="ct-scan-list-container">
      <h2>Various types of CT scans :</h2>
      <ul className="ct-scan-list">
        <li>Conventional (Standard) CT Scan</li>
        <li>Helical (Spiral) CT Scan</li>
        <li>Whole-Body CT Scan</li>
        <li>Cardiac CT Scan</li>
        <li>CT Angiography (CTA)</li>
        <li>Multi-Detector CT (MDCT)</li>
        <li> CT Myelography</li>
        <li>CT for Trauma (Trauma CT)</li>
        <li> Positron Emission Tomography-CT (PET-CT)</li>
        <li> Dental CT (Cone Beam CT)</li>
        {/* Add more items here as needed */}
      </ul>
    </div>
  );
};

export default CTScanList;
