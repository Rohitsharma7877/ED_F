import React from 'react'
import './BenefitsBoneDensity.css'
import img3 from './benifityofbonedensitytest.jpg'

const BenefitsBoneDensity = () => {
  return (
    <div className="benefitsBoneDensity-container">
          <div className="benefitsBoneDensity-content">
            <div className="benefitsBoneDensity-details">
              <div className="benefitsBoneDensity-header">
                <h1>Benefits of Getting an Bone Density</h1>
              </div>
              <div className="benefitsCTScanlist">
                <ul>
                  <li>
                    <span className="check-icon">✔</span>
                    Early Detection of Osteoporosis: Identifies decreased bone density before fractures occur, allowing for timely intervention. 
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
            <div className="benefitsBoneDensity-image">
              <img src={img3} alt="CT Scan" />
            </div>
          </div>
        </div>
  )
}

export default BenefitsBoneDensity