import React from 'react'
import "./BenefitsXRay.css"
import xrayimg4 from './xrayimg4.jpg'

const BenefitsXRay = () => {
  return (
    <div className="benefitsXRay-container">
      <div className="benefitsXRay-content">
        <div className="benefitsXRay-details">
          <div className="benefitsXRay-header">
            <h1>Benefits of Getting an X-Ray</h1>
          </div>
          <div className="benefitsXRaylist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                Quick Diagnosis: Provides immediate imaging results for fast medical decisions.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Non-Invasive: A painless procedure that requires no surgical intervention.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Detects Fractures: Ideal for identifying broken bones, joint issues, and dislocations.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Versatile Use: Helps diagnose chest infections, dental problems, and abdominal blockages
              </li>
              <li>
                <span className="check-icon">✔</span>
                Affordable and Accessible: Widely available and cost-effective compared to advanced imaging techniques.
              </li>
              
            </ul>
          </div>
        </div>
        <div className="benefitsXRay-image">
          <img src={xrayimg4} alt="CT Scan" />
        </div>
      </div>
    </div>
  )
}

export default BenefitsXRay