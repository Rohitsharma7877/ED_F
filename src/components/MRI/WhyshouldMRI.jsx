import React from "react";
import "./whyshouldMRI.css";
import MRIimage4 from "./MRIimage4.png";

const WhyshouldMRI = () => {
  return (
    <div className="whyshouldMRI-main1">
      <div className="whyshouldMRI-main2">
        <div className="whyshouldMRI-box1">
          <div className="whyshouldMRI-box-image">
            <img src={MRIimage4} alt="ultrasoundPreaper-Image" />
          </div>
        </div>
        <div className="whyshouldMRI-box2">
          <div className="whyshouldMRI-box2-write">
            <div className="whyshouldMRI-header">
              <h1>Who should get MRI Diagnostic?</h1>
            </div>
          </div>
          <div className="whyshouldMRI-point">
            <p>
              People at risk for osteoporosis, such as older adults, those with
              a family history of bone disease, or individuals with certain
              medical conditions, should get a Bone Mineral Density (BMD) test.
            </p>

            <div className="whyshouldMRI-checklist">
              <ul>
                <li>Detects early signs of osteoporosis and bone weakness.</li>
                <li>
                  Helps assess fracture risk, especially in postmenopausal
                  women.
                </li>
                <li>Guides treatment decisions for bone health.</li>
                <li>
                  Essential for monitoring bone density changes over time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyshouldMRI;
