import React from 'react'
import './benefitsMRI.css'
import MRIimage3 from './benefitofmri.jpg'

const BenefitsMRI = () => {
  return (
    <div className="benefitsMRI-container">
      <div className="benefitsMRI-content">
        <div className="benefitsMRI-details">
          <div className="benefitsMRI-header">
            <h1>Benefits of Getting an MRI Diagnostic</h1>
          </div>
          <div className="benefitsMRIlist">
            <ul>
              <li>
                <span className="check-icon">✔</span>
                High-Resolution Imaging: Provides clear images of soft tissues and organs.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Non-Invasive: Painless procedure without radiation exposure.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Early Detection: Identifies abnormalities early for timely treatment.
              </li>
              <li>
                <span className="check-icon">✔</span>
                Versatile: Diagnoses brain, spine, joint, and organ issues.
              </li>
              <li>
                <span className="check-icon">✔</span>
                3D Views: Offers detailed imaging from multiple angles.
              </li>
              
            </ul>
          </div>
        </div>
        <div className="benefitsMRI-image">
          <img src={MRIimage3} alt="CT Scan" />
        </div>
      </div>
    </div>
  )
}

export default BenefitsMRI