import React from 'react'
import './WhyshouldECG.css'
import img4 from "./ecgIconsImage5.png";

const WhyshouldECG = () => {
  return (
    <div className="whyshouldECG-main1">
          <div className="whyshouldECG-main2">
            <div className="whyshouldECG-box1">
              <div className="whyshouldECG-box-image">
                <img src={img4} alt="ultrasoundPreaper-Image" />
              </div>
            </div>
            <div className="whyshouldECG-box2">
              <div className="whyshouldECG-box2-write">
                <div className="whyshouldECG-header">
                  <h1>Who should get Electrocardiogram(ECG)?</h1>
                </div>
              </div>
              <div className="whyshouldECG-point">
                <p>
                An Electrocardiogram (ECG) is recommended for individuals who have symptoms of heart disease or those at risk due to factors like age or family history. It is particularly helpful for diagnosing heart conditions early and monitoring heart health.{" "}
                </p>
    
                <div className="whyshouldMMGP-checklist">
                  <ul>
                    <li>
                    Individuals with Chest Pain: Helps identify causes of chest discomfort or pain.                    </li>
                    <li>
                    People with Heart Disease Risk Factors: Recommended for those with high blood pressure, diabetes, or a family history of heart disease.{" "}
                    </li>
                    <li>Elderly or Those with Heart Symptoms: Beneficial for older adults or individuals experiencing irregular heartbeats or shortness of breath.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default WhyshouldECG