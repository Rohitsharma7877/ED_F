import React from 'react'
import './BenefitsTMT.css'
import tmtimg4 from './tmtimg4.jpg'

const BenefitsTMT = () => {
  return (
    <div className="benefitsTMT-container">
    <div className="benefitsTMT-content">
      <div className="benefitsTMT-details">
        <div className="benefitsTMT-header">
          <h1>Benefits of Getting an Treadmill Testing</h1>
        </div>
        <div className="benefitsTMTlist">
          <ul>
            <li>
              <span className="check-icon">✔</span>
              Evaluates Heart Health: Assesses heart performance under stress to detect any issues.
            </li>
            <li>
              <span className="check-icon">✔</span>
              Detects Heart Problems: Identifies irregular rhythms, blockages, or other heart conditions.
            </li>
            <li>
              <span className="check-icon">✔</span>
              Early Detection: Finds heart disease risks before symptoms occur.
            </li>
            <li>
              <span className="check-icon">✔</span>
              Guides Treatment: Helps doctors create personalized heart treatment plans.
            </li>
            <li>
              <span className="check-icon">✔</span>
              Tracks Heart Progress: Monitors changes in heart health over time, especially after treatment.
            </li>
            
          </ul>
        </div>
      </div>
      <div className="benefitsTMT-image">
        <img src={tmtimg4} alt="CT Scan" />
      </div>
    </div>
  </div>
  )
}

export default BenefitsTMT