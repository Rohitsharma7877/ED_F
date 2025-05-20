import React from 'react'
import './benefitsCTScan.css'
import img3 from './ctimg4.jpg'

const BenefitsCTScan = () => {
  return (
    <div className="benefitsCTScan-container">
      <div className="benefitsCTScan-content">
        <div className="benefitsCTScan-details">
          <div className="benefitsCTScan-header">
            <h1>Benefits of Getting an CT Scan</h1>
          </div>
          <div className="benefitsCTScanlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Detailed Imaging: Provides clear, cross-sectional views of bones, organs, and tissues.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Quick Diagnosis: Delivers rapid results, ideal for emergencies.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Non-Invasive: Painless and minimally invasive procedure.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Detects Conditions: Identifies fractures, tumors, blood clots, and internal bleeding.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Guides Treatment: Assists in planning surgeries and monitoring treatment effectiveness.
              </li>
              
            </ul>
          </div>
        </div>
        <div className="benefitsCTScan-image">
          <img src={img3} alt="CT Scan" />
        </div>
      </div>
    </div>
  )
}

export default BenefitsCTScan